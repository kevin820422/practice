// action creators
import { ADD_TODO, DEL_TODO } from './actionType'
export const addTodo = payload => ({ type: ADD_TODO, payload })
export const delTodo = payload => ({ type: DEL_TODO, payload })