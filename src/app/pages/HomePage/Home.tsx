// import { PageWrapper } from 'app/components/PageWrapper';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNav from './HomeNav';
import img1 from '../../../images/img1.png';
import { Box, Heading, Text } from '@chakra-ui/react';
import { ChevronRightIcon, DragHandleIcon } from '@chakra-ui/icons';
import Card from 'app/components/HomePage/Card';
import { Footer } from 'app/components/Footer';

export function Home() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <HomeNav />
      <Box mr="80px" ml="80px" bg="white">
        <Box>
          <Box
            d="flex"
            mt={38}
            justifyContent="space-between"
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              '2xl': 'row',
            }}
          >
            <Heading as="h4" fontSize={24} fontWeight="normal" opacity={0.9}>
              <b>Hi, Fannie </b>here is a personalized feed for you…
            </Heading>
            <Text
              fontWeight="normal"
              fontSize={18}
              opacity={0.4}
              my="auto"
              fontStyle="italic"
            >
              suggested by your personal interest
            </Text>
          </Box>
          <Box mt={33}>
            <Text fontSize={18} color="#b7bac2" fontWeight="bold">
              You are intrested to read…
            </Text>
          </Box>
        </Box>
        {/* 1 row */}
        <Box
          d="flex"
          justifyContent="space-between"
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        >
          <Box
            // w="49%"
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '49%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '49%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="10 tough practice questions and great sample responses"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
        </Box>
        {/* 2 row */}
        <Box
          d="flex"
          justifyContent="space-between"
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        >
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="10 tough practice questions and great sample responses"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Can a shampoo bottle save infant lives? Bangladesh is proving it"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="10 tough practice questions and great sample responses"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
        </Box>
        {/* 3 row */}
        <Box
          d="flex"
          justifyContent="space-between"
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        >
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '69%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="If you got pitched for investment 200 times per week, you might miss a good one too. Or you might discover Facebook"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '29%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="10 tough practice questions and sample responses"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
        </Box>
      </Box>
      {/* 4 row */}
      <Box backgroundColor="#e4f9f6" pl="80px" pr="80px" pb="40px" mt="50px">
        <Box
          d="flex"
          pt={8}
          justifyContent="space-between"
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        >
          <Text fontWeight="bold" color="#20cdbb" fontSize={17}>
            Rayft recommended articles
          </Text>
          <Text fontSize={14} opacity={0.2} color="#242a41" my="auto">
            View more
            <ChevronRightIcon />
          </Text>
        </Box>
        <Box
          d="flex"
          justifyContent="space-between"
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        >
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
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
      {/* 5 row */}
      <Box backgroundColor="#f7f8fa" pl="80px" pr="80px" pb="40px">
        <Box d="flex" pt={8} justifyContent="space-between">
          <Box d="flex">
            <Text fontWeight="bold" opacity={0.2} fontSize={17} mr={1.5}>
              Because you are following
            </Text>
            <Text fontWeight={800}>Business</Text>
          </Box>
          <Text fontSize={14} opacity={0.2} color="#242a41" my="auto">
            <DragHandleIcon />
          </Text>
        </Box>
        {/* 3 row */}
        <Box
          d="flex"
          justifyContent="space-between"
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        >
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '69%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '29%', // 62em+
            ]}
          >
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
        {/* 2 row */}
        <Box
          d="flex"
          justifyContent="space-between"
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
        >
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
            <Card
              imageSrc={img1}
              imageAlt="img1"
              imgTitle="Modern home in city center in the heart of historic Los Angeles"
              imageName="Floyd West"
              imgDate="23 Mar"
              imgTime="4 min read"
            />
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '100%', // 30em-48em
              '100%', // 48em-62em
              '32%', // 62em+
            ]}
          >
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
      <Footer />
    </>
  );
}
