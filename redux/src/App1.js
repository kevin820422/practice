// step-1 從redux模組中匯入createStore函式
import { createStore, combineReducers } from 'redux'

// step-2 撰寫一個reducer(歸納)函式
// @reducer
//
// action payload = action.text
// init state is []
//
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.text, ...state]
    default:
      return state
  }
}
function users(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.text, ...state]
    default:
      return state
  }
}
let todoApp = combineReducers({
  todos,
  users,
})
// step-3 由寫好的reducer,建立出store
// @store
//const store = createStore(reducer)
const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// step-4 撰寫一個render(渲染)函式,在狀態有更動時作重新呈現
// store.getState() get state now
function render() {
  console.log(store.getState().todos)
  const items = store
    .getState()
    .todos.map(item => (item ? '<li>' + item + '</li>' : ''))

  document.getElementById('itemlist').innerHTML = '<ul>' + items + '</ul>'
}
// step-5 第一次調用render函式,作初始呈現
// init display
render()
// step-6 訂閱render函式到store中

store.subscribe(render)

// step-7 觸發事件時要呼叫store.dispatch(action)方法
document.getElementById('itemadd').addEventListener('click', () => {
  const itemText = document.getElementById('itemtext').value

  //store.dispatch action
  store.dispatch({
    type: 'ADD_ITEM',
    text: itemText,
  })
  // clear input
  document.getElementById('itemtext').value = ''
})
