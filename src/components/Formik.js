import React from "react";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class Formik extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {
        email: "",
        password: ""
      },
      values: {
        email: "",
        password: ""
      }
    };
  }
  handleChange = e => {
    let { name, value } = e.target;

    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "*Email is not valid";
        break;
      case "password":
        errors.password =
          value.length < 4 ? "*Password must be greater than 4 characters" : "";
        break;
      default:
        break;
    }

    this.setState({ values: { [name]: value } }, () =>
      console.log(this.state.values)
    );
  };
  handleSubmit = e => {
    e.preventDefault();

    console.log("Form Submitted!!");
  };
  render() {
    return (
      <div>
        {this.props.children(
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
