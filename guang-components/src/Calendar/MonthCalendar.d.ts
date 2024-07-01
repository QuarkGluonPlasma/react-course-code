import { Dayjs } from "dayjs";
import { CalendarProps } from ".";
import React from "react";
interface MonthCalendarProps extends CalendarProps {
    selectHandler?: (date: Dayjs) => void;
    curMonth: Dayjs;
}
declare function MonthCalendar(props: MonthCalendarProps): React.JSX.Element;
export default MonthCalendar;
