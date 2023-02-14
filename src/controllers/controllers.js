import {getConettion_empresas} from '../database/conexion_Empresas.js'
import { querys } from '../database/querys.js'

export const controller= {

    Locales_HD_SPACE:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas()
                            const result=await pool
                             .request()
                             .query(querys.Locales_HD_SPACE)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/HD_SPACE"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    },
    DATABASE_SPACE:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas()
                            const result=await pool
                             .request()
                             .query(querys.Locales_Database_Space)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/DATABASE_SPACE"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    },
    LOG_SPACE:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas()
                            const result=await pool
                             .request()
                             .query(querys.Locales_Log_Space)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/LOG_SPACE"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    }



}


/**HOLALALALALAL*/