import { styled } from 'styled-components';

const Title = styled.h1<{ color?: string; }>`
  font-size: 30px;
  text-align: center;
  color: ${props => props.color || 'blue'}
`;

const Header = styled.div`
  padding: 20px;
  background: pink;
`;

function App() {

  return <Header>
    <Title>
      Hello World!
    </Title>
    <Title color='green'>
      Hello World!
    </Title>
    <Title color='black'>
      Hello World!
    </Title>
  </Header>
}

export default App
