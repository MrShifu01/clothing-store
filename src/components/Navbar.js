import logo from "./logo.png"
import "../index.css"

function Navbar () {
    return (
        <>
            <nav class="nav-container">
                <div class="nav-logo-container">
                    <img class="nav-logo" src={logo} alt="logo"></img>
                </div>
                <div class="nav-item-container">
                    <div class="nav-item">Home</div>
                    <div class="nav-item">About</div>
                    <div class="nav-item">Sign Up</div>
                </div>
            </nav>
        </>
    )
}

export default Navbar