import { Text } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components/macro';

export function Nav(props) {
  return (
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
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
`;
