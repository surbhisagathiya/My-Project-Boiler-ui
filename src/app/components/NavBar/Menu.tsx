import { Text } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components/macro';

export function Menu({ iconUrl, Icontext }) {
  return (
    <Wrapper
    //   style={{
    //     position: 'absolute',
    //     width: '100%',
    //     textAlign: 'center',
    //   }}
    >
      {React.cloneElement(iconUrl, {
        width: '20px',
        height: '20px',
        color: 'white',
        marginRight: '10px',
        objectFit: 'contain',
      })}
      <Text style={{ opacity: '0.55' }}>{Icontext}</Text>
      {/* <i className={iconUrl}></i> */}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  /*justify-content: center;
  width: 100%; */
  font-size: 14px;
  /* font-weight: bold; */
  margin-right: 10px;
`;
