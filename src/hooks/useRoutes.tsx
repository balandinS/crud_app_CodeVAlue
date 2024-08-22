import { createBrowserRouter, Navigate } from 'react-router-dom'
import Pages from '../Pages';
import { RoutePaths } from '../Enums/RoutesEnums';
import Components from '../Components';

const { HomePage, Page404 } = Pages
const { ProductDetails, AddNewProduct } = Components
const useRoutes = () => {
  const router = createBrowserRouter([{
    element: <HomePage />,
    children: [{
      path: RoutePaths.PRODUCT_DETAILS,
      element: <ProductDetails />
    },
    {
      path: RoutePaths.ADD_PRODUCT,
      element: <AddNewProduct />
    }
    ],
    path: RoutePaths.PRODUCTS
  },
  {
    path: RoutePaths.BASE_URL,
    element: <Navigate to={RoutePaths.PRODUCTS} replace />
  },
  {
    path: RoutePaths.CATCH_ALL,
    element: <Page404 />
  }

  ])

  return router
}

export default useRoutes