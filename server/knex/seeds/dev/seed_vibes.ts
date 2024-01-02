import { Knex } from "knex"

import { TABLE_NAMES } from "../../tableNames"
import { VIBES } from "../../mocks"

export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAMES.Vibes).del()

  await knex(TABLE_NAMES.Vibes).insert(VIBES)
}
