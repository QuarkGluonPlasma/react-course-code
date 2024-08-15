import MonacoEditor, { OnMount, EditorProps } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import { useEffect, useRef } from 'react'

export interface EditorFile {
    name: string
    value: string
    language: string
}

interface Props {
    value: string
    onChange?: EditorProps['onChange']
    options?: editor.IStandaloneEditorConstructionOptions
}

export default function CssEditor(props: Props) {

    const {
        value,
        onChange,
        options
    } = props;

    const handleEditorMount: OnMount = (editor, monaco) => {
      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
          editor.getAction('editor.action.formatDocument')?.run()
      });
    }

    return <MonacoEditor
        height={'100%'}
        path='component.css'
        language='css'
        onMount={handleEditorMount}
        onChange={onChange}
        value={value}
        options={
            {
                fontSize: 14,
                scrollBeyondLastLine: false,
                minimap: {
                  enabled: false,
                },
                scrollbar: {
                  verticalScrollbarSize: 6,
                  horizontalScrollbarSize: 6,
                },
                ...options
            }
        }
        
    />
}
