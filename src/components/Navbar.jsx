import "../App.css"
import logo from "../assets/images/icons8-camera-100.png"

const Navbar = () => {
  return (
    <div className="navbox">
        <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Vinfilter</h3>
        </div>

        <div className="navoptions">
            <h3>Home</h3>
            <h3>Features</h3>
            <h3>Guide</h3>
            <h3>Reviews</h3>
        </div>

        <div className="sidenav">
            <h3>Download</h3>
        </div>
    </div>
  )
}

export default Navbar
