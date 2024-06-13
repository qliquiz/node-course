require('dotenv').config()
import { DataSource } from 'typeorm';
import { User } from './user';


export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: `${process.env.DB_PATH}`,
    synchronize: true,
    entities: [User]
});

AppDataSource.initialize()
    .then(() => console.log('Data Source has been initialized!'))
    .catch((err) => { console.error('Error during Data Source initialization', err) });