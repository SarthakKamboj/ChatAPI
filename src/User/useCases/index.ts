import { UserType } from "../entity/UserType"
import { buildCreateUser } from "./createUser"

const createUser = buildCreateUser({ saveUserToDb })

function saveUserToDb(user: UserType): number {
    return 5
}

export { createUser }