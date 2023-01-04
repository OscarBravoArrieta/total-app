 import { Router } from 'express'
 const router = Router() 
 import * as employersCtrl from '../controllers/employers.controller'
 
 router.put('/', employersCtrl.getAll)
  
 export default router