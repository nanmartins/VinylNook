import axios from 'axios'

const baseUrl = 'https://node-express-sooty-omega.vercel.app/vinyls'

export const getVinyls = async ({ page = 1, limit = 16 } = {}) => {
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

export const getNewVinyls = async ({ sort = 'latest', limit = 16 }) => {
  try {
    // const response = await axios.get(`${baseUrl}?page=${page}&sort=${sort}`)
    const response = await axios.get(baseUrl, {
      params: { sort, limit }
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const createVinyl = async (newVinyl) => {
  try {
    await axios.post(baseUrl, newVinyl)
  }
  catch (error) {
    console.log(error)
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
  }
  catch (error) {
    throw error
  }
}
