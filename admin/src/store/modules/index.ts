import deepMerge from "deepmerge";
import account from "./account";
import setting from "./setting";
const modules = deepMerge(account, setting);

export default modules;
