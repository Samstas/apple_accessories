import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'

function AppLayout() {
  return (
    <div className="mx-auto flex h-[100vh] w-[100vw] flex-col sm:w-[66.67vw] md:w-screen xl:w-[66.67vw]">
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
