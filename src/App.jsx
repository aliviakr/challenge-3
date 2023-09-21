import TodoInput from "./pages/TodoInput";
import TodoSearch from "./pages/TodoSearch";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <TodoSearch />,
    },
    {
      path: "/add",
      element: <TodoInput />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
