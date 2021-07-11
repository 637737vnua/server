const dbUser = require('./model/user');

class SiteController {
    index(req, res, next) {
        res.send('done');
    }
}

module.exports = new SiteController();