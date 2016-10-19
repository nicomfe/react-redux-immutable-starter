import React from 'react'

import { urls } from '../../routes'
import MenuItem from '../../components/MenuItem/MenuItem'
import LoginContainer from '../login/LoginContainer'

const IndexContainer = () => (
  <div>
    <MenuItem to={urls.list} title="List" description="Example with list objects" />
    <LoginContainer />
  </div>
)

IndexContainer.propTypes = {}

export default IndexContainer
