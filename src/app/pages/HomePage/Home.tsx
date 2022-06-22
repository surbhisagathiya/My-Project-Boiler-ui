import { Box, Flex } from '@chakra-ui/react';
import { Logo } from 'app/components/NavBar/Logo';
import { Menu } from 'app/components/NavBar/Menu';
import { Search } from 'app/components/NavBar/Search';
import { PageWrapper } from 'app/components/PageWrapper';
import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { TimeIcon, SettingsIcon } from '@chakra-ui/icons';
import { MenuIcon } from 'app/components/NavBar/MenuIcon';

export default function Home() {
  return (
    <>
      <Wrapper style={{ backgroundColor: '#183380', color: 'white' }}>
        <PageWrapper
          style={{
            display: 'flex',
            paddingTop: '11px',
            paddingBottom: '11px',
          }}
        >
          <Flex
            style={{ width: '100%', justifyContent: 'space-between' }}
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              '2xl': 'row',
            }}
          >
            <Box d="flex">
              <Logo />
              <Search />
            </Box>
            <Box d="flex">
              <Menu iconUrl={<TimeIcon />} Icontext="Explore" />
              <Menu iconUrl={<TimeIcon />} Icontext="Bookmarks" />
              <Menu iconUrl={<TimeIcon />} Icontext="Start writing" />
              <MenuIcon iconUrl={<SettingsIcon />} />
              <MenuIcon iconUrl={<SettingsIcon />} />
              <MenuIcon iconUrl={<SettingsIcon />} />
            </Box>
          </Flex>
        </PageWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif;
  font-size: 16px;

  ${PageWrapper} {
    display: flex;
    align-items: center;
  }
`;
