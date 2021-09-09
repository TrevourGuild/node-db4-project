// eslint-disable-next-line no-unused-vars
exports.seed = function (knex, Promise) {
    return knex('recepies').insert([
        {recipe_id: 1, recipie_name: 'Pizza'},
        {recipe_id: 2, recipie_name: 'Hamburgers'},
        {recipe_id: 3, recipie_name: 'Gyros'}
    ])
}