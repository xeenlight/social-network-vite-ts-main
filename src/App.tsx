
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path:"/main-page",
      element:<MainPage/>
    },
    {
      path:"/profile-page",
      element:<ProfilePage/>
    },
  ])

  return (

      <div className="App">
        <RouterProvider router={router}/>
      </div>

  );
}

export default App;
