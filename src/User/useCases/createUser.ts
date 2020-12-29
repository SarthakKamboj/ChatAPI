import { ErrorType } from "../../ErrorType"
import { buildUser } from "../entity"
import { dbFuncs } from "./dbFuncs"

interface CreateUserInputs {
    name: string
}

interface CreateUserReturnType {
    id?: number,
    errors?: ErrorType[]
}

export const buildCreateUser = (dbFuncs: dbFuncs) => {
    const { saveUserToDb } = dbFuncs

    return (inputs: CreateUserInputs): CreateUserReturnType => {
        const { name } = inputs
        const userRes = buildUser({ name })
        if (userRes.errors) {
            return {
                errors: userRes.errors
            }
        }

        try {
            const userId = saveUserToDb(userRes.user!)
            return {
                id: userId
            }
        } catch (err) {
            return {
                errors: [{
                    location: "create user",
                    msg: err.msg
                }]
            }
        }
    }
}