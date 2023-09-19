const fs = require('fs'); 
const path = require('path');

function haha() {
    const schemaPath = path.resolve(__dirname, '../src/schema.ts');
  
    fs.readFile(schemaPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
    
        const newData = data + '\nconst typer = \'prod\';'
    
        fs.writeFile(schemaPath, newData, 'utf8', (err) => {
            if (err) console.log(err);
        });
    });
}
  
module.exports = {
    haha
}