import { MessageType } from "../entity/MessageType";

export interface DbFunctions {
    saveMsgToDb: (msg: MessageType) => number
}