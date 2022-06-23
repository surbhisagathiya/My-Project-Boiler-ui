import * as React from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from '../PageWrapper';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Copyright } from './Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <Wrapper
      style={{
        backgroundColor: '#1c2646',
        color: 'white',
      }}
    >
      <PageWrapper>
        <Flex
          w="100%"
          flexDirection={{
            base: 'column',
            sm: 'row',
            md: 'row',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          justifyContent="space-between"
        >
          <Text>
            <Copyright CopyrightLabel="© 2018 Rayft. All rights reserved." />
          </Text>
          <Box d="flex" justifyContent="space-between" w={20}>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGooglePlusG} />
          </Box>
        </Flex>
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: fit-content;
  max-height: 4.5rem;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif;
  font-size: 16px;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    width: 100%;
    /* justify-content: space-between; */
    padding-right: 70px;
    padding-left: 70px;
    opacity: 0.7;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
