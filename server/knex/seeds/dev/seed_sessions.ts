import { Knex } from "knex"

import { TABLE_NAMES } from "../../tableNames"
import { SESSIONS } from "../../mocks"

export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAMES.Sessions).del()

  await knex(TABLE_NAMES.Sessions).insert(SESSIONS)
}
