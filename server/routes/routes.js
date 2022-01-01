import express from 'express';

import { getNews } from '../controller/news-control.js';

const routes = express.Router();

routes.get('/news',getNews);

export default routes;