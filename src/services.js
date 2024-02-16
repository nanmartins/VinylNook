import axios from 'axios'

const vinylBaseUrl = 'https://node-express-sooty-omega.vercel.app/vinyls'
const recommendationBaseUrl = 'https://node-express-sooty-omega.vercel.app/recommendations'


export const getVinyls = async ({ page = 1, limit = 16 } = {}) => {
  try {
    const response = await axios.get(vinylBaseUrl, {
      params: { page, limit }
    })
    return response.data
  }
  catch (error) {
    throw error
  }
}


export const getVinyl = async (id) => {
  try {
    const response = await axios.get(`${vinylBaseUrl}/${id}`)
    return response.data
  }
  catch (error) {
    throw error
  }
}


export const getNewVinyls = async ({ sort = 'latest', limit = 16 } = {}) => {
  try {
    const response = await axios.get(vinylBaseUrl, {
      params: { sort, limit }
    })
    return response.data
  }
  catch (error) {
    throw error
  }
}


export const createVinyl = async (newVinyl) => {
  try {
    await axios.post(vinylBaseUrl, newVinyl)
  }
  catch (error) {
    throw error
  }
}


export const updateVinyl = async (id, updatedVinyl) => {
  try {
    const response = await axios.put(`${vinylBaseUrl}/${id}`, updatedVinyl)
    return response.data.vinyls
  }
  catch (error) {
    throw error
  }
}


export const deleteVinyl = async (deleteId) => {
  try {
    await axios.delete(`${vinylBaseUrl}/${deleteId}`)
  }
  catch (error) {
    throw error
  }
}


// Recommendation

export const getRecommendations = async () => {
  try {
    const response = await axios.get(recommendationBaseUrl)
    return response.data
  }
  catch (error) {
    throw error
  }
}


export const createRecommendation = async (newRecommendation) => {
  try {
    await axios.post(recommendationBaseUrl, newRecommendation)
  }
  catch (error) {
    throw error
  }
}
