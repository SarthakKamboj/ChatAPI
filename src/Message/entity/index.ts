import { createBuildMessage } from "./message"
import { isProfane } from "../../utils/isProfane"

const buildMessage = createBuildMessage({
    isProfane
})



export { buildMessage }