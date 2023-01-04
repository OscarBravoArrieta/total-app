 import Sequelize from 'sequelize'
 import { sequelize } from '../db-connection/db-connection'
 const Employers = sequelize.define('subsi02', {
     nit : { type: Sequelize.CHAR },
     digver :{ type: Sequelize.CHAR},
     tipper :{ type: Sequelize.ENUM('N','J')},
     coddoc :{ type: Sequelize.CHAR},
     razsoc :{ type: Sequelize.CHAR},
     priape :{ type: Sequelize.CHAR},
     segape :{ type: Sequelize.CHAR},
     prinom :{ type: Sequelize.CHAR},
     segnom :{ type: Sequelize.CHAR},
     sigla :{ type: Sequelize.CHAR},
     cedrep :{ type: Sequelize.CHAR},
     repleg :{ type: Sequelize.CHAR},
     replegloc :{ type: Sequelize.CHAR},
     jefper :{ type: Sequelize.CHAR},
     cedpro :{ type: Sequelize.CHAR},
     nompro :{ type: Sequelize.CHAR},
     direccion :{ type: Sequelize.CHAR},
     codciu :{ type: Sequelize.CHAR},
     celular :{ type: Sequelize.CHAR},
     telefono :{ type: Sequelize.CHAR},
     fax :{ type: Sequelize.CHAR},
     email :{ type: Sequelize.CHAR},
     codzon :{ type: Sequelize.CHAR},
     dirpri :{ type: Sequelize.CHAR},
     ciupri :{ type: Sequelize.CHAR},
     celpri :{ type: Sequelize.CHAR},
     telpri :{ type: Sequelize.CHAR},
     faxpri :{ type: Sequelize.CHAR},
     emailpri :{ type: Sequelize.CHAR},
     nomcon :{ type: Sequelize.CHAR},
     ofiafi :{ type: Sequelize.CHAR},
     tipaso :{ type: Sequelize.ENUM('E','C','B','A','S','D','I','P')},
     codase :{ type: Sequelize.CHAR},
     calemp :{ type: Sequelize.ENUM('E','D','M','N','F','P','S','O','I','Y')},
     tipemp :{ type: Sequelize.ENUM('O','P','M','S')},
     tipsoc :{ type: Sequelize.CHAR},
     tipapo :{ type: Sequelize.ENUM('G','P','E','I')},
     forpre :{ type: Sequelize.ENUM('U','C','S','N','D')},
     pymes : { type: Sequelize.ENUM('S','N')},
     contratista : { type: Sequelize.ENUM('S','N')},
     colegio :{ type: Sequelize.ENUM('S','N')},
     autoriza :{ type: Sequelize.ENUM('S','N')},
     todmes :{ type: Sequelize.ENUM('S','N')},
     matmer :{ type: Sequelize.CHAR},
     codact :{ type: Sequelize.CHAR},
     codind :{ type: Sequelize.CHAR},
     feccer :{ type: Sequelize.DATE},
     actapr :{ type: Sequelize.CHAR},
     fecapr :{ type: Sequelize.DATE},
     fecafi :{ type: Sequelize.DATE},
     feccon :{ type: Sequelize.DATE},
     fecsis :{ type: Sequelize.DATE},
     fecmod :{ type: Sequelize.DATE},
     estado :{ type: Sequelize.ENUM('A','I')},
     resest :{ type: Sequelize.CHAR},
     codest :{ type: Sequelize.CHAR},
     fecest :{ type: Sequelize.DATE},
     tottra :{ type: Sequelize.INTEGER},
     totapo :{ type: Sequelize.INTEGER},
     totcon :{ type: Sequelize.INTEGER},
     tothij :{ type: Sequelize.INTEGER},
     tother :{ type: Sequelize.INTEGER},
     totpad :{ type: Sequelize.INTEGER},
     fosfec :{ type: Sequelize.INTEGER},
     estadoer :{ type: Sequelize.INTEGER}          
 },{
     timestamps: false,
     freezeTableName: true
},)

export default Employers