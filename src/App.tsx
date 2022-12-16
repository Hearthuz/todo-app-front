import { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Todo, Form } from "./pages";
import { routes } from "./config";
import { createBrowserHistory } from "history";
import { Loading } from "./components";
import { Provider } from "react-redux";
import store from "store";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Router history={history}>
          <Switch>
            <Route exact path={routes.task} component={Todo} />
            <Route exact path={routes.form} component={Form} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
