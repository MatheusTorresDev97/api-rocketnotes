import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

const Header = () => {
  const { signOut } = useAuth()
  return (
    <Container>
      <Profile to="/profile">
      <img
          src="https://github.com/matheustorresdev97.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Matheus Torres</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}

export default Header
