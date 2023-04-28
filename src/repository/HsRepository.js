class HsRepository {
  #baseUrl
  #key
  #host

  constructor (baseUrl, key, host) {
    this.#baseUrl = baseUrl
    this.#key = key
    this.#host = host
  }
}

export const repository = Object.freeze(
  new HsRepository(
    import.meta.env.API_BASE_URL,
    import.meta.env.API_KEY,
    import.meta.env.HOST
    )
  )
