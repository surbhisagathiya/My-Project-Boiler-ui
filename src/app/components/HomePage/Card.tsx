import { Box, Image } from '@chakra-ui/react';
import * as React from 'react';

interface cardProps {
  imageSrc: string;
  imageAlt: string;
  imgTitle: string;
  imageName: string;
  imgDate: string;
  imgTime: string;
}

type Props = cardProps;

const Card: React.FC<Props> = props => (
  <>
    <Box borderWidth="1px" borderRadius="lg" h="300px" mt="24px">
      <Image src={props.imageSrc} alt={props.imageAlt} w="100%" h="190px" />
      <Box p="0.8em" backgroundColor="white">
        <Box fontWeight="bold" as="h4">
          {props.imgTitle}
        </Box>

        <Box
          display="flex"
          mt="2"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>{props.imageName}</Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {props.imgDate} {props.imgTime}
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default Card;
