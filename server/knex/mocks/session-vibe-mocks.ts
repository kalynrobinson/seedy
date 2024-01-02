import { faker } from "@faker-js/faker"

import { SESSIONS } from "./session-mocks"
import { VIBES } from "./vibe-mocks"

let availableSessions = [...SESSIONS]

export function createRandomSessionVibe() {
  const session = faker.helpers.arrayElement(availableSessions)
  const vibe = faker.helpers.arrayElement(VIBES)
  console.log("createRandomSessionVibe", { session_id: session.session_id, vibe_id: vibe.vibe_id })

  availableSessions = availableSessions.filter((sesh) => sesh.session_id !== session.session_id)

  return {
    session_id: session.session_id,
    vibe_id: vibe.vibe_id,
  }
}

export const SESSION_VIBES = faker.helpers.multiple(createRandomSessionVibe, {
  count: SESSIONS.length,
})
