import { Box, Image } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components/macro';

export function Card({
  imageSrc,
  imageAlt,
  imgTitle,
  imageName,
  imgDate,
  imgTime,
}) {
  return (
    <Wrapper>
      {/* <Image src={imageSrc} alt={imageAlt} /> */}
      <Box borderWidth="1px" borderRadius="lg" h="300px" mt="24px">
        <Image src={imageSrc} alt={imageAlt} w="100%" h="190px" />
        <Box p="4" backgroundColor="white">
          <Box
            // mt="1"
            fontWeight="bold"
            as="h4"
            // lineHeight="tight"
            // noOfLines={1}
          >
            {imgTitle}
          </Box>

          <Box
            display="flex"
            mt="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>{imageName}</Box>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {imgDate} {imgTime}
            </Box>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  /* display: flex;
  justify-content: space-between; */
  /*font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px; */
  /* margin-top: 50px; */
  /* background-color: aliceblue; */
  /* width: 41.5em; */
`;
