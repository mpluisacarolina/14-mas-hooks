import React, { useId } from 'react'

export const MiComponente = () => {

    const id =useId();  
    const segundoId = useId();
    const tercerId = useId();

    console.log(tercerId);

  return (
    <div>
        <h1> HOOK UseId</h1>
        <input id={id} name="nombre" placeholder="Nombre" />
    </div>
  )
}
