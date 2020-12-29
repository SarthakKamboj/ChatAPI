import { ErrorType } from "../../ErrorType"
import { MessageType } from "./MessageType"

interface Inputs {
    isProfane: (msg: string) => boolean
}


interface BuildMessageReturnType {
    message?: MessageType,
    errors?: ErrorType[]
}

export const createBuildMessage = (inputs: Inputs) => {
    const { isProfane } = inputs

    return (msgInputs: MessageType): BuildMessageReturnType => {

        const { ownerId, msg } = msgInputs

        if (isProfane(msg)) {
            return {
                errors: [{
                    location: "build message",
                    msg: "message in inapropriate"
                }]
            }
        }

        if (msg.length === 0) {
            return {
                errors: [{
                    location: "build message",
                    msg: "message cannot be empty"
                }]
            }
        }

        return Object.freeze({
            message: {
                ownerId,
                msg
            }
        })
    }
}
