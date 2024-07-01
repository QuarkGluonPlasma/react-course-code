import { useState } from 'react';
import { MessageProps, Position } from '.';

export type MessageList = {
    top: MessageProps[],
    bottom: MessageProps[]
}

const initialState = {
  top: [],
  bottom: []
};

function useStore(defaultPosition: Position) {
  const [messageList, setMessageList] = useState<MessageList>({ ...initialState });

  return {
    messageList,
    add: (messageProps: MessageProps) => {
      const id = getId(messageProps);
      setMessageList((preState) => {
        if (messageProps?.id) {
          const position = getMessagePosition(preState, messageProps.id);
          if (position) return preState;
        }

        const position = messageProps.position || defaultPosition;
        const isTop = position.includes('top');
        const messages = isTop
          ? [{ ...messageProps, id }, ...(preState[position] ?? [])]
          : [...(preState[position] ?? []), { ...messageProps, id }];

        return {
          ...preState,
          [position]: messages,
        };
      });
      return id;
    },

    update: (id: number, messageProps: MessageProps) => {
      if (!id) return;

      setMessageList((preState) => {
        const nextState = { ...preState };
        const { position, index } = findMessage(nextState, id);

        if (position && index !== -1) {
          nextState[position][index] = {
            ...nextState[position][index],
            ...messageProps,
          };
        }

        return nextState;
      });
    },

    remove: (id: number) => {
        setMessageList((prevState) => {
            const position = getMessagePosition(prevState, id);

            if (!position) return prevState;
            return {
                ...prevState,
                [position]: prevState[position].filter((notice) => notice.id !== id),
            };
        });
    },

    clearAll: () => {
      setMessageList({ ...initialState });
    },
  };
}

let count = 1;
export function getId(messageProps: MessageProps) {
  if (messageProps.id) {
    return messageProps.id;
  }
  count += 1;
  return count;
}

export function getMessagePosition(messageList: MessageList, id: number) {
    for (const [position, list] of Object.entries(messageList)) {
        if (list.find((item) => item.id === id)) {
            return position as Position;
        }
    }
}

export function findMessage(messageList: MessageList, id: number) {
    const position = getMessagePosition(messageList, id);
  
    const index = position ? messageList[position].findIndex((message) => message.id === id) : -1;
  
    return {
      position,
      index,
    };
}

export default useStore;
