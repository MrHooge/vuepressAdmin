import { Controller } from 'egg';
export default class Hero extends Controller {
  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.hero.list();
  }
}