// eslint-disable-next-line no-unused-vars
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        {ingrediant_id: 1, ingredient_name: 'sauce', recipe_id: 1},
        {ingrediant_id: 2, ingredient_name: 'dough', recipe_id: 1},
        {ingrediant_id: 3, ingredient_name: 'toppings', recipe_id: 1},


        {ingrediant_id: 1, ingredient_name: 'buns', recipe_id: 2},
        {ingrediant_id: 2, ingredient_name: 'beef', recipe_id: 2},
        {ingrediant_id: 3, ingredient_name: 'condiments', recipe_id: 2},

        {ingrediant_id: 1, ingredient_name: 'pita bread', recipe_id: 3},
        {ingrediant_id: 2, ingredient_name: 'Gyro meat', recipe_id: 3},
        {ingrediant_id: 3, ingredient_name: 'tiziki sauce', recipe_id: 3},
    ])
}