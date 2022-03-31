const {readFileSync,writeFileSync} = require('fs');
const path = require('path')
const first = readFileSync('.\\external_folder\\subfolder\\second.txt','utf8');
console.log(first);
writeFileSync(path.resolve(__dirname,'external_folder\\subfolder\\third.txt'),`this is third file!!`)
const third = readFileSync(path.resolve(__dirname,'external_folder\\subfolder\\third.txt'),'utf8');
console.log(third);


const fs = require('fs');
const { resourceLimits } = require('worker_threads');
// console.log(fs);
fs.appendFile('.\\external_folder\\subfolder\\third.txt','hey hii',(err)=>{
    if(err){
        return err;
    }
});
console.log(fs.readFileSync('.\\external_folder\\subfolder\\third.txt','utf8'))