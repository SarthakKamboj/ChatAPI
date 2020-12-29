import { createBuildUser } from "./user"
import { isProfane } from "../../utils/isProfane"

const buildUser = createBuildUser({ isProfane })

export { buildUser }
