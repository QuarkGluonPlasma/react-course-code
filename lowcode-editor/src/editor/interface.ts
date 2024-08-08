import { PropsWithChildren } from "react";

export interface CommonComponentProps extends PropsWithChildren{
    id: number;
    name: string;
    [key: string]: any
}