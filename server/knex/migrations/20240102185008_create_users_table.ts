import type { Knex } from "knex"
import { TABLE_NAMES } from "../tableNames"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAMES.Users, (table) => {
    table.uuid("user_id").primary().defaultTo(knex.fn.uuid())
    table.string("name").notNullable()
    table.string("email").notNullable().unique()
    table.string("password").notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAMES.Users)
}
