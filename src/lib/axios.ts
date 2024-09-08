import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

/**
 *  const responde = api.get('transactions', {
 *
 * })
 *
 */
