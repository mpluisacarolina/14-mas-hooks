import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

    const {formulario, cambiado, enviado} = useForm({});

  return (
    <div>
        <h1> Formulario</h1>
        <h3> Formulario para guardar un curso</h3>
        <h3>Curso Guardado: {formulario.titulo}</h3>
        <pre className = "codigo">{JSON.stringify(formulario)}</pre>

        <form onSubmit={enviado} className="form">
            <input type="text" name="titulo" onChange = {cambiado} placeholder="Título" />
            <input type="number" name="anio" onChange = {cambiado} placeholder="Año Publicación" />
            <textarea name="descripcion" onChange = {cambiado} placeholder="Descripción" />
            <input type="text" name="autor" onChange = {cambiado} placeholder="Autor" />
            <input type="email" name="email" onChange = {cambiado} placeholder="Correo Electrónico" />

            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}