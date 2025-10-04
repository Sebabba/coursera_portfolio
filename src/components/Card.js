import { Heading, HStack, Image, Text, VStack, Box, Link, textDecoration } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      <VStack bg="white">
        <Image src={imageSrc} alt={title} key={title} />
        <Box p={5} color="black">
          <Heading fontSize='xl'>{title}</Heading>
          <Text mt={4} mb={4}>{description}</Text>
          <Link href="#" textDecoration="none" _hover={{textDecoration: "none"}}>
            <Text as="b">See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
          </Link>
        </Box>
      </VStack>
    </>
  );
};

export default Card;
