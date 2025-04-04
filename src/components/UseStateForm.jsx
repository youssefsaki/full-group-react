import { useState } from "react";

const UseStateForm = () => {

    // Initializing formData state with an object containing 'username', 'email', and 'password' fields.
    let [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Destructuring formData to extract username, email, and password for easier access.
    let { username, email, password } = formData;

    // Handle input changes by updating the formData state.
    const handleChange = (e) => {
        setFormData({
            ...formData, // Spread operator to keep existing data in formData
            [e.target.name]: e.target.value // Dynamically update the field based on its name attribute (e.g., username, email, password)
        })
    }

  return (
    <div>
        {/* Form with method POST (POST is commonly used to submit data to the backend) */}
        {/* In the backend, you might use other methods like GET (to retrieve data), PUT (to update data), PATCH (for partial updates), or DELETE (to remove data) */}
        <form method="POST">
            {/* Input for username */}
            <div>
                <label htmlFor="username">Username :</label>
                <input 
                    type="text" 
                    name="username" // Name attribute is important for identifying the field when handling events
                    value={username} // Bind input value to the state
                    onChange={(e) => handleChange(e)} // Trigger handleChange function when input value changes
                />
            </div>

            {/* Input for email */}
            <div>
                <label htmlFor="email">Email :</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => handleChange(e)} // Handle changes to email input
                />
            </div>

            {/* Input for password */}
            <div>
                <label htmlFor="password">Password :</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => handleChange(e)} // Handle changes to password input
                />
            </div>

            {/* Submit button to send form data */}
            <button type="submit">Submit</button>

            {/* Display current form data for debugging/testing purposes */}
            {JSON.stringify(formData)}
        </form>
    </div>
  );
}

export default UseStateForm;
