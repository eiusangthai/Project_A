export async function up(knex) {
  await knex.schema.createTable("orders", function (table) {
    table.increments("id").primary();

    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table.string("shipping_address").notNullable();
    table.string("shipping_phone").notNullable();
    table.integer("total_price").notNullable();

    table.string("status").notNullable().defaultTo("processing");

    table.timestamps(true, true);
  });

  await knex.schema.createTable("order_items", function (table) {
    table.increments("id").primary();

    table.integer("order_id").unsigned().notNullable();
    table
      .foreign("order_id")
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE");

    table.string("product_id").notNullable();

    table.string("product_name").notNullable();
    table.integer("quantity").notNullable();
    table.integer("price_at_purchase").notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("order_items");
  await knex.schema.dropTableIfExists("orders");
}
