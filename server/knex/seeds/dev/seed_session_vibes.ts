import { Knex } from "knex"

import { TABLE_NAMES } from "../../tableNames"
import { SESSION_VIBES } from "../../mocks"

export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAMES.SessionVibes).del()

  await knex(TABLE_NAMES.SessionVibes).insert(SESSION_VIBES)
}
