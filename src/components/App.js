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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              value={values.email}
              onChange={handleChange}
            />
            <p className="error">{errors.email}</p>
            <input
              className="display"
              type="password"
              name="password"
              placeholder="enter password"
              value={values.password}
              onChange={handleChange}
            />
            <p className="error">{errors.password}</p>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default App;
