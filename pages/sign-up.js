import Head from "next/head";
import Link from "next/link";
//import "../styles/sign-up.css"

import {
  Box,
  Heading,
  Flex,
  Button,
  Text,
  Image,
  Grid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select
} from "@chakra-ui/react";

export default function SignUp() {

  const [inputFirstName, setInputFirstName] = useState('')
  const [inputLastName, setInputLastName] = useState('')
  const [inputPrefName, setInputPrefName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMajor, setInputMajor] = useState('')

  const firstNameChangeHandler = (event) => {
    setInputFirstName(event.target.value)
  };

  const lastNameChangeHandler = (event) => {
    setInputLastName(event.target.value)
  }

  const prefNameChangeHandler = (event) => {
    setInputPrefName(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value)
  }

  const majorChangeHandler = (event) => {
    setInputMajor(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const userSignUpData = {
      firstName: inputFirstName,
      lastName: inputLastName,
      preferredName: inputPrefName,
      wsuEmail: inputEmail,
      major: inputMajor
    }

    console.log(userSignUpData)

    setInputFirstName('')
    setInputLastName('')
    setInputPrefName('')
    setInputEmail('')
    setInputMajor('')
  }

  return (
    <Box w="100%" minH="100vh" p="0rem 0rem 8rem 0rem" bg="gray.100">
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
            color="#ff6f91"
            borderColor="#ff6f91"
            variant={"outline"}
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
      <Box as="form" width="100%" maxW="40rem" bg="white" m="4rem auto" p="2rem" borderRadius={"0.5rem"} onSubmit={submitHandler}>
        <Heading color="black" fontWeight={"semibold"} fontSize={"2rem"}>Sign Up</Heading>
        <Text color="gray.500" mt="0.25rem">We just need a little bit of info.</Text>
        <FormControl paddingTop="15px" id="first-name" isRequired>
          <FormLabel color="black">First Name</FormLabel>
          <Input value={inputFirstName} onChange={firstNameChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} placeholder="First name" />
        </FormControl>
        <FormControl paddingTop="15px" id="last-name" isRequired>
          <FormLabel color="black">Last Name</FormLabel>
          <Input value={inputLastName} onChange={lastNameChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} placeholder="Last name" />
        </FormControl>
        <FormControl paddingTop="15px" id="preferred-name">
          <FormLabel color="black">Preferred Name</FormLabel>
          <Input value={inputPrefName} onChange={prefNameChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} placeholder="Last name" />
        </FormControl>
        <FormControl paddingTop="15px" id="email" isRequired>
          <FormLabel color="black">WSU Email</FormLabel>
          <Input value={inputEmail} onChange={emailChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} type="email" />
          <FormHelperText color="black">We won't sell your email ;)</FormHelperText>
        </FormControl>
        <FormControl paddingTop="15px" id="major">
          <Select value={inputMajor} onChange={majorChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} placeholder="Select Major">
            <option>Computer Science</option>
            <option>Math</option>
          </Select>
        </FormControl>
        <Button
          mt={4}
          textColor="white"
          bg="#ff6f91"
          _hover={{ background: "#ee4e74" }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
