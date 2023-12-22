import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "@/config/routes";
import RouteCombiner from "@/config/routes/RouteCombiner";
import { StrictMode } from "react";
import store from "./store";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
        <Router>
          <RouteCombiner routes={routes} />
        </Router>
      </Provider>
    </StrictMode>
  );
};

export default App;
