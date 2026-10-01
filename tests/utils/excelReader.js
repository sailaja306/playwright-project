

import XLSX from "xlsx"

export function readExcel(sheetName){

   const workBook = XLSX.readFile('testData/TestDataExcel.xlsx')

   const workBook = workBook.sheets[sheetName]

   const data = XLSX.utils.sheet_to_json(workSheet)

   return data


}





