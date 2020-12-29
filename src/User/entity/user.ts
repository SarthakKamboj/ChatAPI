import { ErrorType } from "../../ErrorType"
import { UserType } from "./UserType"

interface CreateBuildUserInputs {
    isProfane: (name: string) => boolean,
}

interface BuildCreateUserReturnType {
    user?: UserType
    errors?: ErrorType[]
}

export const createBuildUser = (inputs: CreateBuildUserInputs) => {
    const { isProfane } = inputs
    return (userInputs: UserType): BuildCreateUserReturnType => {
        const { name } = userInputs

        if (isProfane(name)) {
            return {
                errors: [{
                    location: "build user",
                    msg: "user name is inapropriate"
                }]
            }
        }

        if (name.length <= 1) {
            return {
                errors: [{
                    location: "build user",
                    msg: "user name must be at least 2 characters"
                }]
            }
        }

        return {
            user: {
                name
            }
        }
    }
}