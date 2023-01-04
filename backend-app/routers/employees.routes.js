 import { Router } from 'express'
 const router = Router() 
 import * as employeesCtrl from '../controllers/employees.controller'
 
 router.put('/', employeesCtrl.getAll)
  
 export default router