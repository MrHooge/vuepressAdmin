import { Service } from 'egg'

/**
 * Article Service
 */
export default class Article extends Service {
	/**
	 * list ()
	 */
	public async list() {
		return await this.ctx.model.Article.findAll()
	}
}
