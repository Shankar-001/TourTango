import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import img from '../Assets/12.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img}
        title="Your Adventure, Your Narrative"
        text="Discover Your Favorite Destination."
        buttonText='Travel Plan'
        url='/'
        btnClass='show'
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  )
}
export default Home
