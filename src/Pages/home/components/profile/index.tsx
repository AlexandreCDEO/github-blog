import { Link } from 'react-router-dom'
import building from '../../../../assets/building.svg'
import github from '../../../../assets/github.svg'
import users from '../../../../assets/users.svg'

import { ArrowUpRightFromSquare } from 'lucide-react'
import { useEffect, useState } from 'react'
import { searchProfile } from '../../../../http/searchProfile'
import {
  AvatarContainer,
  ProfileContainer,
  ProfileInfo,
  ProfileInfoContainer,
  ProfileSocial,
  SocialItem,
} from './styles'

export interface UserProfile {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)

  async function loadProfile() {
    const response = await searchProfile()
    setProfile(response)
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <ProfileContainer>
      <AvatarContainer src={profile?.avatar_url} />
      <ProfileInfoContainer>
        <Link to="https://github.com/AlexandreCDEO">
          github
          <ArrowUpRightFromSquare size={12} />
        </Link>
        <ProfileInfo>
          <h1>{profile?.name}</h1>
          <p>{profile?.bio}</p>
        </ProfileInfo>
        <ProfileSocial>
          <SocialItem>
            <img src={github} alt="" />
            <span>{profile?.login}</span>
          </SocialItem>
          <SocialItem>
            <img src={building} alt="" />
            <span>{profile?.company}</span>
          </SocialItem>
          <SocialItem>
            <img src={users} alt="" />
            <span>{profile?.followers} seguidores</span>
          </SocialItem>
        </ProfileSocial>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
