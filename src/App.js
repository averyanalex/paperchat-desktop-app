import { BrowserRouter, Switch, Route, useParams, Redirect } from 'react-router-dom';
import MessageBox from './MessageBox';
import './App.css';
import Panel from './guilds/Panel';


function MessageBoxId() {
  let { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <MessageBox id={id}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/chat/:id">
            <Panel/>
            <MessageBoxId/>
          </Route>
          <Route path="/">
            <Redirect to={"/chat/global"}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
