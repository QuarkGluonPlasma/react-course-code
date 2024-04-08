import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { ListItem, useTodoListStore } from "./store";

interface ItemProps {
    data: ListItem
}

export function Item(props: ItemProps) {

    const {
        data
    } = props;

    const updateItem = useTodoListStore(state => state.updateItem);

    const ref = useRef<HTMLDivElement>(null);

    const [editing, setEditing] = useState(false);

    const [editingContent, setEditingContent] = useState(data.content);

    const [{ dragging }, drag] = useDrag({
        type: 'list-item',
        item: {
            id: data.id
        },
        collect(monitor) {
            return {
                dragging: monitor.isDragging()
            }
        }
    });

    useEffect(() => {
        drag(ref);
    }, []);

    return <div ref={ref} className={classNames(
            "h-100 border-2 border-black bg-blue-300 p-10",
            "flex justify-start items-center",
            "text-xl tracking-wide",
            dragging ? 'bg-white border-dashed' : ''
        )}
        onDoubleClick={() => {
            setEditing(true)
        }}
    >
        <input 
            type="checkbox" 
            className="w-40 h-40 mr-10"
            checked={data.status === 'done' ? true : false}
            onChange={(e) => {
                updateItem({
                    ...data,
                    status: e.target.checked ? 'done' : 'todo'
                })
            }}
        />
        <p>
            {
                editing ? <input 
                    value={editingContent}
                    onChange={(e) => {
                        setEditingContent(e.target.value)
                    }}
                    onBlur={() => {
                        setEditing(false);
                        updateItem({
                            ...data,
                            content: editingContent
                        })
                    }}
                /> : data.content 
            }
        </p>
    </div>
}