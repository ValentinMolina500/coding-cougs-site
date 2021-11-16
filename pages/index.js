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
import TextTransition, { presets } from "react-text-transition";

import { ArrowForwardIcon } from "@chakra-ui/icons";

const TEXTS = [
  `printf("Hello, world!");`,
  `print "Hello, world!"`,
  `std::cout << "Hello, world!";`,
  `console.log("Hello, world!")`,
];

export default function Home() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box w="100%" minH="100vh"  p="0rem 0rem 8rem 0rem" bg="white">
      {/* Add custom font */}
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

      <Box
        p="1rem"
        background=" linear-gradient(43deg, rgba(132,94,194,1) 0%, rgba(214,93,177,1) 20%, rgba(255,111,145,1) 40%, rgba(255,150,113,1) 60%, rgba(255,199,95,1) 80%, rgba(249,248,113,1) 100%)"
      ></Box>
      {/* Nav bar */}

      <Box w="100%" maxW="100rem" margin="0 auto" bg="white">
        <Flex justifyContent={"right"} alignItems="center" p="1rem 2rem">
          <Image
            w="48px"
            h="55px"
            src="/2022_logo.png"
            style={{ marginRight: "auto" }}
          />

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

      <Grid
        gridTemplateRows="45rem"
        pos="relative"
        gridTemplateColumns={"1fr 1fr"}
        placeItems={"center"}
        p="0rem"
      >
        <Flex
          bg="rgba(255,111,145,0.15)"
          h="100%"
          w="100%"
          p={"4rem"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box mt="0.25rem">
            <Heading color="gray.800" fontSize="3.5rem">
              Coding Cougs
            </Heading>
            <Text mt="0.25rem">@ Washington State University Tri-Cities</Text>
            <Box mt="1rem">
              {/* OCEAN'S TODO: Add an onClick handler to open users email client (mailto:) */}

              <Link href={"/sign-up"}>
                <Button
                  color="white"
                  size="lg"
                  textAlign="center"
                  bg="#ff6f91"
                  _hover={{ background: "#ee4e74" }}
                  _active={{ background: "#ef2354" }}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
        <Box
          bg="red"
          height={"100%"}
          width={"100%"}
          backgroundImage={"temp3.jpeg"}
          backgroundSize="cover"
          backgroundPosition={"center"}
        ></Box>
      </Grid>

      <Center bg="gray.800" p="1.5rem">
        <Text>
          <TextTransition
            style={{ color: "white", fontFamily: "Source Code Pro" }}
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.stiff}
          />
        </Text>
      </Center>

      <Box w="100%" maxW="100rem" margin="0 auto" px="2rem" pt="4rem">
        <Heading mb="2rem">What We Do</Heading>
        <Grid gridTemplateColumns={"1fr 1fr 1fr"} columnGap={"2rem"}>
          <GridItem
            color="white"
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={"gray.200"}
            p="2rem"
            borderRadius={"0.5rem"}
            bg="rgba(132,94,194,1)"
          >
            <Text fontWeight={"semibold"}>Extracurricular Events</Text>
          </GridItem>
          <GridItem
            color="white"
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={"gray.200"}
            p="2rem"
            borderRadius={"0.5rem"}
            bg="rgb(255 168 6)"
          >
            <Text fontWeight={"semibold"}>Career/Internship Help </Text>
          </GridItem>
          <GridItem
            color="white"
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={"gray.200"}
            p="2rem"
            borderRadius={"0.5rem"}
            bg="rgba(255,150,113,1)"
          >
            <Text fontWeight={"semibold"}>Community Outreach </Text>
          </GridItem>
        </Grid>
      </Box>
      {/* <Box bg="#ff9671" p="8rem"></Box> */}
      {/* <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} gridTemplateRows={"25rem"}>
        <Center bg="rgba(132,94,194,1)" fontWeight={"semibold"}>
          <Text fontSize={"1.5rem"} color="white">
            Extracurricular Events
          </Text>
        </Center>
        <GridItem overflow={"hidden"}>
          <Image src="/temp1.jpg" h="100%" objectFit={"cover"} />
        </GridItem>
        <Center bg="#ff6f91" fontWeight={"semibold"}>
          <Text fontSize={"1.5rem"} color="white">
              Community Outreach
          </Text>
        </Center>
        <GridItem overflow={"hidden"}>
          <Image src="/temp1.jpg" h="100%" objectFit={"cover"} />
        </GridItem>
      </Grid> */}

      {/* <Box w="100%" maxW="100rem" margin="0 auto" p="2rem">
        <Stack>
          <Heading>About the Coding Cougs</Heading>
          <Text>The Coding Cougs are a programming club.</Text>
        </Stack>
      </Box> */}
    </Box>
  );
}
