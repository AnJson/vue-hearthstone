import axios from 'axios'

class HsRepository {
  #baseUrl
  #key
  #host

  constructor (baseUrl, key, host) {
    this.#baseUrl = baseUrl
    this.#key = key
    this.#host = host
  }

  async getByClass (className) {
    const response = await this.#request(`cards/classes/${className.toLowerCase()}`)
    return response.data
  }

  async #request (uri) {
    const req = {
      method: 'GET',
      url: `${this.#baseUrl}/${uri}`,
      headers: {
        'X-RapidAPI-Key': this.#key,
        'X-RapidAPI-Host': this.#host
      }
    }

    return await axios.request(req)
  }
}

export const repository = Object.freeze(
  new HsRepository(
    import.meta.env.VITE_API_BASE_URL,
    import.meta.env.VITE_API_KEY,
    import.meta.env.VITE_HOST
    )
  )
