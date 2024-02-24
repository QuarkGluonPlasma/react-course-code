import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App2';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<DndProvider backend={HTML5Backend}><App></App></DndProvider>);
