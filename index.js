/*
const nombre=document.getElementById('#nombre');
const apellido=document.getElementById('#apellido');

const correo= document.querySelector('#correo');

const cantidad = document.getElementById('#cantidad');
const categoria = document.getElementById('#categoria');
const resumen = document.getElementById('#submit');
const total= document.getElementById('#total');
const borrar= document.getElementById('#borrar');
*/

const nombre=document.querySelector('#nombre');
const apellido=document.querySelector('#apellido');
const correo= document.querySelector('#correo');

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const resumen = document.querySelector('#submit');
const total= document.querySelector('#total');
const borrar= document.querySelector('#borrar');

function monto_a_pagar (cant, cat) {

    let precio = 200;
    let descuento = 0;

    if (cat==0) {
        return(alert('Seleccione una categoria'));       
    }

    if (cat==1) {
        return(precio*cant);    
    }

    if (cat==2) {
        return (precio*cant*0.2);
    }

    if (cat==3) {
        return (precio*cant*0.5);
    }

    if (cat==4) {
        return (precio*cant*0.85);
    }
}


resumen.addEventListener('click', (elemento)=>{
    elemento.preventDefault();
   
    if (nombre.value==='') 
    {
     alert('Por favor escribi tu nombre');
    }
 else 
    {
     if (apellido.value==='') 
        {
         alert('Por favor escribi tu apellido');
        } 
     else 
        {
         if (correo.value==='') 
            {
             alert('Por favor escribi tu email');
            } 
         else 
            {
             if (cantidad.value==='') 
                {
                    alert('ingrese la cantidad de tickets');
                } 
             else    
                {
                    
                 if (categoria.value==='') 
                    {
                     alert('ingrese la categoria de tickets');
                    } 
                 else    
                    {
                        
                     let cant=parseInt(cantidad.value);
                     let cat=parseInt(categoria.value);
                    
                     total.innerHTML= monto_a_pagar(cant , cat);
                    }
                }
             
            }
        }

    }

})

borrar.addEventListener('click', (elemento)=>{
    elemento.preventDefault();
    
    document.getElementById('form_de_venta').reset();//resetea el formulario a sus valores por defecto
    parrafo_total.innerHTML='';
    })