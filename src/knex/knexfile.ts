import dotenv from 'dotenv';

dotenv.config();

export const configMysql = {
    client: 'mysql',
    connection: {
        host: process.env.HOST_DB,
        user: process.env.USERNAME_FRONT,
        password: process.env.PASSWORD_FRONT,
        database: process.env.DATABASE_FRONT,
    },
    pool: {
        min: 2,
        max: 10,
        createTimeoutMillis: 3000,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
        propagateCreateError: false,
    },
};