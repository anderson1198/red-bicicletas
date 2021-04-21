import View from './view.js';
import Model from './model.js';

document.addEventListener('DOMContentLoaded',()=>{
    const view = new View();
    const model = new Model();
    
    view.render();
    view.setModel(model);
})



