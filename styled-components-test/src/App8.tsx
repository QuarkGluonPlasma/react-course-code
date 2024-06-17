import { styled, keyframes, css, RuleSet } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animation = css<{ $duration: number }>`
  animation: ${rotate} ${props => props.$duration}s linear infinite;
`

const Rotate = styled.div<{ $duration: number, otherStyles: RuleSet }>`
  display: inline-block;
  ${animation}
  font-size: 50px;
  padding: 30px;
  ${props => props.otherStyles}
`;

function App() {

  return <Rotate $duration={3} otherStyles={ [ 
    { border: '1px', background: 'pink' }, 
    { boxShadow: '0 0 3px  blue'}
  ]}>X</Rotate>
}

export default App;

