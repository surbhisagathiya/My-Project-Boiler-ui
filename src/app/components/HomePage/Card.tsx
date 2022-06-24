import {
  Badge,
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { faBookmark, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
// import { Link } from 'react-router-dom';

interface cardProps {
  imageSrc: string;
  imageAlt: string;
  imgTitle: string;
  imageName: string;
  imgDate: string;
  imgTime: string;
}

type Props = cardProps;

const Card: React.FC<Props> = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [scrollBehavior, setScrollBehavior] = React.useState('inside');
  const btnref = React.useRef(null);
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" h="300px" mt="24px">
        <Box position="relative">
          <Image src={props.imageSrc} alt={props.imageAlt} w="100%" h="190px" />
          <FontAwesomeIcon
            icon={faBookmark}
            color="white"
            style={{ position: 'absolute', top: 15, right: 50 }}
            size="lg"
          />
          <FontAwesomeIcon
            icon={faEllipsisV}
            color="white"
            style={{ position: 'absolute', top: 15, right: 20 }}
            size="lg"
          />
          <Badge
            variant="outline"
            color="white"
            style={{ position: 'absolute', bottom: 10, right: 10 }}
            py="5px"
            px="12px"
            borderRadius="12px"
            border="1px solid rgba(255, 255, 255, 0.5);"
          >
            $ 0.45
          </Badge>
        </Box>
        <Box p="0.8em" backgroundColor="white">
          <Box
            fontWeight="bold"
            as="h4"
            ref={btnref}
            onClick={onOpen}
            cursor="pointer"
          >
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
        <Modal
          onClose={onClose}
          finalFocusRef={btnref}
          isOpen={isOpen}
          // scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent py={5}>
            <ModalBody>
              <Box position="relative">
                <Image
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  w="100%"
                  h="300px"
                />
                <FontAwesomeIcon
                  icon={faBookmark}
                  color="white"
                  style={{ position: 'absolute', top: 15, right: 50 }}
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  color="white"
                  style={{ position: 'absolute', top: 15, right: 20 }}
                  size="lg"
                />
                <Badge
                  variant="outline"
                  color="white"
                  style={{ position: 'absolute', bottom: 10, right: 10 }}
                  py="5px"
                  px="12px"
                  borderRadius="12px"
                  border="1px solid rgba(255, 255, 255, 0.5);"
                >
                  $ 0.45
                </Badge>
              </Box>
              <Box p="0.8em" backgroundColor="white">
                <Box fontWeight="bold" as="h4" ref={btnref} onClick={onOpen}>
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
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Card;
