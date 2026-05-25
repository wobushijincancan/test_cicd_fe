import { useState } from 'react';
import './App.css';

function App() {
  // 用来存储接口返回数据
  const [data, setData] = useState(null);
  // 用来显示加载状态
  const [loading, setLoading] = useState(false);

  // 点击按钮调用 API
  const callApi = async () => {
    setLoading(true); // 开始加载
    try {
      // 免费测试接口，返回随机段子
      const res = await fetch('http://localhost:4000/api');
      const result = await res.json();
      
      setData(result); // 把接口数据存起来
    } catch (error) {
      console.error('请求失败：', error);
    } finally {
      setLoading(false); // 结束加载
    }
  };

  return (
    <div className="App" style={{ marginTop: '50px' }}>
      <h2>点击按钮调用 API</h2>

      {/* 核心按钮 */}
      <button 
        onClick={callApi} 
        disabled={loading}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {loading ? '加载中...' : '点击调用 API'}
      </button>

      {/* 显示接口返回内容 */}
      {data && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <p>{data.value}</p>
        </div>
      )}
    </div>
  );
}

export default App;