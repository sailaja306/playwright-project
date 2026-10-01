
import MYSQL from 'mysql2/promise'

 export async function getconnection(){

    return await MYSQL.createConnection({
          host : 'localhost',
          user :'root',
          password :'sailuroot3',
          database : 'stddb',
          port : 3306

    })
}




