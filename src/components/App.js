import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButtonsPage from "../pages/ButtonsPage";
import InputsPage from "../pages/InputsPage";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/my-reusable-components" exact component={ButtonsPage} />
        <Route path="/my-reusable-components/inputs" component={InputsPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
