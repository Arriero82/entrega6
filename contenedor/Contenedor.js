const {promises:fs} = require('fs');
class Productos{
    constructor(ruta){  
        this.ruta = ruta;
    }
    async getAll(){
        try {
            let datos = await fs.readFile(this.ruta, 'utf-8')
            let jsonDatos = JSON.parse(datos);  
            return jsonDatos;
        } catch (error) {
            return []
        }
    }
    async getRandom(){
        try {   
            let datos = await this.getAll();
            let numRandom = Math.floor(Math.random()*datos.length)
            return datos[numRandom];
        } catch (error) {
            return []
        }
    }
}
module.exports = Productos