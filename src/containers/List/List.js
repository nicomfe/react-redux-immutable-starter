import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as ListActions from '../../actions/list'
import ListLoader from '../../components/ListLoader/ListLoader'

class ListContainer extends React.Component {
  componentWillMount() {
    const { getList } = this.props
    getList(100)
  }

  render() {
    const { isFetching, quantity, list } = this.props
    if (!list) return null
    return (
      <ul className="list-group" style={{ textAlign: 'center' }}>
        {isFetching &&
          Array.from(Array(quantity)).map((item, key) =>
            (<ListLoader key={key} />)
          )
        }

        {list.map(item =>
          <li key={item.get('id')} className="list-group-item">
            {item.get('firstName')} {item.get('lastName')}
          </li>
        )}
      </ul>
    )
  }
}


ListContainer.propTypes = {
  getList: React.PropTypes.func.isRequired,
  list: ImmutablePropTypes.list.isRequired,
  quantity: React.PropTypes.number,
  isFetching: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  list: state.getIn(['list', 'list']),
  quantity: state.getIn(['list', 'quantity']),
  isFetching: state.getIn(['list', 'isFetching']),
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
