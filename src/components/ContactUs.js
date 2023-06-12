import './ContactUsStyles.css'

const ContactUs = () => {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="E-mail" type="email" />
        <input placeholder="Subject" type="text" />
        <textarea placeholder="Message" type="text" rows="4" />
        <button>Send Message</button>
      </form>
    </div>
  )
}
export default ContactUs
