import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img from '../Assets/2.jpg'
import Footer from '../components/Footer'
import Trips from '../components/Trips'

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={img} title="Service" btnClass="hide" />
      <Trips />
      <Footer />
    </>
  )
}
export default Service
