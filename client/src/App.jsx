import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import Error from "./common/Error.jsx"

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>
  }
])


const App = () => {

  return <RouterProvider router={appRouter}/>
}

export default App
