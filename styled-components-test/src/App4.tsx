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

const StyledLink = styled(Link)<{ $color?: string;}>`
  color: ${props => props.$color || 'green'};
  font-size: 40px;
`;

function App() {
  return <div>
    <StyledLink href='#aaa' $color="purple">click me</StyledLink>
  </div>
}

export default App
