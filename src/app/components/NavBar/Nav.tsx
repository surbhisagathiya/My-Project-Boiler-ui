import { Text } from '@chakra-ui/react';
import * as React from 'react';
// import styled from 'styled-components/macro';

interface navProps {
  title: string;
}

type Props = navProps;

const Nav: React.FC<Props> = props => (
  <Text textAlign="center" w="80%" fontWeight="bold" letterSpacing={1}>
    {props.title}
  </Text>
);

export default Nav;
