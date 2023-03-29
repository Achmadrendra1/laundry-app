require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {sequelizes} = require('./src/models/init-models')
const routes = require('./src/routes/index')

const app = express()
const port = process.env.PORT || 4500

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.listen(port, ()=> console.log(`Server Started On : http://localhost:${port}`))

const dropDatabaseSync = false
sequelizes.sync({ force: dropDatabaseSync }).then(() => {
    if (!dropDatabaseSync) {
        console.log(`Database don't drop`);
    }
})

app.use(routes)
