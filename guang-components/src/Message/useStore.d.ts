import { MessageProps, Position } from '.';
export type MessageList = {
    top: MessageProps[];
    bottom: MessageProps[];
};
declare function useStore(defaultPosition: Position): {
    messageList: MessageList;
    add: (messageProps: MessageProps) => number;
    update: (id: number, messageProps: MessageProps) => void;
    remove: (id: number) => void;
    clearAll: () => void;
};
export declare function getId(messageProps: MessageProps): number;
export declare function getMessagePosition(messageList: MessageList, id: number): Position | undefined;
export declare function findMessage(messageList: MessageList, id: number): {
    position: Position | undefined;
    index: number;
};
export default useStore;
