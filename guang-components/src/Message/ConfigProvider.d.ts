import React, { PropsWithChildren, RefObject } from "react";
import { MessageRef } from ".";
interface ConfigProviderProps {
    messageRef?: RefObject<MessageRef>;
}
export declare const ConfigContext: React.Context<ConfigProviderProps>;
export declare function ConfigProvider(props: PropsWithChildren): React.JSX.Element;
export {};
