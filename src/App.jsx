import MainLayout from "./layout/MainLayout";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Test from "./pages/Test";
import Navbar from "./components/Navbar";

const ProtectedRoute = () => {
  const user = true;
  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "home", element: <Home /> }],
    },
    {
      path: "/user",
      element: <ProtectedRoute />,
      children: [{ index: true, element: <Test /> }],
    },
    { path: "*", element: <Notfound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
