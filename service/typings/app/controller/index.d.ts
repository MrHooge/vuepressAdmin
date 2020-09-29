// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/Article';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    home: ExportHome;
  }
}
