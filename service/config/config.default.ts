import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
	const config = {} as PowerPartial<EggAppConfig>

	// override config from framework / plugin
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1601304165598_1182'

	// add your egg config in here
	config.middleware = []

	// sequelize
	config.sequelize = {
		dialect: 'mysql',
		host: '47.97.218.202',
		port: 12306,
		database: 'vuepress_admin',
		username: 'root',
		password: '42dfb6476ce99be0',
		timezone: '+08:00', // 表示为东八区的时间
	}

	// add your special config in here
	const bizConfig = {
		sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
	}

	// the return config will combines to EggAppConfig
	return {
		...config,
		...bizConfig,
	}
}
