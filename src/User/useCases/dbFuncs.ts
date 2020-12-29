import { UserType } from "../entity/UserType";

export interface dbFuncs {
    saveUserToDb: (user: UserType) => number
}