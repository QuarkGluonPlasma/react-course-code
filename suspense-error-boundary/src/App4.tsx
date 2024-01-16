import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

function Bbb() {
    useEffect(() => {
        throw new Error('xxx');
    }, [])
    return <div>bbb</div>
}

function Aaa() {
    return <Bbb></Bbb>
}

const fallbackRender = ({ error }) => {
    return <div>
        <p>出错了：</p>
        <div>{error.message}</div>
    </div>
}}

export default function App() {
    return <ErrorBoundary fallbackRender={fallbackRender}>
        <Aaa></Aaa>
    </ErrorBoundary>
}
