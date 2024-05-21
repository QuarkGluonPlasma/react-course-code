import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useIntl, defineMessages, FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';
import getMessage from './getMessage';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const messsages = defineMessages({
  username: {
    id: "username",
    defaultMessage: '用户名'
  },
  password: {
    id: "password",
    defaultMessage: '密码'
  },
  rememberMe: {
    id: 'rememberMe',
    defaultMessage: '记住我'
  },
  submit: {
    id: 'submit',
    defaultMessage: '提交'
  },
  inputYourUsername: {
    id: 'inputYourUsername',
    defaultMessage: '请输入用户名！'
  },
  inputYourPassword: {
    id: 'inputYourPassword',
    defaultMessage: '请输入密码！'
  }
})

const App: React.FC = () => {

  const intl = useIntl();

  useEffect(() => {
    setTimeout(() => {
      alert(getMessage());
    }, 2000)
  }, []);

  return <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label={intl.formatMessage(messsages.username)}
      name="username"
      rules={[{ required: true, message: intl.formatMessage(messsages.inputYourUsername) }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label={intl.formatMessage(messsages.password)}
      name="password"
      rules={[{ required: true, message: intl.formatMessage(messsages.inputYourUsername) }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>{intl.formatMessage(messsages.rememberMe)}</Checkbox>
    </Form.Item>

    <div>
      日期：
      <div>{intl.formatDate(new Date(), { weekday: 'long' })}</div> 
      <div>{intl.formatDate(new Date(), { weekday: 'short' })}</div> 
      <div>{intl.formatDate(new Date(), { weekday: 'narrow' })}</div>
      <div>{intl.formatDate(new Date(), {  dateStyle: 'full' })}</div>
      <div>{intl.formatDate(new Date(), {  dateStyle: 'long' })}</div>
    </div>
    <div>
      相对时间：
      <div>{intl.formatRelativeTime(200, 'hour')}</div> 
      <div>{intl.formatRelativeTime(-10, 'minute')}</div> 
    </div>
    <div>
      数字：
      <div>{intl.formatNumber(200000, {
        style: 'currency',
        currency:  intl.locale.includes('en') ? 'USD' : 'CNY'
      })}</div> 
      <div>
        {
          intl.formatNumber(10000, {
            style: 'unit',
            unit: 'meter'
          })
        }
      </div>
    </div>
  
    <div>
      <div><FormattedDate value={new Date} dateStyle='full'></FormattedDate></div>
      <div><FormattedMessage id={messsages.rememberMe.id}></FormattedMessage></div>
      <div><FormattedNumber style='unit' unit='meter' value={2000}></FormattedNumber></div>
    </div>

    <div>
      <div>{intl.formatMessage(messsages.username, { name: '光'})}</div>
      <div><FormattedMessage id={messsages.username.id} values={{name: '东'}}></FormattedMessage></div>
    </div>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
      {intl.formatMessage(messsages.submit)}
      </Button>
    </Form.Item>
  </Form>
}

export default App;