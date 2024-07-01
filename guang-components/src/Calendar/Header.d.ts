import { Dayjs } from "dayjs";
import React from "react";
interface HeaderProps {
    curMonth: Dayjs;
    prevMonthHandler: () => void;
    nextMonthHandler: () => void;
    todayHandler: () => void;
}
declare function Header(props: HeaderProps): React.JSX.Element;
export default Header;
