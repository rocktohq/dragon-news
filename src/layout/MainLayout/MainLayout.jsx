import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </>
  )
}

export default MainLayout
