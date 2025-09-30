import MainLayout from './layout/MainLayout.jsx'
import Hero from './components/Hero.jsx'
import Dishes from './components/Dishes.jsx'
import About from './components/About.jsx'
import Mission from './components/Mission.jsx'
import Contact from './components/Contact.jsx'
import Expertise from './components/Expertise.jsx'
import Review from './components/Review.jsx'

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Dishes />
        <About />
        <Mission />
        <Expertise />
        <Review />
        <Contact />
      </MainLayout>
    </>
  )
}

export default App
