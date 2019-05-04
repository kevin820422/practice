
const express = require('express');//有關伺服器運作
const exphbs = require('express-handlebars') //版面渲染
const url = require('url');
const bodyParser = require('body-parser') //轉換POST表單的中介軟體
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require('cors'); //解決cross origin傳送資料的問題(跨埠號(3000,8080)、協定(http,https))
const multer = require('multer'); //檔案上傳
const fs = require('fs');
const uuidv4 = require('uuid/v4'); //上傳檔案名隨機編碼
const session = require('express-session'); //Session
const moment = require('moment-timezone'); //時間日期處理
const mysql = require('mysql'); //SQL
const bluebird = require('bluebird') //處理Promise物件

const db = mysql.createConnection({
    host: 'localhost',
    user: 'benjamin',
    password: '12345678',
    database: 'chef'
});
db.connect();

bluebird.promisifyAll(db);

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


var whitelist = ['http://localhost:8080', 'http://192.168.27.166:8080', undefined, 'http://localhost:3000']
var corsOptions = {
    credentials: true, //解決別台主機連線問題:多設定credentials
    origin: function (origin, callback) {
        console.log('origin: ' + origin);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// app.use(cors());
app.use(cors(corsOptions));

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
// 查看 HTTP HEADER 的 Content-Type: application/x-www-form-urlencoded,
app.use(bodyParser.urlencoded({ extended: false }))
// 查看 HTTP HEADER 的 Content-Type: application/json
app.use(bodyParser.json());

app.get('/headers', (req, res) => {
    var s = "";
    for (var name in req.headers) {
        s += name + ":" + req.headers[name] + '\n';
    }
    res.send(s)
});
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
app.use('/mobile', mr3)

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

app.post('/try-session', (req, res) => {
    req.session.views = req.session.views || 0;
    req.session.views++;

    res.json({
        views: req.session.views,
        body: req.body
    })

});

app.get('/try-moment', (req, res) => {
    const fm = 'YYYY-MM-DD HH:mm:ss'
    const exp = req.session.cookie.expires;
    const mo1 = moment(exp);
    const mo2 = moment();

    let out = '';

    res.contentType('text/plain');

    out += mo1.format(fm) + "\n";
    out += mo2.format(fm) + "\n";
    out += mo1.tz('Europe/London').format(fm) + "\n";
    out += mo2.tz('Europe/London').format(fm) + "\n";
    res.send(out);

});

app.get('/try-db', (req, res) => {
    let sql = "SELECT * FROM `sales`";
    db.query(sql, (error, results, fields) => {
        console.log(results);

        for (let i in results) {
            results[i].birthday2 = moment(results[i].birthday).format('YYYY-MM-DD');
        };
        res.render('try-db', {
            sales: results
        });
    });
});

app.get('/sales3/add', (req, res) => {
    res.render('sales3-add')
});
app.post('/sales3/add', (req, res) => {
    const data = {
        success: false,
        message: {
            type: 'danger',
            text: '',
        }
    }
    const body = req.body;
    data.body = body;
    if (!body.sales_id || !body.name || !body.birthday) {
        data.message.text = '資料不足';
        res.render('sales3-add', data);
        return;
    }

    let query = db.queryAsync("INSERT INTO `sales` SET ?", body)//query改為queryasync，return出Promise物件
        .then(results => {
            // console.log(results);
            // if(results.affectedRows===1){
            //     data.success = true;
            //     data.message.type = 'success';
            //     data.message.text = '新增成功';
            // } else {
            //     data.message.text = '資料沒有新增';
            // }
            //
            // res.render('sales3-add', data);

            if (results.affectedRows === 1) {
                console.log(results);
                return db.queryAsync("INSERT INTO `sales` SET ?", {
                    name: 'test',
                    sales_id: 'Hello-' + results.insertId,
                    birthday: '2000-02-02'
                })
            }
        })
        .then(results => {
            if (results.affectedRows === 1) {
                data.success = true;
                data.message.type = 'success';
                data.message.text = '新增成功';
            } else {
                data.message.text = '資料沒有新增';
            }
            res.render('sales3-add', data);
        })
        .catch(error => {


        });
    console.log(body)
    console.log(query.sql);
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
app.listen(8000, () => {
    console.log('server running');
});