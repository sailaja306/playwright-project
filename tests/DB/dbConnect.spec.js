
import {test , expect} from "@playwright/test"

import { getconnection } from "../utils/db"

test("Connecting Data Base"
     , async ({}) =>{
    const connect = await getconnection()

 //create table
 await connect.execute(
    `CREATE TABLE TRENDS
    (Emp_id int primary key auto_increment,
    Emp_name varchar (50) not null ,
    Emp_age int not null);`)

    //Insert Values
    await connect.execute(
        `INSERT INTO TRENDS (Emp_name,Emp_age)
        VALUES
        ('Arun',25),('Soumiya' ,25) , ('Ravi' , 24) , ('Mohana' , 23);`)
    
    
 }) 











