//引入express
const express = require('express');
const exphbs = require('express-handlebars')
const url = require('url');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const session=require('express-session')

//建立web server物件
const app = express();

//靜態內容資料夾
app.use(express.static('public'))


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        list: require("../helpers/list.js")
    }

}));

//註冊樣板引擎
app.set('view engine', 'hbs')
//指定views路徑(選擇性設定)
app.set('views', './views')

//解決cross origin傳送資料的問題(跨埠號(3000,8080)、協定(http,https))
app.use(cors());

const upload = multer({ dest: 'tmp_uploads/' });

app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: 'sdgdsf ;ldkfg;ld',
    cookie: {
        maxAge: 180000
    }
}));

//設定top-level middleware
// 查看 HTTP HEADER 的 Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 查看 HTTP HEADER 的 Content-Type: application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(res)
    res.render('home', { name: 'Hsu' });
});
//----------------------------------------------------連接JSON資料
app.get('/sales', (req, res) => {
    const sales = require("./../data/sales.json");
    res.render('sales', {
        sales: sales
    })
})
app.get('/sales2', (req, res) => {
    const sales = require("./../data/sales.json");
    res.render('sales2', {
        sales: sales
    })
})
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

//----------------------------------------------------表單內容
app.post('/post-echo', (req, res) => {
    //res.send( JSON.stringify(req.body));
    res.json(req.body);
});

app.post('/post-echo2', (req, res) => {
    //res.send( JSON.stringify(req.body));
    res.send(req.body.name);
});
app.get('/try-upload', (req, res) => {
    res.render('try-upload')

})
app.get('/upload-form1', (req, res) => {
    res.render('upload-form1')

})

//----------------------------------------------------上傳單張
app.post('/try-upload', upload.single('avatar'), (req, res) => {
    console.log(req.file); //查看裡面的屬性
    let ext = "";
    let fname = uuidv4();

    if (req.file && req.file.originalname) {
        switch (req.file.mimetype) {
            case 'image/png':
                ext = '.png';
                fs.createReadStream(req.file.path)
                    .pipe(fs.createWriteStream(__dirname + '/../public/img/' + fname + ext));

                res.json({
                    success: true,
                    file: '/img/' + fname + ext,
                    name: req.body.name
                });
                break;
            case 'image/jpeg':
                ext = '.jpg';

                fs.createReadStream(req.file.path)
                    .pipe(fs.createWriteStream(__dirname + '/../public/img/' + fname + ext));

                res.json({
                    success: true,
                    file: '/img/' + fname + ext,
                    name: req.body.name
                });
                break;
        }
    }
    res.json({
        success: false,
        file: '',
        name: req.body.name
    });
    // //判斷是否為圖檔
    //     if (/\.(png|jpg|jpeg)$/i.test(req.file.originalname)) {
    //         //搬移至public資料夾
    //         fs.createReadStream(req.file.path)
    //             .pipe(fs.createWriteStream(__dirname+'/../public/img/' + req.file.originalname)
    //             ); //上傳後維持原檔名
    //     } res.send('ok')

})
//----------------------------------------------------上傳單張ajax
app.post('/upload-single', upload.single('filefield'), (req, res) => {
    console.log(req.file); //查看裡面的屬性
    let ext = "";
    let fname = uuidv4();
    const result = {
        success: false,
        info: '',
        file: ''
    };

    if (req.file && req.file.originalname) {
        switch (req.file.mimetype) {
            case 'image/png':
                ext = '.png';
            case 'image/jpeg':
                if (!ext) {
                    ext = '.jpg';
                }

                fs.createReadStream(req.file.path)
                    .pipe(fs.createWriteStream(__dirname + '/../public/img/' + fname + ext));

                res.json({
                    success: true,
                    file: '/img/' + fname + ext,
                });
                return;
            default:
                result.info = '檔案格式不符';
        }
    } else {
        result.info = '沒有選擇檔案';
    }
    res.json(result);
});

//----------------------------------------------------路由模組化
const params1 = require(__dirname + '/params-test/params');
params1(app);

//類似middleware用法
const mr = require(__dirname + '/params-test/mobile-router');
app.use(mr);


const mr3 = require(__dirname + '/params-test/mobile-router3');
app.use('/mobile',mr3)

const admin3 = require(__dirname + '/admin3');
app.use('/admin3', admin3);

//----------------------------------------------------session
app.get('/try-session', (req, res) => {
    req.session.views = req.session.views || 0;
    req.session.views++;

    res.json({
        views: req.session.views
    })

});
// routes 路由
app.get('/', (req, res) => {
    console.log(res)
    res.send('Hello Express');
});

app.get('/abc', (req, res) => {
    res.send('ABC');
});



//自訂錯誤頁面
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('找不到網頁')
})

// Server偵聽
app.listen(3000, () => {
    console.log('server running');
});