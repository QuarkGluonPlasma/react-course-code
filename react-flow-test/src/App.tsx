import { addEdge, Background, BackgroundVariant, BaseEdge, Connection, Controls, EdgeLabelRenderer, EdgeProps, getBezierPath, getStraightPath, Handle, MiniMap, OnConnect, Panel, Position, ReactFlow, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import logic from './logic/index.js';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, type: 'red', data: { label: '1' } },
  { id: '2', position: { x: 200, y: 300 }, type: 'blue', data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', type: 'custom' }];
 
interface NodePorps {
  data: {
    label: string
  }
}
function RedNode({ data }: NodePorps) {
  return <div style={{background: 'red', width: '100px', height: '100px', textAlign: 'center'}}>
    <Handle type="source" position={Position.Right} />
    <Handle type="target" position={Position.Bottom} />

    <div>{data.label}</div>
  </div>
}

function BlueNode({ data }: NodePorps) {
  return <div style={{background: 'blue', width: '50px', height: '50px', textAlign: 'center', color: '#fff'}}>
    <Handle type="source" position={Position.Bottom} />
    <Handle type="target" position={Position.Top} />

    <div>{data.label}</div>
  </div>
}

function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {

  
  const { setEdges } = useReactFlow();

  // const [edgePath, labelX, labelY] = getBezierPath({
  //   sourceX,
  //   sourceY,
  //   sourcePosition,
  //   targetX,
  //   targetY,
  //   targetPosition,
  // });
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY
  })

  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // EdgeLabelRenderer 里的组件默认不处理鼠标事件，如果要处理就要声明 pointerEvents: all
            pointerEvents: 'all',
          }}
        >
          <button onClick={onEdgeClick}>
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = (params: Connection) => {
    setEdges((eds) => addEdge(params, eds))
  }
  debugger;
  logic();

  return (
    <div style={{ width: '800px', height: '500px', border: '1px solid #000', margin: '50px auto' }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{
          red: RedNode,
          blue: BlueNode
        }}
        edgeTypes={{
          custom: CustomEdge
        }}
      >
        <Controls/>
        <MiniMap zoomable/>
        <Background variant={BackgroundVariant.Lines}/>
        <Panel position="top-right">
          <button onClick={() => {
            setNodes([...nodes, { 
              id: Math.random().toString().slice(2,6) + '', 
              type: 'red', 
              position: { x: 0, y: 0 }, 
              data: {
                label: '光'
            }}])
          }}>添加节点</button>
        </Panel>
      </ReactFlow>
    </div>
  );
}