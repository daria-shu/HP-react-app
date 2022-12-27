import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './pages/main.js';
import Heroes from './pages/heroes.js';
import Spells from './pages/spells.js';


function MainRouter() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main/>
    },
    {
      path : '/heroes',
      element : <Heroes/>
    },
    {
      path : '/spells',
      element : <Spells/>
    },
  ])


  return <RouterProvider router = {router}/>;
}

export default MainRouter;
