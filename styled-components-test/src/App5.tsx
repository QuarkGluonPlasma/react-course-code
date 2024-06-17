import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface LinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

const Link: FC<LinkProps> = (props) => {
  console.log(props);

  const {
    href,
    className,
    children
  } = props;

  return <a href={href} className={className}>{children}</a>
}

const StyledLink = styled(Link).attrs<{ $color?: string;}>((props) => {
  console.log(props);

  props.$color = 'orange';
  props.children = props.children + ' 光';
  return props;
})`
  color: ${props => props.$color || 'green'};
  font-size: 40px;
`;

const Input = styled.input.attrs({ type: 'checkbox'})`
  width: 30px;
  height: 30px;
`;

function App() {
  return <div>
    <Input/>
    <StyledLink href='#aaa' $color="purple">click me</StyledLink>
  </div>
}

export default App
