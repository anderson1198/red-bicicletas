import Map from './components/map.js';
import Formulario from './components/formulario.js';

export default class view  {
   
    constructor(){
        this.model = null;
        this.map = new Map(); 
        this.formulario = new Formulario();
        this.main = document.getElementById('root');
        this.formulario.onClick((nombre,color,latitud,longitud) => this.addBici(nombre,color,latitud,longitud));
        this.listB = document.getElementById('table');
    }

    setModel(model){
        this.model = model;
    }


     render() {
      
        
    }

    addBici(nombre,color,latitud,longitud){
       const bici = this.model.addBici(nombre,color,latitud,longitud);
       console.log(nombre);
       this.createRow(bici);
       this.map.addBci(bici.latitud,bici.longitud);
    

    }

    createRow(bici){
            const lista = this.listB.insertRow();

            lista.innerHTML = `

            <td>${bici.id}</td>
            <td>${bici.nombre}</td>
            <td>${bici.color}</td>
            <td>[${bici.latitud},${bici.longitud}]</td>
            <td></td>
            `

           const btnEditar = document.createElement('button');
           btnEditar.innerText="Editar";
           btnEditar.classList.add('btn','colorEditar');
           lista.children[4].appendChild(btnEditar);

           const btnEliminar = document.createElement('button');
           btnEliminar.innerText= "eliminar";
           btnEliminar.classList.add('btn','colorEliminar');
           lista.children[4].appendChild(btnEliminar);
    }

}

