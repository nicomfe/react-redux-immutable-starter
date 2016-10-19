import React from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form/immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { signIn, signOut } from '../../redux/auth/actions'
import { getCurrentUser } from '../../redux/auth/selectors'
import LoginForm from '../../components/login/LoginForm'

class LoginContainer extends React.Component {

  handleLogin = () => {
    const { dispatchSigIn, loginFormValues } = this.props
    dispatchSigIn(loginFormValues.toJS())
  }

  handleLogout = () => {
    const { dispatchLogout } = this.props
    dispatchLogout()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        {currentUser ? <div>{`Current user id: ${currentUser.get('userUID')}`}</div> : <p>Not user logged in</p>}
        <LoginForm handleLogout={this.handleLogout} handleSubmit={this.handleLogin} />
      </div>
    )
  }
}

LoginContainer.propTypes = {
  dispatchSigIn: React.PropTypes.func.isRequired,
  loginFormValues: ImmutablePropTypes.map,
  dispatchLogout: React.PropTypes.func.isRequired,
  currentUser: ImmutablePropTypes.map,
}

const mapStateToProps = state => ({
  loginFormValues: getFormValues('loginForm')(state),
  currentUser: getCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchSigIn: user => { dispatch(signIn(user)) },
  dispatchLogout: () => { dispatch(signOut()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
