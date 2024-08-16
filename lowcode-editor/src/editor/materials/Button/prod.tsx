import { Button as AntdButton } from 'antd';
import { CommonComponentProps } from '../../interface';

const Button = ({id, type, text, styles}: CommonComponentProps) => {
  return (
    <AntdButton type={type} style={styles}>{text}</AntdButton>
  )
}

export default Button;