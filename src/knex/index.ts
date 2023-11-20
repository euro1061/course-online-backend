import * as Knex from 'knex';
import { configMysql } from "./knexfile";

const { knex } = Knex.default;

const knexMysql = knex(configMysql);

const testConnection = async () => {
    try {
        await knexMysql.raw('select 1+1 as result');
        console.info('========== Connection to database is OK ==========');
    } catch (error) {
        console.log('========== Connection to database is failed ==========');
        console.log(error);
    }
}

export { knexMysql, testConnection };