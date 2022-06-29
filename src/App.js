import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const url = 'https://wclub.app/api/v2/schedulers/increase-advertise-count?access_token=T9k6MYKUVdYv9olMTQTSC7t9O6Igx87Q';

  useEffect(() => {
    axios.post(url).then(() => console.log('count + 1')).catch(error => console.error(error));
    window.location.replace('https://vo.la/W3f0Kd');
  }, []);

  return (
    <main>
      <img alt="wclub-logo" src="images/logo_transparent.png" />
     </main>
  );
}

export default App;
