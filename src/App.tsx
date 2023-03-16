import './App.css'
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from './PrivateRoute'
/* third party links */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './features/authentication/Authentication';

function App() {

  // const ProtectedRoute = ({
  //   user,
  //   redirectPath = '/',
  //   children,
  // }) => {
  //   if (!user) {
  //     return <Navigate to={redirectPath} replace />;
  //   }

  //   return children;
  // };
  <AuthProvider><PrivateRoute /></AuthProvider>
  const router = createBrowserRouter([
    {
      path: "/",
      element:(<SignIn />),
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: (
      <PrivateRoute >
        <Dashboard />
        </PrivateRoute> 
        ),
},
  ]);

return (
  <div className="App">
    <AuthProvider>

      <RouterProvider router={router} />


    </AuthProvider>

  </div>
)
}

export default App
