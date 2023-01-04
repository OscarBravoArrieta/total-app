 import express, { json } from 'express'
 const cors = require ( 'cors' )
 //const bodyParser = require ( 'body-parser' )
 import morgan from 'morgan'
 const path = require('path')

 // Importing routes
 import employers from './routers/employers.routes'
 import employees from './routers/employees.routes'
 import beneficiaries from './routers/beneficiaries.routes'

 // Initializations
 const app = express()
 app.use(cors())
 //app.use(bodyParser())
 //app.use(bodyParser.urlencoded({ expanded: false}))

 app.use(express.urlencoded({extended: true}));
 app.use(express.json()) // To parse the incoming requests with JSON payloads

 //midelwares
  app.use(morgan('dev'))
 //app.use(json())

 // Routes
 app.use('/', express.static('app-tools', {redirect: false}))
 app.use('/api/employers', employers)
 app.use('/api/employees', employees)
 app.use('/api/beneficiaries', beneficiaries)

 export default app




