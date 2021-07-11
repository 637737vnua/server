
class ApiUserController {
    test(req, res, next) {
        res.send('api usser')
    }
}

module.exports = new ApiUserController();
