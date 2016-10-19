import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form/immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'

import * as ListActions from '../../actions/list'
import ListLoader from '../../components/ListLoader/ListLoader'
import ItemForm from '../../components/ItemForm/ItemForm'

class ListContainer extends React.Component {
  componentWillMount() {
    // const { getList } = this.props
    // getList(10)
  }

  handleAddItem = () => {
    const { addItem, itemForm } = this.props
    addItem({ ...itemForm.toJS() })
  }

  showLoading = () => {
    const { quantity } = this.props
    return Array.from(Array(quantity)).map((item, key) =>
      (<ListLoader key={key} />)
    )
  }
  render() {
    const { isSaving, list } = this.props
    if (!list) return null
    return (
      <div>
        <ItemForm handleSubmit={this.handleAddItem} />
        <ul className="list-group" style={{ textAlign: 'center' }}>
        {isSaving
          ? this.showLoading()
          :
          list.map(item =>
            <li key={item.get('id')} className="list-group-item">
              {item.get('firstName')} {item.get('lastName')}
            </li>
          )
        }
        </ul>
      </div>
    )
  }
}


ListContainer.propTypes = {
  getList: React.PropTypes.func.isRequired,
  list: ImmutablePropTypes.list,
  quantity: React.PropTypes.number,
  isSaving: React.PropTypes.bool,
  addItem: React.PropTypes.func.isRequired,
  itemForm: ImmutablePropTypes.map,
}

const mapStateToProps = state => ({
  list: state.getIn(['list', 'list']),
  quantity: state.getIn(['list', 'quantity']),
  isSaving: state.getIn(['list', 'isSaving']),
  itemForm: getFormValues('itemForm')(state),
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
