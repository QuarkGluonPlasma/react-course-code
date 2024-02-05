import React, { forwardRef } from 'react';

export interface TransformOffset {
    x: number;
    y: number;
};

interface TransformProps {
    offset?: TransformOffset;
    children?: React.ReactNode;
}

const Transform = forwardRef<HTMLDivElement, TransformProps>((props, ref) => {
  const { children, offset } = props;
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: offset?.x ?? 0,
        top: offset?.y ?? 0,
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
});

export default Transform;
