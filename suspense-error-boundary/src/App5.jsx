import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

let data, promise;
function fetchData() {
  if (data) return data;
  promise = new Promise(resolve => {
    setTimeout(() => {
      data = '取到的数据'
      resolve()
    }, 2000)
  })
  throw promise;
}

function Content() {
  const data = fetchData();
  return <p>{data}</p>
}

const fallbackRender = ({ error }) => {
  return <div>
      <p>出错了：</p>
      <div>{error.message}</div>
  </div>
}

export default function App() {
  return (
    <Suspense fallback={'loading data'}>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <Content />
      </ErrorBoundary>
    </Suspense>
  )
}