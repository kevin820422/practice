import { combineReducers } from 'redux'
import { ADD_TODO, DEL_TODO } from '../action/actionType'

// action
// {type: 'ADD_TODO', payload: {id, text} }
// ADD_TODO
// DEL_TODO
// UPDATE_TODO
//

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state]
    case DEL_TODO:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}

export default combineReducers({
  todos,
})
