import "./App.css";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
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
