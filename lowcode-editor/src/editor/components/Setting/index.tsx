import { useComponetsStore } from "../../stores/components";

export function Setting() {
    const { components } = useComponetsStore();

    return <div>
        <pre>
            {JSON.stringify(components, null, 2)}
        </pre> 
    </div>
}