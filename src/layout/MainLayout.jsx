import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MainLayout
