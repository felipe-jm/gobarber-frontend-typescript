import React, { useContext } from 'react';
import { FiPower } from 'react-icons/fi';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Link } from 'react-router-dom';

import { Container, HeaderContent, Profile } from './styles';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <HeaderContent>
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

        <div>
          <Switch
            onChange={toggleTheme}
            checked={theme.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.secundary}
            onColor={colors.primary}
          />

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Header;
