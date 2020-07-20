import { Service } from 'egg';
import { Code } from '../util/util';
export default class Hero extends Service {
  public async list() {
    const { ctx } = this;
    const result: any = await ctx.model.Hero.findOne({});
    return Object.assign({}, Code.SUCCESS, {
      data: result,
    });
  }
}