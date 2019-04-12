module.exports = app => {
    app.get('/my-params1/:action/:id', (req, res) => {
        res.json(req.params);
    });
    //http://localhost:3000/my-params1/move/01
    //{action: "move",id: "01"}
    app.get('/my-params2/:action?/:id?', (req, res) => {
        res.json(req.params);
    });
    //http://localhost:3000/my-params2/jump
    //{action: "jump"}
    app.get('/my-params3/*/*?', (req, res) => {
        res.json(req.params);
    });
    //http://localhost:3000/my-params3/sit/
    //{0: "sit"}
    //http://localhost:3000/my-params3/sit/03
    //{0: "sit",1: "03",}

};