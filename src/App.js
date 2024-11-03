import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer/>
      <HooksIceCreamContainer/>
      {/* <CakeContainer/> */}
    </Provider>
    
  );
}

export default App;
