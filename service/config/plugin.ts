import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
<<<<<<< HEAD
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
=======
	// static: true,
	// nunjucks: {
	//   enable: true,
	//   package: 'egg-view-nunjucks',
	// },
	// sequelize: {
	//   enable: true,
	//   package: 'egg-sequelize',
	// },
	cors: {
		enable: true,
		package: 'egg-cors',
	},
}
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06

export default plugin
