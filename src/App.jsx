
import Home from "./assets/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FindCollection from "./assets/pages/FindCollection";
import Shopnow from "./assets/pages/Shopnow";
import ProductInfo from "./assets/pages/productInfo";


const App = () => {
  const router = createBrowserRouter(
    [
      { path: "/", element: <Home /> },
      {path:"/findCollection", element: <Shopnow />},
      {path:"/productDetail/:id",element: <ProductInfo  />},
      {path:"/findCollection/:id",element: <FindCollection  />}
    
    
 
   
  

    ],
  );

  return <RouterProvider router={router} />;
};

export default App;