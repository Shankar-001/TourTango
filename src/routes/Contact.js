import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img from '../Assets/Contact.jpg'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={img} title="Contact" btnClass="hide" />
      <ContactUs />
      <Footer />
    </>
  )
}
