import { Modal as AntdModal } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { CommonComponentProps } from '../../interface';

export interface ModalRef {
    open: () => void
    close: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalRef, CommonComponentProps> = ({ children, title, onOk, onCancel, styles }, ref) => {

  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setOpen(true);
      },
      close: () => {
        setOpen(false);
      }
    }
  }, []);

  return (
    <AntdModal
      title={title}
      style={styles}
      open={open}
      onCancel={() => {
        onCancel && onCancel();
        setOpen(false);
      }}
      onOk={() => {
        onOk && onOk();
      }}
      destroyOnClose
    >
      {children}
    </AntdModal>
  );
}

export default forwardRef(Modal);