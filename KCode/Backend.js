import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as StartFuncCrudGenerator } from "./CrudGenerator/Backend.js";

let LocalFilesArray = StartFuncReadDataSchema();
console.log("LocalFilesArray : ", LocalFilesArray);

StartFuncCrudGenerator({ inFilesArray: LocalFilesArray });
// console.log("aaaaaaaaaa : ", LocalFilesArray);
