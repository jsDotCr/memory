/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import SetupStagePage from './components/SetupStagePage';
import BoardPage from './components/BoardPage';

const router = new Router(on => {

  on('*', async (state) => <App context={state.context} />);

  on('/board', async () => <BoardPage />);
});

export default router;
