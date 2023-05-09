// Importing some functions and modules
import Navbar from "./Navbar"
import Landing from "./Landing"
import "../index.css"

// Creating a header function
function Header (props) {
    // Declaring some variables to help identify a user and whether or not they are logged in
    const isLoggedIn = props.isLoggedIn
    const userName = props.name
   
    // If Statement to handle logged in or not
    if (isLoggedIn) {
        return (
            <>
                <Navbar />
                <div class="header-container">
                    <h1 class="logged-in-heading">Welcome {userName}!</h1>
                    <Landing />
                </div>
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                {/* When a user is not logged in, it asks them to sign in or create an account */}
                <div class="header-container">
                    <h1 class="logged-out-heading">Welcome to Coconut Clothing!</h1> 
                    <h3 class="logged-out-subheading">Please Sign In or Create an Account</h3>
                    <form class="logged-out-form">
                        <label class="email-input-label">Email:</label>
                        <input type="text" placeholder="Enter your email"></input>
                        <label class="password-input-label">Password:</label>
                        <input type="text" placeholder="Enter your password"></input>
                        <div class="button-container">
                            <button class="sign-in-button">Sign In</button>
                            <button class="create-button">Create Account</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

}

export default Header