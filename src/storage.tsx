import { Button, TextInput } from '@vika/components';
import { useCloudStorage } from '@vika/widget-sdk';
import React from 'react';

export const Storage: React.FC = () => {
  // 新建图表需要的上下文
  const [counter, setCounter] = useCloudStorage('counter', 0);
  const [text, setText] = useCloudStorage('text', '');

  return (
    <div>
      <div style={{ flexGrow: 1 }}>
        <h3>组件数据存储与协同</h3>
        <p>简单计数器，打开多个窗口，数值可以被持久化并且实时协同</p>
        <p>
          Counter: {counter}
          <Button size="small" onClick={() => setCounter(counter + 1)}>+</Button>
          <Button size="small" onClick={() => setCounter(counter - 1)}>-</Button>
        </p>
        <div>
          Text: <TextInput onChange={e => setText(e.target.value)} value={text}/>
        </div>
      </div>
    </div>
  );
};
