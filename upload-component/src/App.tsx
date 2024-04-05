import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Upload, { UploadProps } from './Upload'

const props: UploadProps = {
  name: 'file',
  action: 'http://localhost:3333/upload',
  beforeUpload(file) {
    if(file.name.includes('1.image')) {
      return false;
    }
    return true;
  },
  onSuccess(ret) {
    console.log('onSuccess', ret);
  },
  onError(err) {
    console.log('onError', err);
  },
  onProgress(percentage, file) {
    console.log('onProgress', percentage);
  },
  onChange(file) {
    console.log('onChange', file);
  }
};

const App: React.FC = () => (
  <Upload {...props} drag>
    {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
    <p>
      <InboxOutlined style={{fontSize: '50px'}}/>
    </p>
    <p>点击或者拖拽文件到此处</p>
  </Upload>
);

export default App;
