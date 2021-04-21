export default class formulario{
    constructor(){
        this.nombre = document.getElementById('nom-bici');
        this.color = document.getElementById('color-bici');
        this.latitud = document.getElementById('latitud');
        this.longitud = document.getElementById('longitud');
        this.guardar = document.getElementById('guardar-bici');
    }


    onClick(callback){
        this.guardar.onclick = () =>{


            if(this.nombre.value==="" || this.color.value==="" || this.latitud.value==="" || this.longitud.value===""  ){

                
                console.log("todos los campos son obligatorios");
                

               
                
                return;
           
            } else  if( isNaN(this.latitud.value) ||  isNaN(this.longitud.value)){
                            console.log("latitud y longitud son datos numericos");
                            return;
                        } 

            
            callback(this.nombre.value,this.color.value,this.latitud.value,this.longitud.value);
            this.nombre.value= "";
            this.color.value= "";
            this.latitud.value= "";
            this.longitud.value= "";


        }
    }


}