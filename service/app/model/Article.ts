// app/model/Articles.ts
import { Application } from 'egg'

export default function (app: Application) {
	const { STRING, INTEGER } = app.Sequelize
	const Articles = app.model.define(
		'articles',
		{
			id: {
				type: INTEGER, // INTEGER就是mysql中的int
				primaryKey: true,
				autoIncrement: true, // 自动增长
			},
			title: STRING(255),
			tags: STRING(255),
			filename: STRING(255),
			content: STRING(1000),
		},
		{
			// timestamps: false, // 去除createAt updateAt
			createdAt: false, // 表示不启用created_at
			updatedAt: false, // 表示不启用updated_at
			freezeTableName: true, // 使用自定义表名
			// 使用自定义表名之后上面写的users就直接就是你的表名，如果不加的话，你就可以写user，但是自己的表名为users，程序会自动将s加上
			tableName: 'articles', // 自定义的表名，也可以不写，直接用define后面的也可以
			// 只要你使用了freezeTableName，程序就不会自动给你加上s了
		},
	)

	return class extends Articles {}
}
