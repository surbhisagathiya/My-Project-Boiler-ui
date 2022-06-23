import { Text } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components/macro';

export function Copyright(props) {
  return (
    <Wrapper
    //   style={{
    //     position: 'absolute',
    //     width: '100%',
    //     textAlign: 'center',
    //   }}
    >
      <Text>{props.CopyrightLabel}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  /* display: flex;
  justify-content: center;
  width: 100%; */
  font-size: 15px;
  /* color: white; */
  /* font-weight: bold;
  letter-spacing: 2px; */
`;
