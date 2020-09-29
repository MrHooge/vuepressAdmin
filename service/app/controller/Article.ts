import { Controller } from 'egg'

export default class ArticleController extends Controller {
	public async list() {
		const { ctx } = this
		ctx.body = await ctx.service.article.list()
	}
}
