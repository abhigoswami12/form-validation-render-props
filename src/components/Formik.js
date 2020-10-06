import React from "react";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class Formik extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {
        username: "",
        email: "",
        password: ""
      },
      values: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState({
      values: { ...this.state.values, [name]: value },
      errors: { ...this.state.errors, [name]: "" }
    });
  };

  isUsernameValid = () => {
    let { username } = this.state.values;

    if (!username) {
      return this.setError("username", "*Username is required");
    }

    let hasNumber = username.split("").some(char => Number(char));

    if (username.length < 5) {
      return this.setError(
        "username",
        "Username must be atleat 5 characters long!!"
      );
    }

    if (username.toLocaleLowerCase() !== username) {
      return this.setError("username", "Username must be in Lowercase");
    }

    if (!hasNumber) {
      return this.setError(
        "username",
        "Username must include atleast one number"
      );
    }

    return true;
  };

  isEmailValid = () => {
    let { email } = this.state.values;
    if (!email) {
      return this.setError("email", "email is required.");
    }

    let isValid =
      email.endsWith(".com") && email.includes("@") && !email.startsWith("@");

    if (!isValid) {
      this.setError("email", "Invalid Email");
    }

    return true;
  };

  setError = (name, errorMsg) => {
    return this.setState({
      errors: { ...this.state.errors, [name]: errorMsg }
    });
  };

  isPasswordValid = () => {
    let { password } = this.state.values;

    if (!password) {
      return this.setError("password", "Password is required.");
    }

    let isValid = password.split("").some(char => Number(char));

    if (password.length < 4) {
      return this.setError(
        "password",
        "Password length must be atleast 4 characters long"
      );
    }

    if (!isValid) {
      return this.setError(
        "password",
        "Password must contains atleast one number."
      );
    }

    return true;
  };

  validate = async () => {
    let isUsernameValid = await this.isUsernameValid();
    console.log("isUsernameValid", isUsernameValid);
    let isEmailValid = await this.isEmailValid();
    let isPasswordValid = await this.isPasswordValid();
    return isUsernameValid && isEmailValid && isPasswordValid;
  };

  handleSubmit = async e => {
    e.preventDefault();
    let isAllDataValid = await this.validate();
    if (isAllDataValid) {
      console.log("Form Submitted!!");
    }
  };

  render() {
    let { children } = this.props;
    return (
      <div>
        {children(
          this.state.values,
          this.state.errors,
          this.handleChange,
          this.handleSubmit
        )}
      </div>
    );
  }
}

export default Formik;
