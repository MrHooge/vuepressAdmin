import { Controller } from 'egg'

export default class HomeController extends Controller {
<<<<<<< HEAD
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.sayHi('egg');
  }
=======
	public async index() {
		const { ctx } = this
		ctx.body = await ctx.service.home.sayHi('egg')
	}
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06
}
