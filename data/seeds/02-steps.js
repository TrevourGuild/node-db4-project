// eslint-disable-next-line no-unused-vars
exports.seed = function (knex, Promise) {
    return knex('steps').insert([
        {step_id: 1, step_instruction: 'Make the dough', recipie_id: 1},
        {step_id: 2, step_instruction: 'Spread the sauce', recipie_id: 1},
        {step_id: 3, step_instruction: 'Add the cheese', recipie_id: 1},
        {step_id: 4, step_instruction: 'Add toppings', recipie_id: 1},
        {step_id: 5, step_instruction: 'Bake', recipie_id: 1},

        {step_id: 1, step_instruction: 'Cook the meat', recipie_id: 2},
        {step_id: 2, step_instruction: 'toast the buns', recipie_id: 2},
        {step_id: 3, step_instruction: 'add letuce an tomatoes', recipie_id: 2},
        {step_id: 4, step_instruction: 'add condiments', recipie_id: 2},
        {step_id: 5, step_instruction: 'build the burger', recipie_id: 2},

        {step_id: 1, step_instruction: 'Cook the Gyro meat', recipie_id: 3},
        {step_id: 2, step_instruction: 'Make tasiki sauce', recipie_id: 3},
        {step_id: 3, step_instruction: 'add onions and tomatoes', recipie_id: 3},
        {step_id: 4, step_instruction: 'add pita bread', recipie_id: 3},
        {step_id: 5, step_instruction: 'add humas', recipie_id: 3},
    ])
}