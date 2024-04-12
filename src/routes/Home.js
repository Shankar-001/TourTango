import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import img from '../Assets/12.jpg';
import Destination from '../components/Destination';
import Trips from '../components/Trips';
import Footer from '../components/Footer';

function Home() {
  const checking = process.env.REACT_APP_IMPORTANT_TOKEN;

  console.log(checking);

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img}
        title="Your Adventure, Your Narrative"
        text="Discover Your Favorite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      {checking}
      <Trips />
      <Footer />
    </>
  );
}
export default Home;
