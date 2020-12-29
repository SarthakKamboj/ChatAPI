import { MessageType } from "../entity/MessageType"
import { buildCreateMessage } from "./createMessage"

const createMessage = buildCreateMessage({ saveMsgToDb })

function saveMsgToDb(msg: MessageType): number {
    return 5
}