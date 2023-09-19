const fs = require('fs'); 
const { haha } = require('./haha'); 

function addProdTyper() {
    const schemaPath = './src/schema.ts';
  
    haha();
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
    addProdTyper  
};