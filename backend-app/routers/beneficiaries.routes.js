 import { Router } from 'express'
 const router = Router() 
 import * as beneficiaiesCtrl from '../controllers/beneficiaries.controller'
 
 router.put('/', beneficiaiesCtrl.getAll)
  
 export default router