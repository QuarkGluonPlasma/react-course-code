import { Allotment } from "allotment";
import 'allotment/dist/style.css';
import Header from "./components/Header";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import { useContext } from "react";
import { PlaygroundContext } from "./PlaygroundContext";

import './index.scss';

export default function ReactPlayground() {

    const { 
        theme, 
        setTheme, 
    } = useContext(PlaygroundContext)

    return <div 
        className={theme}
        style={{height: '100vh'}}
    >
        <Header/>
        <Allotment defaultSizes={[100, 100]}>
            <Allotment.Pane minSize={0}>
                <CodeEditor />
            </Allotment.Pane>
            <Allotment.Pane minSize={0}>
                <Preview />
            </Allotment.Pane>
        </Allotment>
    </div>
}