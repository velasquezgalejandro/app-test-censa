import axios from 'axios'

const API_URL = "http://127.0.0.1:8000/api/tareas/"

// obtener la lista de tareas... get

const obtenerTareas = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

// crear una tarea nueva
const crearTarea = async (tarea, token) => {
    const response = await axios.post(API_URL, tarea, {headers: {Authorization:`Bearer ${token}`}})
    return response.data
}

// actualizar una tarea nueva
const actualizarTarea = async (id, tarea, token) => {
    const response = await axios.put(`${API_URL}${id}/`, tarea, {headers: {Authorization:`Bearer ${token}`}})
    return response.data
}

// eliminar una tarea 
const eliminarTarea = async (id, token) => {
    await axios.delete(`${API_URL}${id}/`, {headers: {Authorization:`Bearer ${token}`}})
}

export default {obtenerTareas, crearTarea, actualizarTarea, eliminarTarea}