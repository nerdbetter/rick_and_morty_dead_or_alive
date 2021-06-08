// https://github.com/afuh/rick-and-morty-api-node/blob/develop/src/index.js
// recommended package on the rickandmorty api page, easier to just include the short amount of code in case I need to edit the service calls, and I don't have to pull in another package
const https = require('https')

const baseUrl = 'https://rickandmortyapi.com/api/'

const get = (endpointUrl) => {
    console.log('hit service')
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}${endpointUrl}`
    https.get(url, response => {
      response.setEncoding('utf8')
      let body = ''

      response.on('data', data => (body += data))

      response.on('error', error => reject(error))

      response.on('end', () => {
        body = JSON.parse(body)
        response.data = body
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(response)
        } else {
          reject(response)
        }
      })
    })
  })
}
const validate = qry => {
    if (typeof qry === 'number' && Number.isInteger(qry) || Array.isArray(qry)) {
      return `/${qry}`
    }
  
    if (typeof qry === 'object') {
      return `/?${Object.keys(qry)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(qry[key])}`)
        .join('&')}`
    }
  
    throw new Error('As argument use an object, an array, an integer or leave it blank')
  }
  
  const getEndpoint = async (endpoint = '', opt = {}) => {
    const query = validate(opt)
  
    try {
      const { data } = await get(endpoint + query)
      return data
    } catch (e) {
      return {
        status: e.statusCode,
        error: e.data.error
      }
    }
  }
  
export const getCharacter = (opt = {}) => getEndpoint('character', opt)
export const getLocation = (opt = {}) => getEndpoint('location', opt)
export const getEpisode = (opt = {}) => getEndpoint('episode', opt)