import { Knex } from "knex"
import * as bcrypt from "bcryptjs"

import { TABLE_NAMES } from "../../tableNames"
import { USERS } from "../../mocks"

export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAMES.Users).del()

  const usersWithHashedPasswords = await Promise.all(
    USERS.map(async (user) => ({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    })),
  )

  await knex(TABLE_NAMES.Users).insert(usersWithHashedPasswords)
}
