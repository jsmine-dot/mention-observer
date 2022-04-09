interface MentionObject {
    id: string,
    value: string
}
interface Input {
    rawText: string,
    mentions?: Array<ExtendedMentionObject>
}
interface ExtendedMentionObject extends MentionObject {
    startIndex: number,
    endIndex: number
}
interface Output extends Input {
    searchKey?: string
}
interface MentionNode extends Node{
    mentionNode: boolean,
    mentionId?: string,
    style?: {[index : string]: string}
}