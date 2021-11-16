import Head from "next/head";
import Link from "next/link";

// import Image from "next/image";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import {
  Box,
  Heading,
  Flex,
  Button,
  Text,
  Center,
  Image,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function SignUp() {
  return (
    <Box w="100%" minH="100vh" bg="red" p="0rem 0rem 8rem 0rem" bg="gray.100">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Gradient decoration */}
      <Box
        p="1rem"
        background=" linear-gradient(43deg, rgba(132,94,194,1) 0%, rgba(214,93,177,1) 20%, rgba(255,111,145,1) 40%, rgba(255,150,113,1) 60%, rgba(255,199,95,1) 80%, rgba(249,248,113,1) 100%)"
      ></Box>

      {/* Nav bar */}
      <Box d="flex" justifyContent="center" w="100%" margin="0 auto" bg="white">
        <Flex
          maxW="100rem"
          w="100%"
          justifyContent={"right"}
          alignItems="center"
          p="1rem 2rem"
        >
          <Link href="/">

          <Image
            cursor={"pointer"}
            w="48px"
            h="55px"
            src="/2022_logo.png"
            style={{ marginRight: "auto" }}
          />
          </Link>


          <Text color="gray.800" fontWeight={"semibold"} mr="2rem">
            About Us
          </Text>
          <Text color="gray.800" fontWeight={"semibold"} mr="2rem">
            Events
          </Text>
          <Button
            color="white"
            borderColor="#ff6f91"
            variant={"outline"}
            color="#ff6f91"
            mr="2rem"
          >
            Contact Us
          </Button>
          <Button color="white" bg="#ff6f91" _hover={{ background: "#ee4e74" }}>
            Sign Up
          </Button>
        </Flex>
      </Box>

      {/* Sign up form */}
      <Box as="form" width="100%" maxW="40rem" bg="white" m="4rem auto" p="2rem" borderRadius={"0.5rem"}>
        <Heading fontWeight={"semibold"} fontSize={"2rem"}>Sign Up</Heading>
        <Text color="gray.500" mt="0.25rem">We just need a little bit of info.</Text>
      </Box>
    </Box>
  );
}
