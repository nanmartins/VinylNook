import axios from 'axios'

const baseUrl = 'https://node-express-sooty-omega.vercel.app/vinyls'


export const getVinyls = async ({ page = 1, limit = 9 } = {}) => {
  try {
    const response = await axios.get(baseUrl, {
      params: { page, limit }
    })
    return response.data
  } catch (error) {
    throw error
  }
}


export const getVinyl = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  }
  catch (error) {
    throw error
  }
}


export const createVinyl = async (newVinyl) => {
  try {
    const response = await axios.post(baseUrl, newVinyl)
    return response.data.vinyls
  }
  catch (error) {
    throw error
  }
}


export const updateVinyl = async (id, updatedVinyl) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedVinyl)
    return response.data.vinyls
  }
  catch (error) {
    throw error
  }
}


export const deleteVinyl = async (deleteId) => {
  try {
    await axios.delete(`${baseUrl}/${deleteId}`)
    // return response.data
  }
  catch (error) {
    throw error
  }
}
