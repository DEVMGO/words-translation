import { Navigate, useRoutes } from "react-router-dom"
import HomePage from "../features/home/home-page"
import ManagementPage from "../features/management/management-page"
import AddKeyWordPage from "../features/management/features/add-keyword/add-keyword-page"
import EditKeyWordPage from "../features/management/features/edit-keyword/edit-keyword-page"

export const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: "management",
      element: <ManagementPage />,
    },
    {
      path: 'management/add-keyword',
      element: <AddKeyWordPage />
    },
    {
      path: 'management/edit-keyword/:id',
      element: <EditKeyWordPage />
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ])
}
