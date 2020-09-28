import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
	const config = {} as PowerPartial<EggAppConfig>

	// override config from framework / plugin
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1593704477885_7801'

	// add your egg config in here
	config.middleware = []

	// add your special config in here
	const bizConfig = {
		sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
	}

	config.sequelize = {
		dialect: 'mysql',
		host: '127.0.0.1',
		port: 3306,
		password: '123456',
		database: 'vuepress_admin',
		timezone: '+08:00',
		define: {
			underscored: true, // 注意需要加上这个， egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
			// 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
			// 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
			freezeTableName: true,
		},
	}

	config.security = {
		domainWhiteList: ['localhost:7001'],
		csrf: {
			enable: false,
		},
	}
	config.cors = {
		// origin: '*',
		credentials: true,
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
	}

<<<<<<< HEAD
  config.jwt = {
    secret: '7socq7IKlQ@FQlD3sGAtYLjlrDL5R6wh',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
=======
	// the return config will combines to EggAppConfig
	return {
		...config,
		...bizConfig,
	}
}
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06
