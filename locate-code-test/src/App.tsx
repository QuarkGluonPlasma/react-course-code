import React from 'react';
import { ColorPicker, Space } from 'antd';
import Aaa from './Aaa';

const Demo = () => (
  <div>
    <Space>
      <Space direction="vertical">
        <ColorPicker defaultValue="#1677ff" size="small" />
        <ColorPicker defaultValue="#1677ff" />
        <ColorPicker defaultValue="#1677ff" size="large" />
      </Space>
      <Space direction="vertical">
        <ColorPicker defaultValue="#1677ff" size="small" showText />
        <ColorPicker defaultValue="#1677ff" showText />
        <ColorPicker defaultValue="#1677ff" size="large" showText />
      </Space>
    </Space>
    <Aaa></Aaa>
  </div>
);

export default Demo;