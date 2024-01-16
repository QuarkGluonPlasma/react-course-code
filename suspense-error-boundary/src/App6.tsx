import { useEffect, useState } from "react";

function fetchData(): Promise<{name: string}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'guang'
      });
    }, 2000)
  })
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{name?: string}>({});


  async function load() {
    setLoading(true);
    const data = await fetchData();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return <div>
    { loading ? 'loding...' : data.name }
  </div>
}