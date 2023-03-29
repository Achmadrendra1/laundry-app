const {Router} = require('express')
const user = require('../controllers/userController')
const auth = require('../controllers/authController')

const router = new Router()
router.get('/', (req, res) => {
    res.send('Welcome To Laundry App')
})

router.post('/login', auth.Login)

router.get('/user', auth.VerifyToken, user.FindAllUser)
router.get('/user/:username', user.FindUserByUsername)
router.post('/user', user.CreateNewUser)
router.put('/user', user.UpdateUser)
router.delete('/user/:id', user.DeleteUser)

module.exports = router