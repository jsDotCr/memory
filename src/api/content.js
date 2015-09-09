/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { join } from 'path';
import { Router } from 'express';
import handlebars from 'handlebars';
import fm from 'front-matter';
import fs from '../utils/fs';

// A folder with Jade/Markdown/HTML content pages
const CONTENT_DIR = join(__dirname, './content');

// Extract 'front matter' metadata and generate HTML
const parseTemplate = (path, templateContent) => {
  const fmContent = fm(templateContent);
  const htmlContent = handlebars.compile(fmContent.body)({ hi: 'there'});
  return Object.assign({ path, content: htmlContent }, fmContent.attributes);
};

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    let path = req.query.path;

    if (!path || path === 'undefined') {
      res.status(400).send({error: `The 'path' query parameter cannot be empty.`});
      return;
    }

    let fileName = join(CONTENT_DIR, (path === '/' ? '/index' : path) + '.hb');
    if (!await fs.exists(fileName)) {
      fileName = join(CONTENT_DIR, path + '/index.hb');
    }

    if (!await fs.exists(fileName)) {
      res.status(404).send({error: `The page '${path}' is not found.`});
    } else {
      const source = await fs.readFile(fileName, { encoding: 'utf8' });
      const content = parseTemplate(path, source);
      res.status(200).send(content);
    }
  } catch (err) {
    next(err);
  }
});

export default router;

