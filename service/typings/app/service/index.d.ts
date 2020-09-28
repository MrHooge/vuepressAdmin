// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
<<<<<<< HEAD
=======
import ExportHero from '../../../app/service/hero';
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06
import ExportHome from '../../../app/service/home';

declare module 'egg' {
  interface IService {
<<<<<<< HEAD
=======
    hero: AutoInstanceType<typeof ExportHero>;
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06
    home: AutoInstanceType<typeof ExportHome>;
  }
}
