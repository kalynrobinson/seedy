import { faker } from "@faker-js/faker"

export function createRandomUser(
  name: string = faker.internet.userName(),
  email: string = faker.internet.email(),
  password: string = faker.internet.password(),
) {
  console.log("createRandomUser", { email, password })
  const uuid = faker.string.uuid()

  return {
    user_id: uuid,
    name,
    email,
    password,
    // avatar: faker.image.avatar(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  }
}

export const ADMIN_USER = createRandomUser("Admin", "admin@test.com", "password")

export const USERS = [
  ADMIN_USER,
  ...faker.helpers.multiple(() => createRandomUser(), {
    count: 5,
  }),
]
