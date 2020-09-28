import { Application } from 'egg';
import * as moment from 'moment'

export default function (app: Application) {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const Home = app.model.define('users', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(40),
        createdAt: {
            type: DATE,
            get() {
                return moment((this as any).getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt: {
            type: DATE,
            get() {
                return moment((this as any).getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    });

    return class extends Home {
    }
}