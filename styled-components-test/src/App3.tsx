
import { styled } from 'styled-components';

const Button = styled.button<{ color?: string; }>`
  font-size: 20px;
  margin: 5px 10px;
  border: 2px solid #000;
  color: ${props => props.color || 'blue'}
`;

const Button2 = styled(Button)`
  border-radius: 8px;
`;
function App() {

  return <div>
    <Button color='red'>Hello World!</Button>
    <Button2 color='red' as="div">Hello World!</Button2>
  </div>
}

export default App