import { Card } from 'app/components/HomePage/Card';
// import { PageWrapper } from 'app/components/PageWrapper';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNav from './HomeNav';
import img1 from '../../../images/img1.png';
import { Box } from '@chakra-ui/react';

export function Home() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <HomeNav />
      <Box mr="80px" ml="80px">
        <Box d="flex" justifyContent="space-between">
          <Box w="49%">
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box w="49%">
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
        </Box>
        <Box d="flex" justifyContent="space-between">
          <Box w="32%">
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box w="32%">
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box w="32%">
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
        </Box>
        <Box d="flex" justifyContent="space-between">
          <Box w="69%">
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box w="29%">
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
