// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/Article';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
  }
}
