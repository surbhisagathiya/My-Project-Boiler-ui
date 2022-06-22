import * as React from 'react';
// import styled from 'styled-components/macro';
// import { Input, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

export function Search() {
  return (
    <Wrapper>
      <SearchInput>
        <SearchBar
          type="text"
          placeholder="Search article, authoer, stocks, topics…"
          style={{
            fontSize: '12px',
            width: '22.5em',
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingLeft: '10px',
            borderRadius: '2px',
          }}
        ></SearchBar>
        <SearchIcon
          style={{
            marginLeft: '15.5em',
            color: 'black',
            opacity: '0.4',
            position: 'absolute',
          }}
          color="#623CEA"
          size="1.5em"
        />
      </SearchInput>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  margin-left: 24px;
  color: black;
  padding-top: '10px';
  padding-bottom: '10px';
`;

const SearchInput = styled.div`
  /* padding: 0.5rem; */
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  /* padding: 1rem 1rem 1rem 3.5rem; */
  /* width: '22.5em'; */
`;

// const Title = styled.div`
//   font-size: 1.25rem;
//   color: ${p => p.theme.text};
//   font-weight: bold;
//   margin-right: 1rem;
// `;

// const Description = styled.div`
//   font-size: 0.875rem;
//   color: ${p => p.theme.textSecondary};
//   font-weight: normal;
// `;
