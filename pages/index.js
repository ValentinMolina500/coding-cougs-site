import Head from "next/head";
import Link from "next/link";
import Ticker from "react-ticker";

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
  Divider,
  Lorem,
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
    <Box w="100%" minH="100vh" p="0rem 0rem 8rem 0rem" bg="white">
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
            borderColor="#ff6f91"
            variant={"outline"}
            color="#ff6f91"
            mr="2rem"
          >
            Contact Us
          </Button>
          <Link href="/sign-up">
            <Button
              color="white"
              bg="#ff6f91"
              _hover={{ background: "#ee4e74" }}
            >
              Sign Up
            </Button>
          </Link>
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
            <Text textColor="black" mt="0.25rem">@ Washington State University Tri-Cities</Text>
            <Box mt="1rem">
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
        <Heading mb="0.5rem">Who Are We </Heading>
        <Grid gridTemplateColumns={"1fr 1fr"}>
          <Text lineHeight={"2"} mb="2rem" fontSize={"1.25rem"}>
            The Coding Cougs are the premier programming club hosted through
            Washington State University Tri-Cities. We welcome anyone from any
            major interested in computers and programming
          </Text>
        </Grid>

        <Heading mb="1rem">What We Do</Heading>
        <Grid gridTemplateColumns={"1fr 1fr"}>
          <GridItem>
            <Heading fontSize="1.5rem" fontWeight={"semibold"}>
              Extracurricular Events
            </Heading>
            <Text lineHeight={"2"} mb="2rem" fontSize={"1rem"}>
              The Coding Cougs are the premier programming club hosted through
              Washington State University Tri-Cities. We welcome anyone from any
              major interested in computers and programming
            </Text>
          </GridItem>
        </Grid>

        <Grid gridTemplateColumns={"1fr 1fr"}>
          <GridItem gridColumn={"2"}>
            <Heading fontSize="1.5rem" fontWeight={"semibold"}>
              Career/Internship Help
            </Heading>
            <Text lineHeight={"2"} mb="2rem" fontSize={"1rem"}>
              The Coding Cougs are the premier programming club hosted through
              Washington State University Tri-Cities. We welcome anyone from any
              major interested in computers and programming
            </Text>
          </GridItem>
        </Grid>

        <Grid gridTemplateColumns={"1fr 1fr"}>
          <GridItem gridColumn={"1"}>
            <Heading fontSize="1.5rem" fontWeight={"semibold"}>
              Community Outreach
            </Heading>
            <Text lineHeight={"2"} mb="2rem" fontSize={"1rem"}>
              The Coding Cougs are the premier programming club hosted through
              Washington State University Tri-Cities. We welcome anyone from any
              major interested in computers and programming
            </Text>
          </GridItem>
        </Grid>

        <Divider mb="2rem" />
          <Ticker>
            {({ index }) => (
              <>
                <Flex alignItems={"center"}>
                  <Image   height="10rem"  src="./pnnl-min.png" mr="4rem" />
                  <Image
                    src="./hmis.svg"
                    height="8rem" 
                    alt="The Hanford Mission Intelligence Agency logo"
                    mr="4rem"
                  />
                   <Image
                    src="./google.svg"
                    height="15rem" 
                    mr="4rem"
                  />
                  <Image src="./enw.svg"      height="8rem" 
                    mr="4rem" />
                  {/* <p>this is index {index}</p> */}
                  <Image src="./wrps.png" height="8rem" />
                </Flex>

              
              </>
            )}
          </Ticker>
          <Divider  mt="2rem" />
       
      </Box>
    </Box>
  );
}
