import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const {mayusculas, minusculas, concatenar} = useMayus ("LuiSA");


    console.log(mayusculas());
    console.log(minusculas());
    console.log(concatenar("Holisss"));

  return (
    <div>
        <h1> Probando componentes personalizados </h1>
    </div>
  )
}
