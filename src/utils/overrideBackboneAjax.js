import backbone from 'backbone';
import xhr from 'aja';
import _ from 'underscore';

function addBody(xhrCall, { data: body, contentType, dataType }) {
  if (body) {
    xhrCall
      .header('Content-Type', contentType)
      .type(dataType)
      .data(body);
  }

  return xhrCall;
}

/**
 * @external {aja.js} http://krampstudio.com/aja.js/
 */
/**
 * XmlHttpRequest options object.
 * @typedef {Object} XHROptions
 * @property {String} url - URL to be requested
 * @property {String} [type='get'] - HTTP Verb
 * @property {String} [contentType='application/json'] - Request content type
 * @property {String} [dataType='json'] - Expected response type
 * @property {boolean|Number|String} [firstAttemptStatus=false] - Internal. Flag to track if it's a first request attempt
 * @property {function} [error=emptyfn] - Error callback
 * @property {function} [success=emptyFn] - Success callback
 * @property {Number} [retryAfter=2000] - Abort the first attempt after `retryAfter` ms
 * @property {function} [onRetry=emptyFn] - Callback executed on first timeout (after `retryAfter` ms if no response
 * is received)
 * @property {Number} [timeoutAfter=3000] - Abort the call after `timeoutAfter` ms. That is, this whole call will be
 * aborted after `retryAfter` *plus* `timeoutAfter` ms.
 * @property {function} [onTimeout=emptyFn] - Timeout callback
 */
function BackboneAjax(options) {
  let xhrCall;
  options = _.defaults(options, {
    type: 'get',
    contentType: 'application/json',
    dataType: 'json',
    firstAttemptStatus: false,
    error: function onDefaultXHRError() {},
    success: function onDefaultXHRSuccess() {},
    timeout: 3000,
    onTimeout: function onDefaultFirstTimeout() {}
  });

  if (!options.url || typeof options.url !== 'string') {
    throw new TypeError('url is not a valid string');
  }

  xhrCall = xhr()
    .method(options.type)
    .timeout(options.timeout)
    .url(options.url)
    .on('timeout', () => {
      console.warn(`Meh! Timeout for ${options.url}!`);
      return false;
    })
    .on('error', options.error)
    .on('success', options.success);
  xhrCall = addBody(xhrCall, options);
  if (typeof options.beforeSend === 'function') {
    xhrCall.setRequestHeader = xhrCall.header;
    options.beforeSend(xhrCall);
  }
  xhrCall.go();

  return xhrCall;
}

backbone.ajax = BackboneAjax;
