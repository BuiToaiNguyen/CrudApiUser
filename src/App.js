import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './setup/redux/modal/userSlice';
import { User } from './app/pages/User';

function App() {
  const dispatch= useDispatch();

  return (
      <User/>
  );
}

export default App;
