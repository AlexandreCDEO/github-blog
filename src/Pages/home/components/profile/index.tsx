import { Link } from 'react-router-dom'
import avatar from '../../../../assets/avatar.png'
import building from '../../../../assets/building.svg'
import github from '../../../../assets/github.svg'
import users from '../../../../assets/users.svg'

import { ArrowUpRightFromSquare } from 'lucide-react'
import {
  AvatarContainer,
  ProfileContainer,
  ProfileInfo,
  ProfileInfoContainer,
  ProfileSocial,
  SocialItem,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer src={avatar} />
      <ProfileInfoContainer>
        <Link to="#">
          github
          <ArrowUpRightFromSquare size={12} />
        </Link>
        <ProfileInfo>
          <h1>Cameron Williamson</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileInfo>
        <ProfileSocial>
          <SocialItem>
            <img src={github} alt="" />
            <span>cameronwll</span>
          </SocialItem>
          <SocialItem>
            <img src={building} alt="" />
            <span>Rocketseat</span>
          </SocialItem>
          <SocialItem>
            <img src={users} alt="" />
            <span>32 seguidores</span>
          </SocialItem>
        </ProfileSocial>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
