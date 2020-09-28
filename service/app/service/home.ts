<<<<<<< HEAD
import { Service } from 'egg';
=======
import { Service } from 'egg'
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06

/**
 * Test Service
 */
export default class Home extends Service {
<<<<<<< HEAD

    /**
     * sayHi to you
     * @param name - your name
     */
    public async sayHi(name: string) {
        return `hi, ${name}`;
    }
=======
	/**
	 * sayHi to you
	 * @param name - your name
	 */
	public async sayHi(name: string) {
		return `hi, ${name}`
	}
>>>>>>> 46b2c39eab741a058b90d329ede46e24abedab06
}
