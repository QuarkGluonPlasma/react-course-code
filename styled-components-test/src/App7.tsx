import { createGlobalStyle, styled } from 'styled-components';

const ColoredText = styled.div`
  && {
    color: blue;
  }

  &:hover {
    color: red;
  }

  &::before {
    content: '* ';
  }

  &.aaa + & {
    background: lightblue;
  }

  &.bbb ~ & {
    background: pink;
  }
`

const GlobalStyle = createGlobalStyle`
  ${ColoredText} {
    color: green;
  }
`
function App() {

  return <>
    <GlobalStyle/>
    <ColoredText>Hello styled components</ColoredText>
    <ColoredText className="aaa">Hello styled components</ColoredText>
    <ColoredText>Hello styled components</ColoredText>
    <ColoredText className="bbb">Hello styled components</ColoredText>
    <div>Hello styled components</div>
    <ColoredText>Hello styled components</ColoredText>
    <ColoredText>Hello styled components</ColoredText>
  </>
}

export default App;

