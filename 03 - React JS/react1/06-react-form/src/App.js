import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false); //A flag to check if the form is submit

  const handleChange = e => {
    console.log(e.target); //prints the input field itself
    const { name, value } = e.target; //taking the name and value attributes from the input fields
    setFormValues({ ...formValues, [name]: value });
    //We are putting [name] instead of just name because if we put only name then a new key name will get added to the state.
    // But we do not want that.
    //We want value to get assigned to username key in the state.
    //[name] defines the username key in the state.
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues)); //Validate for errors upon submission of the form
    setIsSubmit(true); //Flagging the form submit as true upon submission
  };

  //As soon as the all the fields satisfy the criteria, we need to be able to submit the form
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //After every change in state of formErrors state and isSubitError run this code.
      //Check if the formErrors state hev any keys in it or not
      //No keys mean no error was caught and the form is valid
      console.log(formValues);
    }
  }, [formErrors]);

  //This function will validate the form upon submission
  //It will return an object with errors.
  const validate = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //regex for validating the email
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      //validating email with the regex
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {/* See what values are submitted in the form */}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
