import React from "react";
import Formik from "./Formik";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Formik>
        {(values, errors, handleChange, handleSubmit) => (
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              value={values.email}
              onChange={handleChange}
              noValidate
            />
            <p className="error">{errors.email}</p>
            <input
              className="display"
              type="password"
              name="password"
              placeholder="enter password"
              value={values.password}
              onChange={handleChange}
              noValidate
            />
            <p className="error">{errors.password}</p>
            <input
              className="display"
              type="text"
              name="username"
              placeholder="enter username"
              value={values.username}
              onChange={handleChange}
              noValidate
            />

            <p className="error">{errors.username}</p>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default App;
