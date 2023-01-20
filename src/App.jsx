import "./App.css";
import Task5 from "./reactTasks/task5/Task5";
import Task3 from "./reactTasks/task3/Task3";
import Task2 from "./reactTasks/task2/Task2";
import Task4 from "./reactTasks/task4/Task4";
import Task1 from "./reactTasks/task1/Task1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./reactTasks/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "task1",
    element: <Task1 />,
  },
  {
    path: "/task2",
    element: <Task2 />,
  },
  {
    path: "/task3",
    element: <Task3 />,
  },
  {
    path: "/task4",
    element: <Task4 />,
  },
  {
    path: "/task5",
    element: <Task5 />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
