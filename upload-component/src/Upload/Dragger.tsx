import { FC, useState, DragEvent, PropsWithChildren } from 'react'
import classNames from 'classnames'

interface DraggerProps extends PropsWithChildren{
  onFile: (files: FileList) => void;
}

export const Dragger: FC<DraggerProps> = (props) => {

  const { onFile, children } = props

  const [ dragOver, setDragOver ] = useState(false)

  const cs = classNames('upload-dragger', {
    'is-dragover': dragOver
  })

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  return (
    <div 
      className={cs}
      onDragOver={e => { handleDrag(e, true)}}
      onDragLeave={e => { handleDrag(e, false)}}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}

export default Dragger;