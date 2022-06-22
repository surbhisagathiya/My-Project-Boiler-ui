import * as React from 'react';
import styled from 'styled-components';

export function MenuIcon({ iconUrl }) {
  return (
    <Wrapper>
      {React.cloneElement(iconUrl, {
        width: '20px',
        height: '20px',
        color: 'white',
        marginRight: '10px',
        objectFit: 'contain',
      })}
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
