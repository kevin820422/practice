一般函式


const byId = id => document.getElementById(id)
// const changeTotal = (num) => {
//     return function () {
//         byId('total').innerHTML = +byId('total').innerHTML + num;
//     }
// }
const changeTotal = (num) => () => byId('total').innerHTML = +byId('total').innerHTML + num;

const clickAndChange = (id, num) => byId(id).addEventListener('click', changeTotal(num))

//把changeTotal改為return出一個函式，在addEventListener的第二個函數可以直接呼叫。(沒有return的東西時無法執行addEventListener)
// byId('add').addEventListener('click', function () { changeTotal(1) })
// byId('minus').addEventListener('click', changeTotal(-1))

clickAndChange('add', 1)

clickAndChange('minus', -1)




