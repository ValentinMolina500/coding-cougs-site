import Head from "next/head";
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
import Terminal from "terminal-in-react";

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
    <Box w="100%" h="100vh" bg="red" p="0rem 0" bg="white">
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

      <Box w="100%" maxW="100rem" margin="0 auto">
        {/* Nav bar */}
        <Flex justifyContent={"right"} alignItems="center" p="1rem">
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
          <Button color="white" bg="#ff6f91">
            Sign Up
          </Button>
        </Flex>
      </Box>

      <Grid
        gridTemplateRows="45rem"
        pos="relative"
        placeItems={"center"}
        p="0rem"
      >
        <Box pos="absolute" w="100%" h="100%" overflow={"hidden"} zIndex={0}>
          <Box w="100%" h="100%" pos="relative">
            <Particles
              id="tsparticles"
              options={{
                fullScreen: false,
                fpsLimit: 60,
                //  rgba(132,94,194,1) 0%, rgba(214,93,177,1) 20%, rgba(255,111,145,1) 40%, rgba(255,150,113,1) 60%, rgba(255,199,95,1) 80%, rgba(249,248,113,1) 100%);
                particles: {
                  color: {
                    value: ["rgba(132,94,194,1)", "rgba(214,93,177,1)", "rgba(255,111,145,1)", "rgba(255,150,113,1)", "rgba(255,199,95,1)", "rgba(249,248,113,1)"],
                  },
                  links: {
                    color: "#111",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value:100,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "polygon",
                    options: {
                      polygon: [ { sides: 6 }]
                    }
                  },
                  size: {
                    random: true,
                    value: 8,
                  },
                },
                detectRetina: true,
                
              }}
            />
          </Box>
        </Box>
            
        <Flex
          bg="rgba(255, 255, 255, 1)"
          h="max-content"
          p={"2rem"}
          zIndex={"1"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          // borderRadius={"100%"}
        >
          <Box mt="0.25rem" textAlign={"center"}>
            <Heading color="gray.800" fontSize="3.5rem">
              Coding Cougs
            </Heading>
            <Text color="gray.600" mt="0.25rem">
              @ Washington State University Tri-Cities
            </Text>
            <Box mt="2rem">
              <Button
                size="lg"
                borderColor="#ff6f91"
                variant="outline"
                color="#ff6f91"
              >
                Contact Us
              </Button>
              <Button
                color="white"
                ml="1rem"
                size="lg"
                textAlign="center"
                bg="#ff6f91"
                rightIcon={<ArrowForwardIcon />}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Flex>
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
      {/* <Box bg="#ff9671" p="8rem"></Box> */}
      <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} gridTemplateRows={"25rem"}>
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
      </Grid>

      <Box w="100%" maxW="100rem" margin="0 auto" p="2rem">
        <Stack>
          <Heading>About the Coding Cougs</Heading>
          <Text>The Coding Cougs are a programming club.</Text>
        </Stack>
      </Box>
    </Box>
  );
}
