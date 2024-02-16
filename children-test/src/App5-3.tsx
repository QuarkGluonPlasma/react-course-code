import { FC, PropsWithChildren, ReactNode } from 'react';

interface Item {
  id: number,
  content: ReactNode
}

interface RowListProps extends PropsWithChildren {
  items: Array<Item>,
  renderItem: (item: Item) => ReactNode
}

const RowList: FC<RowListProps> = (props) => {
  const { items, renderItem } = props;

  return <div className='row-list'>
      {
        items.map(item => {
          return renderItem(item);
        })
      }
  </div>
}

function App() {
  return <RowList items={[
    {
      id: 1,
      content: <div>111</div>
    },
    {
      id: 2,
      content: <div>222</div>
    },
    {
      id: 3,
      content: <div>333</div>
    }
  ]}
  renderItem={(item) => {
    return <div className='row' key={item.id}>
      <div className='box'>
          {item.content}
      </div>
    </div>
  }}
  >
  </RowList>
}

export default App;
