import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MessageBox from './MessageBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MessageBox} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// test
export default App;
