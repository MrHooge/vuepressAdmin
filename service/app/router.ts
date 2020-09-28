import { Application } from 'egg'

export default (app: Application) => {
	const { controller, router } = app

<<<<<<< HEAD
  router.get('/', controller.home.index);
};
=======
	router.get('/', controller.home.index)
	router.get('/hero/list', controller.hero.list)
}
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06
