import DestinationData from './DestinationData'
import './DestinationStyles.css'
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/5.jpg'
import img4 from '../Assets/8.jpg'

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Tours offer a great chance to see many sights within a limited time
        frame.
      </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Mt. Taal is one of Luzon's most recognizable landmarks due to the
            unique configuration of its volcano, lake, and island. The ascent to
            the crater takes only 45 minutes and is straightforward enough for
            novice hikers. You'll have the help of guides for the most part as
            you explore the unusual landscape of an active volcano, complete
            with lava rocks and steam vents. The trail can be dusty and hot, so
            it's best to start early in the day. After you get back, relax with
            some bulalo."
        img1={img1}
        img2={img2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldul in San Juan, Batangas is a great peak for novice 
        climbers seeking for a moderately difficult walk. The trail begins 
        near the beach and takes you through tropical forest, rocky 
        outcrops, and babbling brooks. The peak may not have the best 
        view, but the breeze is fantastic, and there's a little store halfway up 
        the hill where you can rest and drink buko juice. As soon as you 
        reach the bottom, it's time to reward yourself with a swim at the 
        beach."
        img1={img3}
        img2={img4}
      />
    </div>
  )
}
export default Destination
