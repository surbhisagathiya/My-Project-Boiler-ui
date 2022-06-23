import { Text } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components/macro';

interface navProps {
  title: string;
}

type Props = navProps;

const Nav: React.FC<Props> = props => (
  <Wrapper
    style={{
      position: 'fixed',
      width: '100%',
      textAlign: 'center',
    }}
  >
    <Text>{props.title}</Text>
  </Wrapper>
);

export default Nav;

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
`;
