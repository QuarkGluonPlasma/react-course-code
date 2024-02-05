import classNames from 'classnames';
import type { FC } from 'react';

type HandlerSize = 'default' | 'small';

interface HandlerProps {
    size?: HandlerSize;
    color?: string;
};

const Handler: FC<HandlerProps> = ({ size = 'default', color }) => {
  return (
    <div
      className={classNames(`color-picker-panel-palette-handler`, {
        [`color-picker-panel-palette-handler-sm`]: size === 'small',
      })}
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default Handler;
