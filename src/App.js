import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';
import Button from './components/Button';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Button>Hello StoryBook</Button>
      <InboxScreen />
    </Provider>
  );
}

export default App;
