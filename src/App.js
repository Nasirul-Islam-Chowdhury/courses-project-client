import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { Router } from './Components/Routes/Router';

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
