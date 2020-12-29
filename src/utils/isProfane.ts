import Filter from "bad-words"

const filter = new Filter()

export const isProfane = (message: string): boolean => {
    return filter.isProfane(message)
}