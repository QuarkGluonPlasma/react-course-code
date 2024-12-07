# React 组件库 guang-components-rollup

[《React 通关秘籍》](https://juejin.cn/book/7294082310658326565) 小册组件库案例

## Install
```
npm install --save guang-components-rollup@latest
```

## Usage

### Watermark 组件
```javascript
import { Watermark } from 'guang-components-rollup';

const App = () => {
  return <Watermark
    content={['测试水印', '神说要有光']}
  >
   <div style={{height: 800}}>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id provident!</p>
   </div>
  </Watermark>
};

export default App;
```

### Calendar 

```javascript
import dayjs from 'dayjs';
import {Calendar} from 'guang-components-rollup';
import 'guang-components-rollup/dist/index.css';

function App() {
  return (
    <div>
      <Calendar value={dayjs('2024-07-01')}></Calendar>
    </div>
  );
}

export default App;
```

### Message

```javascript
import { ConfigProvider, useMessage } from "guang-components-rollup"
import 'guang-components-rollup/dist/index.css';

function Aaa() {
  const message = useMessage();

  return <button onClick={() =>{
    message.add({
      content:'请求成功'
    })
  }}>成功</button>
}

function App() {

  return (
    <ConfigProvider>
      <div>
        <Aaa></Aaa>
      </div>
    </ConfigProvider>
  );
}

export default App;
```
