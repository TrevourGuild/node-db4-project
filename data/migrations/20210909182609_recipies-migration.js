
exports.up = async function(knex) {
  await knex.schema
    .createTable('recepies', table =>{
        table.increments('recipe_id')
        table.string('recipie_name', 128).notNullable()
    })
    .createTable('steps', table =>{
        table.increments('step_id')
        table.string('step_instruction', 350).notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recepies')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('ingredients', table =>{
        table.increments('ingrediant_id')
        table.string('ingredient_name', 128).notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recepies')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('quantities', table =>{
        table.increments('quantity_id')
        table.decimal('quantity').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recepies')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')

        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recepies')
};
