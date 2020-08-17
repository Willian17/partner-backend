import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('projects' , (table)=> {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('projects')
}