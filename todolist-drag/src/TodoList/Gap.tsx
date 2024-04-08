import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { useTodoListStore } from "./store";

interface GapProps {
    id?: string
}

export function Gap(props: GapProps) {

    const {
        id
    } = props;

    const addItem = useTodoListStore(state => state.addItem);

    const ref = useRef<HTMLDivElement>(null);

    const [{ isOver }, drop] = useDrop(() => {
        return {
            accept: 'new-item',
            drop(item) {
                addItem({
                    id: Math.random().toString().slice(2, 8),
                    status: 'todo',
                    content: '待办事项'
                }, id);
            },
            collect(monitor) {
                return {
                    isOver: monitor.isOver()
                }
            }
        }
    });

    useEffect(()=> {
        drop(ref);
    }, []);

    const cs = classNames(
        "h-10",
        isOver ? 'bg-red-300' : ''
    );

    return <div ref={ref} className={cs}></div>
}