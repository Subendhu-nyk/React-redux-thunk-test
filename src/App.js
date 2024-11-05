import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksSnackContainer from './components/HooksSnackContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      {/* <HooksCakeContainer/>
      <HooksIceCreamContainer/>
      <HooksSnackContainer/>
      <NewCakeContainer/> */}
      {/* <CakeContainer/> */}
      <UserContainer/>
    </Provider>
    
  );
}

export default App;
