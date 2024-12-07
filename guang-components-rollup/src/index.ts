import Calendar, { CalendarProps } from './Calendar';
import Watermark, { WatermarkProps } from './Watermark';
import { MessageProps, Position, MessageRef} from './Message';
import { useMessage } from './Message/useMessage';
import { ConfigProvider } from './Message/ConfigProvider';

export {
    Calendar,
    Watermark,
    ConfigProvider,
    useMessage
}

export type {
    CalendarProps,
    WatermarkProps,
    MessageProps,
    Position,
    MessageRef
}
