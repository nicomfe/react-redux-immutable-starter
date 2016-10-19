import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'

import styles from './styles.scss'

class LoginForm extends React.Component {

  handleLogin = () => {
    const { handleSubmit, reset } = this.props
    handleSubmit()
    reset()
  }

  renderInputField = field => {
    return <input {...field} {...field.input} />
  }

  render() {
    const { handleLogout } = this.props
    return (<form className={styles.form}>
      <h2>Login</h2>
      <Field
        component={this.renderInputField}
        maxLength={100}
        name="email"
        placeholder="Email"
        tabIndex="1"
        type="text"
      />
      <Field
        component={this.renderInputField}
        maxLength={100}
        name="password"
        placeholder="Password"
        tabIndex="2"
        type="password"
      />
      <button type="button" onClick={this.handleLogin}>Login</button>
      <button type="button" onClick={handleLogout}>Logout</button>
    </form>)
  }
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  handleLogout: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm)
