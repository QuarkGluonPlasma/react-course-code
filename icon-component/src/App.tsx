import { useRef } from 'react';
import { createFromIconfont } from './Icon/createFrontIconfont';
import { IconAdd } from './Icon/icons/IconAdd';
import { IconEmail } from './Icon/icons/IconEmail';

const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4443338_a2wwqhorbk4.js');

function App() {
  const ref = useRef<SVGSVGElement>(null);
  const ref2 = useRef<SVGSVGElement>(null);

  return (
    <div>
      <div style={ {padding: '50px'} }>
        <IconAdd size='40px' ref={ref}></IconAdd>
        <IconEmail spin></IconEmail>
        <IconEmail style={{color: 'blue', fontSize: '50px'}}></IconEmail>
      </div>
      <div style={ {padding: '50px'} }>
        <IconFont type="icon-shouye-zhihui" size="40px" ref={ref2}></IconFont>
        <IconFont type="icon-gerenzhongxin-zhihui" fill="blue" size="40px"></IconFont>
      </div>
    </div>
  );
}

export default App;
