import faker from 'faker'

export const GET_LIST_START = 'GET_LIST_START'
export const GET_LIST = 'GET_LIST'


export function getList(quantity) {
  return (dispatch) => {
    dispatch({ type: GET_LIST_START, quantity })
    setTimeout(() => {
      const list = []
      for (let i = 0; i < quantity; i += 1) {
        list.push({
          id: i,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
        })
      }
      dispatch({ type: GET_LIST, quantity, list, isFetching: true })
    }, 2000)
    dispatch({ type: GET_LIST_START, quantity, isFetching: false })
  }
}
