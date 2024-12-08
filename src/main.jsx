import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddEquipments from './components/AddEquipments.jsx';
import UpdateEquipments from './components/UpdateEquipments.jsx';
import HomePage from './HomePage.jsx';
import AllSportsEquipment from '../AllSportsEquipment.jsx';
import Error from './Error.jsx';
import AuthLayout from './AuthLayout.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ProductDetails from './ProductDetails.jsx';
import MyEquipmentList from './MyEquipmentList.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/allSportsEquip",
    element: <AllSportsEquipment></AllSportsEquipment>,
  },
  {
    path: "/addEquipment",
    element: ( 
      <PrivateRoute>
        <AddEquipments></AddEquipments>
      </PrivateRoute>
     )
  },
  {
    path: "/myEquipList",
    element: (
      <PrivateRoute>
        <MyEquipmentList></MyEquipmentList>
      </PrivateRoute>
    )
  },
  {
    path: "/updateEquip/:id",
    element: <UpdateEquipments></UpdateEquipments>,
  },
  {
    path: "/equipmentdetails/:id",
    element: ( 
      <PrivateRoute>
        <ProductDetails></ProductDetails>
      </PrivateRoute>
     )
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
