import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Container, HeaderContent, Profile } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="Go Barber" />

        <Profile>
          <img
            src={
              user.avatar_url ||
              'https://api.adorable.io/avatars/99/abott@adorable.png'
            }
            alt="Avatar"
          />

          <div>
            <span>Bem-vindo</span>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
