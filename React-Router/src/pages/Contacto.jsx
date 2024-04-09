import React from 'react';

const Contacto = () => {
    return (
        <div>
    

<div class="mb-3">
    <h1>¡Contacta con los maestros pasteleros otaku! ¡Haz realidad tus sueños con nosotros!</h1>
  <label for="exampleFormControlInput1" class="form-label">Correo</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className='container'>
<button type="button" class="btn btn-danger">Enviar</button>


</div>
            
        </div>
    );
}

export default Contacto;