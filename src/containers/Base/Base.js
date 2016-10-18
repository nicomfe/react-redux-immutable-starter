import React from 'react'

const BaseContainer = ({ children }) => (
  <div className="row">
    {children}
  </div>
)

BaseContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default BaseContainer
