import { Input, Select } from "antd"
import { useComponetsStore } from "../../../stores/components";
import { useState } from "react";

export interface ShowMessageConfig {
    type: 'showMessage',
    config: {
        type: 'success' | 'error'
        text: string
    }
}

export interface ShowMessageProps {
    value?: ShowMessageConfig['config']
    onChange?: (config: ShowMessageConfig) => void
}

export function ShowMessage(props: ShowMessageProps) {
    const { value, onChange } = props;

    const { curComponentId } = useComponetsStore();

    const [type, setType] = useState<'success' | 'error'>(value?.type || 'success');
    const [text, setText] = useState<string>(value?.text || '');

    function messageTypeChange(value: 'success' | 'error') {
        if (!curComponentId) return;

        setType(value);

        onChange?.({
            type: 'showMessage',
            config: {
                type: value,
                text
            }
        })
      }
    
    function messageTextChange(value: string) {
        if (!curComponentId) return;

        setText(value);

        onChange?.({
            type: 'showMessage',
            config: {
                type,
                text: value
            }
        })
    }

    return <div className='mt-[30px]'>
        <div className='flex items-center gap-[20px]'>
            <div>类型：</div>
            <div>
            <Select
                style={{ width: 500, height: 50 }}
                options={[
                    { label: '成功', value: 'success' },
                    { label: '失败', value: 'error' },
                ]}
                onChange={(value) => { messageTypeChange(value) }}
                value={type}
            />
            </div>
        </div>
        <div className='flex items-center gap-[20px] mt-[50px]'>
            <div>文本：</div>
                <div>
                <Input
                    style={{ width: 500, height: 50 }}
                    onChange={(e) => { messageTextChange(e.target.value) }}
                    value={text}
                />
            </div>
        </div>
    </div>
}