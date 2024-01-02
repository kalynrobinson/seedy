import { faker } from "@faker-js/faker"

import { USERS } from "./user-mocks"

export function createRandomVibe() {
  const uuid = faker.string.uuid()
  console.log("createRandomVibe", { id: uuid })

  return {
    vibe_id: uuid,
    user_id: faker.helpers.arrayElement(USERS).user_id,
    name: faker.word.adjective(),
    description: faker.lorem.sentence(),
    asset: faker.image.url(),
  }
}

export const VIBES = faker.helpers.multiple(createRandomVibe, {
  count: 30,
})
