// eslint-disable-next-line no-unused-vars
exports.seed = function(knex, Promise) {
    return knex('quantities').insert([
        {qunatity_id: 1, quantity: 0.5, ingredient_id: 1, recipie_id: 1},
        {qunatity_id: 2, quantity: 0.001, ingredient_id: 2, recipie_id: 1},
        {qunatity_id: 3, quantity: 3, ingredient_id: 3, recipie_id: 1},

        {qunatity_id: 1, quantity: 0.002, ingredient_id: 1, recipie_id: 2},
        {qunatity_id: 2, quantity: 1.1, ingredient_id: 2, recipie_id: 2},
        {qunatity_id: 3, quantity: 3.4, ingredient_id: 3, recipie_id: 2},

        {qunatity_id: 1, quantity: 5.1, ingredient_id: 1, recipie_id: 3},
        {qunatity_id: 2, quantity: 2.4, ingredient_id: 2, recipie_id: 3},
        {qunatity_id: 3, quantity: 9.81, ingredient_id: 3, recipie_id: 3},
    ])
}