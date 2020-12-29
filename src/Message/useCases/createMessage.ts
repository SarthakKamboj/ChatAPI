import { ErrorType } from "../../ErrorType"
import { buildMessage } from "../entity"
import { MessageType } from "../entity/MessageType"
import { DbFunctions } from "./dbFuncs"


interface CreateMessageReturnType {
    errors?: ErrorType[],
    msgId?: number
}

export const buildCreateMessage = (dbFuncs: DbFunctions) => {

    const { saveMsgToDb } = dbFuncs

    return (inputs: MessageType): CreateMessageReturnType => {
        const { ownerId, msg } = inputs
        const msgObj = buildMessage({ ownerId, msg })
        if (msgObj.errors) {
            return {
                errors: msgObj.errors
            }
        }

        try {
            return {
                msgId: saveMsgToDb(inputs)
            }
        } catch (err) {
            return {
                errors: [{
                    location: "create message",
                    msg: err.message
                }]
            }
        }
    }
}