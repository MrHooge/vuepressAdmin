import deepMerge from 'deepmerge';
import _config from './config';
import { setting } from './default';

const config = deepMerge(setting, _config);

export default config;
