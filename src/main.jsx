import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.scss';
import Fries from './routes/Fries.jsx'
import Chicken from './routes/Chicken.jsx'
import Tortilla from './routes/Tortilla.jsx'
import Order from './routes/Order.jsx';
import { Provider } from "react-redux";
import { store } from './states/store.js';
import OrderFinish from './routes/OrderFinish.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fries",
    element: <Fries />
  },
  {
    path: "/chicken",
    element: <Chicken />
  },
  {
    path: "/tortilla",
    element: <Tortilla />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/order/finish",
    element: <OrderFinish />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
