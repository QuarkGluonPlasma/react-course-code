import { PropsWithChildren, CSSProperties, FC } from 'react';
export interface WatermarkProps extends PropsWithChildren {
    style?: CSSProperties;
    className?: string;
    zIndex?: string | number;
    width?: number;
    height?: number;
    rotate?: number;
    image?: string;
    content?: string | string[];
    fontStyle?: {
        color?: string;
        fontFamily?: string;
        fontSize?: number | string;
        fontWeight?: number | string;
    };
    gap?: [number, number];
    offset?: [number, number];
    getContainer?: () => HTMLElement;
}
declare const Watermark: FC<WatermarkProps>;
export default Watermark;
