import { Segmented } from 'antd';
import { useState } from 'react';
import { useComponetsStore } from '../../stores/components';
import { ComponentAttr } from './ComponentAttr';
import { ComponentEvent } from './ComponentEvent';
import { ComponentStyle } from './ComponentStyle';

export function Setting() {

    const { curComponentId } = useComponetsStore();

    const [key, setKey] = useState<string>('属性');

    if (!curComponentId) return null;
  
    return <div >
        <Segmented value={key} onChange={setKey} block options={['属性', '样式', '事件']} />
        <div className='pt-[20px]'>
            {
                key === '属性' && <ComponentAttr />
            }
            {
                key === '样式' && <ComponentStyle />
            }
            {
                key === '事件' && <ComponentEvent />
            }
        </div>
    </div>
}
