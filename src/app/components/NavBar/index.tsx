import * as React from 'react';
// import styled from 'styled-components/macro';
import { Logo } from './Logo';
// import { PageWrapper } from '../PageWrapper';
// import { StyleConstants } from 'styles/StyleConstants';
import Nav from './Nav';
import { Flex } from '@chakra-ui/react';

export function NavBar() {
  return (
    // <Wrapper style={{ backgroundColor: '#183380', color: 'white' }}>
    //   <PageWrapper
    //     style={{
    //       display: 'flex',
    //       paddingTop: '11px',
    //       paddingBottom: '11px',
    //       width: '100%',
    //     }}
    //   >
    <Flex
      w="100%"
      backgroundColor="#183380"
      flexDirection={{
        base: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      align={{ sm: 'center', base: 'center' }}
      color="white"
    >
      <Logo />
      <Nav title="Log in" />
    </Flex>
    //   </PageWrapper>
    // </Wrapper>
  );
}

// const Wrapper = styled.header`
//   box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
//   height: fit-content;
//   max-height: 4.2rem;
//   display: flex;
//   /* position: absolute; */
//   top: 0;
//   right: 0;
//   left: 0;
//   width: 100%;
//   font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif;
//   font-size: 16px;

//   ${PageWrapper} {
//     display: flex;
//     align-items: center;
//   }
// `;
