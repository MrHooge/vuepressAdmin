// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/model/home';

declare module 'egg' {
  interface IModel {
    Home: ReturnType<typeof ExportHome>;
  }
}
