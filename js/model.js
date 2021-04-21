export default class model {

    constructor () {
        this.view = null;
        this.bicis = [];
        this.id = 1;
    }

    view (view){
        this.view = view;
    } 

    addBici(nombre,color,latitud,longitud){
       // console.log("EL NOMBRE ES : ", nombre, " el color es: ",color , " la longitud es: ", longitud , "la latitud es : ", latitud);
        const bici = {
            id: this.id ++,
            nombre,
            color,
            latitud,
            longitud
        }

        this.bicis.push(bici);
        console.log(this.bicis);

        return bici;
    }
}