import { Box, Flex } from '@chakra-ui/react';
import { Logo } from 'app/components/NavBar/Logo';
import { Menu } from 'app/components/NavBar/Menu';
import { Search } from 'app/components/NavBar/Search';
import { PageWrapper } from 'app/components/PageWrapper';
import { Card } from 'app/components/HomePage/Card';
// import { PageWrapper } from 'app/components/PageWrapper';

export function Home() {
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
              lg: 'column',
              xl: 'column',
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
