const {Router} = require('express')
const path = require('path');
const user = require('../controllers/userController')
const auth = require('../controllers/authController')

const router = new Router()
router.get('/', (req, res) => {
    res.send('Welcome To Laundry App')
})

router.get('/images/:filename', function (req, res) {
    res.sendFile(path.join(__dirname, '../storage', req.params.filename));
});

router.post('/login', auth.Login)

router.get('/user', auth.VerifyToken, user.FindAllUser)
router.get('/user/:username', user.FindUserByUsername)
router.post('/user', user.CreateNewUser)
router.put('/user', user.UpdateUser)
router.delete('/user/:id', user.DeleteUser)

module.exports = router