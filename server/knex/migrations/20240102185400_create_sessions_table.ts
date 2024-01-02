import type { Knex } from "knex"
import { TABLE_NAMES } from "../tableNames"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAMES.Sessions, (table) => {
    table.uuid("session_id").primary().defaultTo(knex.fn.uuid())
    table.string("method").notNullable()
    table.string("notes")
    table.string("amount")
    table.string("amount_relative").nullable()
    table.string("potency")
    table.string("strain")

    table.uuid("user_id").references("user_id").inTable(TABLE_NAMES.Users).onDelete("CASCADE")

    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAMES.Sessions)
}
