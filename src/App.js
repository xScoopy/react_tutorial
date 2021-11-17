import './App.css';
import Title from './Title';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
