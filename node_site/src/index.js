//引入express
const express = require('express');
const exphbs = require('express-handlebars')
const url = require('url');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require('cors');
const multer = require('multer');

//建立web server物件
const app = express();

//靜態內容資料夾
app.use(express.static('public'))


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        list:require("../helpers/list.js")
    }

}));

//註冊樣板引擎
app.set('view engine', 'hbs')
//指定views路徑(選擇性設定)
app.set('views', './views')

//解決cross origin傳送資料的問題(跨埠號(3000,8080)、協定(http,https))
app.use(cors());

const upload = multer({ dest: 'tmp_uploads/' });

//設定top-level middleware
// 查看 HTTP HEADER 的 Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 查看 HTTP HEADER 的 Content-Type: application/json
app.use(bodyParser.json());

// routes 路由
app.get('/sales',  (req, res)=> {
    const sales = require("./../data/sales.json");
    res.render('sales', {
        sales:sales
    })
})
app.get('/sales2', (req, res) => {
    const sales = require("./../data/sales.json");
    res.render('sales2', {
        sales: sales
    })
})
app.get('/', (req, res) => {
    
    res.render('home', { name: 'Hsu' });
});

app.get('/try-qs', (req, res) => {
    console.log(req.url);
    const urlParts = url.parse(req.url, true);
    //
    urlParts.myQuery = JSON.parse(JSON.stringify(urlParts.query));
    console.log(urlParts);
    res.render('try_qs', {
        urlParts: urlParts
    });
})


app.post('/post-echo', (req, res) => {
    //res.send( JSON.stringify(req.body));
    res.json(req.body);
});

app.post('/post-echo2', (req, res) => {
    //res.send( JSON.stringify(req.body));
    res.send(req.body.name);
});


// routes 路由
app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/abc', (req, res) => {
    res.send('ABC');
});



//自訂錯誤頁面
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404-找不到網頁')
})

// Server偵聽
app.listen(3000, () => {
    console.log('server running');
});