import axios from 'axios'

export const GetLastedRepo = async () => {
  return await axios.get(
    'https://api.github.com/search/repositories?q=user:natthanun1999+sort:author-date-asc'
  )
}