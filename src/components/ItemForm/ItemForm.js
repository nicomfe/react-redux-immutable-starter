import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'

class ItemForm extends React.Component {

  handleSubmit = () => {
    const { handleSubmit } = this.props
    handleSubmit()
  }

  renderInputField = field => {
    return <input {...field} {...field.input} />
  }

  render() {
    return (<form>
      <Field
        component={this.renderInputField}
        maxLength={100}
        name="firstName"
        placeholder="First Name"
        tabIndex="1"
        type="text"
      />
      <Field
        component={this.renderInputField}
        maxLength={100}
        name="lastName"
        placeholder="Last Name"
        tabIndex="2"
        type="text"
      />
      <button type="button" onClick={this.handleSubmit}>Add</button>
    </form>)
  }
}

ItemForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'itemForm',
})(ItemForm)
