import axios from 'axios'

const baseUrl = 'https://node-express-sooty-omega.vercel.app/vinyls'


export const getVinyls = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data.vinyls
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

export const deleteVinyl = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
  }
  catch (error) {
    throw error
  }
}
