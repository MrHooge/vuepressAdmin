// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHero from '../../../app/controller/hero';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    hero: ExportHero;
    home: ExportHome;
  }
}
