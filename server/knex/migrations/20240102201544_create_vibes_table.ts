import type { Knex } from "knex"
import { TABLE_NAMES } from "../tableNames"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAMES.Vibes, (table) => {
    table.uuid("vibe_id").primary().defaultTo(knex.fn.uuid())

    table.string("name").notNullable()
    table.string("description").nullable()
    table.string("asset").notNullable()

    table.uuid("user_id").references("user_id").inTable(TABLE_NAMES.Users).onDelete("CASCADE")

    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAMES.Vibes)
}
