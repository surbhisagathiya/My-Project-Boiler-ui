import { Box } from '@chakra-ui/react';
import { Logo } from 'app/components/NavBar/Logo';
import { Menu } from 'app/components/NavBar/Menu';
import { Search } from 'app/components/NavBar/Search';
// import { PageWrapper } from 'app/components/PageWrapper';
import * as React from 'react';
// import styled from 'styled-components/macro';
// import { StyleConstants } from 'styles/StyleConstants';
import { TimeIcon, SettingsIcon } from '@chakra-ui/icons';
import { MenuIcon } from 'app/components/NavBar/MenuIcon';

export default function HomeNav() {
  return (
    <>
      {/* <Wrapper style={{ backgroundColor: '#183380', color: 'white' }}>
        <PageWrapper
          style={{
            display: 'flex',
            paddingTop: '11px',
            paddingBottom: '11px',
            width: '100%',
            justifyContent: 'space-between',
          }}
        > */}
      <Box
        d="flex"
        w="100%"
        backgroundColor="#183380"
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        color="white"
        justifyContent="space-between"
        py={['5px', '5px', '0px']}
      >
        <Box>
          <Box
            d="flex"
            w="100%"
            align={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
              xl: 'center',
            }}
          >
            <Logo />
            <Search />
          </Box>
        </Box>
        <Box style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <Box
            d="flex"
            mr={[0, 0, '5px', '8px', '10px', '60px']}
            w="100%"
            // my='auto'
          >
            <Menu iconUrl={<TimeIcon />} Icontext="Explore" />
            <Menu iconUrl={<TimeIcon />} Icontext="Bookmarks" />
            <Menu iconUrl={<TimeIcon />} Icontext="Start writing" />
            <MenuIcon iconUrl={<SettingsIcon />} />
            <MenuIcon iconUrl={<SettingsIcon />} />
            <MenuIcon iconUrl={<SettingsIcon />} />
          </Box>
        </Box>
      </Box>
      {/* </PageWrapper>
      </Wrapper> */}
    </>
  );
}

// const Wrapper = styled.header`
//   box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
//   height: ${StyleConstants.NAV_BAR_HEIGHT};
//   display: flex;
//   /* position: fixed; */
//   top: 0;
//   width: 100%;
//   font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif;
//   font-size: 16px;

//   ${PageWrapper} {
//     display: flex;
//     align-items: center;
//   }
// `;
