import { DataSource, DataSourceOptions} from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'task_manager',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrationsTableName: 'history',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
