//items為使用時要放入的變數,option為固定寫法:
const list = (items, option) => {
    console.log(items);
    console.log(option);

    let out = "<ul>"
    for (let i = 0; i < items.length; i++) {
        //額外設定items中的key為i
        items[i]["my-index"] = i;
        out += "<li>" + option.fn(items[i]) + "</li>"
        //option.fn(items[i])為固定寫法
    }
    //結尾用</ul>包起來
    return out + "</ul>";
};
// 輸出function
module.exports = list