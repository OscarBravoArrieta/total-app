 const express = require('express')
 const router = express.Router()
 const { Op } = require("sequelize")
 const { QueryTypes } = require ( 'sequelize' )
 import { sequelize } from '../db-connection/db-connection' 
 
 //------------------------------------------------------------------------------------------------
 export async function getAll(req, res) {       
     const status = req.body.status || ['A', 'I', 'M']
     const beginDate = req.body.beginDate || '1900-01-01'
     const endDate = req.body.endDate || new Date().toISOString().substring(0, 10) //Formato de la fecha AAAA-MM-DD
     const relationship = req.body.relationship || ['1', '2', '3', '4']
     let whichDateField = 'FECHA_AFILIACION'

     if ((status.length === 1) && (status[0] === 'I')) { 
         whichDateField = 'FECHA_RETIRO'         
     }

     try {
         const employees = await sequelize.query(
             `SELECT * FROM employees WHERE CODIGO_ESTADO IN (?) AND ${whichDateField} BETWEEN ? AND ?`, //Call employers view
             { 
                 replacements: [status, beginDate, endDate],
                 type: QueryTypes.SELECT 
             } 
         )
         if (employees){
             res.json({employees}) 
         }else{
             res.json({
                 message: 'No hay registros coincidentes...'
             })
         }                    
     } catch (error) {
         console.log('Se presentó el siguiente error al obtener Empleados...', error);
     } 
 }    
 //------------------------------------------------------------------------------------------------
