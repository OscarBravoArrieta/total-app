 import Sequelize from 'sequelize'
 import { sequelize } from '../db-connection/db-connection'
 const Afiliados = sequelize.define('subsi15', {
     nit :{ type: Sequelize.CHAR},
     codsuc :{ type: Sequelize.CHAR},
     codlis :{ type: Sequelize.CHAR},
     cedtra :{ type: Sequelize.CHAR},
     coddoc :{ type: Sequelize.CHAR},
     fecexp :{ type: Sequelize.DATE},
     priape :{ type: Sequelize.CHAR},
     segape :{ type: Sequelize.CHAR},
     prinom :{ type: Sequelize.CHAR},
     segnom :{ type: Sequelize.CHAR},
     direccion :{ type: Sequelize.CHAR},
     codciu :{ type: Sequelize.CHAR},
     telefono :{ type: Sequelize.CHAR},
     email :{ type: Sequelize.CHAR},
     codzon :{ type: Sequelize.CHAR},
     rural :{ type: Sequelize.ENUM('S','N')},
     agro :{ type: Sequelize.ENUM('S','N')},
     captra :{ type: Sequelize.ENUM('N','I')},
     tipdis :{ type: Sequelize.CHAR},
     horas :{ type: Sequelize.INTEGER},
     salario :{ type: Sequelize.INTEGER},
     tipsal :{ type: Sequelize.CHAR},
     fecsal :{ type: Sequelize.DATE},
     sexo :{ type: Sequelize.CHAR},
     estciv :{ type: Sequelize.CHAR},
     tipcon :{ type: Sequelize.ENUM('F','I')},
     feccon :{ type: Sequelize.DATE},
     trasin :{ type: Sequelize.ENUM('S','N')},
     vivienda :{ type: Sequelize.ENUM('N','F','P','A','H')},
     cabhog :{ type: Sequelize.ENUM('S','N')},
     nivedu :{ type: Sequelize.CHAR},
     tipcot :{ type: Sequelize.CHAR},
     subtip :{ type: Sequelize.CHAR},
     vendedor :{ type: Sequelize.ENUM('S','N')},
     empleador :{ type: Sequelize.ENUM('S','N')},
     tippag :{ type: Sequelize.ENUM('B','C','G','E','T','N')},
     codcue :{ type: Sequelize.CHAR},
     ofides :{ type: Sequelize.CHAR},
     codgru :{ type: Sequelize.CHAR},
     codban :{ type: Sequelize.CHAR},
     numcue :{ type: Sequelize.CHAR},
     tipcue :{ type: Sequelize.ENUM('A','C','E')},
     fecemi :{ type: Sequelize.DATE},
     feccar :{ type: Sequelize.DATE},
     codcat :{ type: Sequelize.CHAR},
     fecnac :{ type: Sequelize.DATE},
     ciunac :{ type: Sequelize.CHAR},
     fecing :{ type: Sequelize.DATE},
     fecpre :{ type: Sequelize.DATE},
     fecafi :{ type: Sequelize.DATE},
     fecsis :{ type: Sequelize.DATE},
     fecmod :{ type: Sequelize.DATE},
     usumod :{ type: Sequelize.INTEGER},
     usuario :{ type: Sequelize.INTEGER},
     giro :{ type: Sequelize.ENUM('S','N')},
     codgir :{ type: Sequelize.CHAR},
     estado :{ type: Sequelize.ENUM('A','I','M')},
     codest :{ type: Sequelize.CHAR},
     fecest :{ type: Sequelize.DATE},
     carnet :{ type: Sequelize.ENUM('S','N')},
     benef :{ type: Sequelize.ENUM('S','N')},
     ruaf :{ type: Sequelize.ENUM('N','S')},
     ruasub :{ type: Sequelize.INTEGER},
     fecrua :{ type: Sequelize.DATE},
     fosfec :{ type: Sequelize.ENUM('S','N')},
     fecfos :{ type: Sequelize.DATE},
     totcon :{ type: Sequelize.INTEGER},
     tothij :{ type: Sequelize.INTEGER},
     tother :{ type: Sequelize.INTEGER},
     totpad :{ type: Sequelize.INTEGER},
     nota :{ type: Sequelize.TEXT},
     autoriza :{ type: Sequelize.ENUM('S','N')},
     orisex :{ type: Sequelize.INTEGER},
     codocu :{ type: Sequelize.INTEGER},
     codetn :{ type: Sequelize.INTEGER},
     codpai :{ type: Sequelize.INTEGER},
     facvul :{ type: Sequelize.INTEGER}
 },{
     timestamps: false,
     freezeTableName: true
 },)

export default Afiliados