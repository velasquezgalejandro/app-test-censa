import React, {useState, useEffect} from 'react'
import TareaService from '../services/TareaService'

const Tareas = () => {
    const [tareas, setTareas] = useState([])
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [token, setToken] = useState('') // suponiendo que ya lo obtuvimos


useEffect(()=> {
    const cargarTareas = async () => {
        const data = await TareaService.obtenerTareas()
        setTareas(data)
    }
    cargarTareas()
}, [])

const manejarEnvioTarea = async (e) => {
    e.preventDefault()
    const nuevaTarea = {titulo, descripcion, completado: false}

    const tareaCreada = await TareaService.crearTarea(
        nuevaTarea, token
    )
    setTareas([...tareas, tareaCreada])
    setTitulo('')
    setDescripcion('')
}

const manejarEliminacionTarea = async (id) => {
    await TareaService.eliminarTarea(id, token)
    setTareas(tareas.filter((tarea)=>tarea.id !== id))
    
}

return (
    <div>
        <h2>Gestor de tareas</h2>
        <form onSubmit={manejarEnvioTarea}>
            <input required type='texto' placeholder='Titulo' value={titulo} onChange={(e)=> setTitulo(e.target.value)} />
            <input required type='texto' placeholder='descripcion' value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}/>
        <button type='submit'>Agregar Tarea</button>
        </form>

        <ul>
            {tareas.map((tarea)=> {
                console.log({tarea})
            return (<li key={tarea.id}>
                <h3>{tarea.titulo}</h3>
                <p>{tarea.descripcion}</p>
                <button onClick={()=> manejarEliminacionTarea(tarea.id)}>Eliminar</button>
            </li>)})}
        </ul>

    </div>
)
}


export default Tareas