import type { Knex } from "knex"
import { TABLE_NAMES } from "../tableNames"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAMES.SessionVibes, (table) => {
    table.uuid("session_vibe_id").primary().defaultTo(knex.fn.uuid())

    table.uuid("vibe_id").references("vibe_id").inTable(TABLE_NAMES.Vibes).onDelete("CASCADE")
    table
      .uuid("session_id")
      .references("session_id")
      .inTable(TABLE_NAMES.Sessions)
      .onDelete("CASCADE")

    table.unique(["session_id", "vibe_id"])
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAMES.SessionVibes)
}
