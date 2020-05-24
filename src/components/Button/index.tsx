import React, { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <ReactLoading type="spin" color="#fff" width={32} height={32} />
    ) : (
      children
    )}
  </Container>
);

export default Button;
