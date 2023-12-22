import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "@/config/routes";
import RouteCombiner from "@/config/routes/RouteCombiner";
import { StrictMode } from "react";
import store from "./store";

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>
          <RouteCombiner routes={routes} />
        </Router>
      </Provider>
    </StrictMode>
  );
};

export default App;
