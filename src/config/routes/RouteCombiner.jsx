import { map } from "lodash-es";
import { Routes, Route } from "react-router-dom";

const RouteCombiner = ({ routes }) => {
  return (
    <Routes>
      {map(routes, ({ component, path }, index) => (
        <Route key={index} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default RouteCombiner;
