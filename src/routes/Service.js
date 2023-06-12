import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img from '../Assets/2.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={img} title="Service" btnClass="hide" />
      <Trip />
      <Footer />
    </>
  )
}
export default Service
