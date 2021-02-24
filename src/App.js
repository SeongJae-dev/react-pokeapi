import "./App.css";
import Main from "./route/Main";
import Detail from "./route/Detail";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/pokemon/:no" component={Detail} />
        <Route exact path="/" component={Main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
