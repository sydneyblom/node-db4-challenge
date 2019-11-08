exports.up = function(knex) {
      //need to figure out who is the many and who is the one
      //always want to create our one table first our many table is going to refer to the one table
      return knex.schema
      .createTable('recipes', tbl => {
          tbl.increments();
          tbl.string('recipe_name', 225).unique().notNullable()
      })  
      //chaining a table
      .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.string('ingredient_name', 128).unique().notNullable()
      })
      .createTable('recipe_ingredients', tbl => {
        tbl.increments();
    
        tbl.float('quantity').notNullable()
    
        tbl
        .integer('recipes_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be 'RESTRICT', 'NO ACTION', 'SET NULL'
        .onUpdate('CASCADE');  // about changing the value of the primary key table.
    
        tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    
        });
    };
    exports.down = function(knex) {
        return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients');
    };
    