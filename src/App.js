import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { Router } from './Components/Routes/Router';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
      <Toaster />
    </div>
  );
}

export default App;
