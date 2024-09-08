import { api } from '../lib/axios'
import { UserProfile } from '../Pages/home/components/profile'

type LoadProfileResponse = UserProfile

export async function searchProfile(): Promise<LoadProfileResponse> {
  const owner = import.meta.env.VITE_OWNER
  const response = await api.get(`/users/${owner}`)
  return response.data
}
