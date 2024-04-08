import classNames from "classnames"
import { FC, useEffect, useRef } from "react"
import { useDrag } from "react-dnd";

interface NewItemProps{
    className?: string | string[]
}

export const NewItem: FC<NewItemProps> = (props) => {

    const ref = useRef<HTMLDivElement>(null);

    const [{ dragging }, drag] = useDrag({
        type: 'new-item',
        item: {},
        collect(monitor) {
            return {
                dragging: monitor.isDragging()
            }
        }
    });

    useEffect(() => {
        drag(ref);
    }, []);

    const cs = classNames(
        "h-100 border-2 border-black",
        "leading-100 text-center text-2xl",
        "bg-green-300",
        "cursor-move select-none",
        dragging ? 'border-dashed bg-white' : '',
        props.className
    );

    return <div ref={ref} className={cs}>新的待办事项</div>
}