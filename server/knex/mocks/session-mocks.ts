import { faker } from "@faker-js/faker"

import { USERS } from "./user-mocks"

export function createRandomSession() {
  const uuid = faker.string.uuid()
  console.log("createRandomSession", { id: uuid })

  return {
    session_id: uuid,
    user_id: faker.helpers.arrayElement(USERS).user_id,
    method: faker.helpers.arrayElement(["joint", "edible"]),
    notes: faker.lorem.sentence(),
    amount: faker.helpers.arrayElement(["1g", "2g", "3g", "4g", "5g"]),
    amount_relative: faker.helpers.arrayElement(["low", "medium", "high"]),
    potency: faker.helpers.arrayElement(["low", "medium", "high"]),
    strain: faker.lorem.word(),
  }
}

export const SESSIONS = faker.helpers.multiple(createRandomSession, {
  count: 30,
})
