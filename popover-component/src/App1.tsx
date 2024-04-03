import {
  useInteractions,
  useFloating,
  useHover,
  useClick,
  useDismiss,
  offset,
  arrow,
  FloatingArrow,
  shift,
  flip,
} from '@floating-ui/react';
import { useRef, useState } from 'react';

import './App.css';
 
export default function App() {
  const arrowRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
 
  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    middleware: [
      offset(10),
      arrow({
        element: arrowRef,
      }),
      flip()
    ]
  });
 
  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss
  ]);

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        hello
      </button>
      {
        isOpen && <div
            className='popover-floating'
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            光光光
            <FloatingArrow ref={arrowRef} context={context} fill="#fff" stroke="#000" strokeWidth={1}/>
          </div>
      }
    </>
  );
}