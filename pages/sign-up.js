import Head from "next/head";
import Link from "next/link";
import { db } from "../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";

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
  Select,
  useToast
} from "@chakra-ui/react";

export default function SignUp() {

  const [inputFirstName, setInputFirstName] = useState('')
  const [inputLastName, setInputLastName] = useState('')
  const [inputPrefName, setInputPrefName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMajor, setInputMajor] = useState('')
  const signUpCollectionRef = collection(db, "Sign Up Information")
  const toast = useToast()

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

  const submitHandler = async (event) => {
    event.preventDefault();
    const signUpDataSnapshot = await getDocs(signUpCollectionRef)
    const signUpList = signUpDataSnapshot.docs.map(doc => doc.data())
    const signUpListEmails = []

    for (let i = 0; i < signUpList.length; i++) {
      signUpListEmails.push(signUpList[i].wsuEmail);
    }

    const userSignUpData = {
      firstName: inputFirstName,
      lastName: inputLastName,
      preferredName: inputPrefName,
      wsuEmail: inputEmail.toLowerCase(),
      major: inputMajor
    }

    // check whether the user input email exists in the database
    if (signUpListEmails.includes(userSignUpData.wsuEmail) === false) {
      await addDoc(signUpCollectionRef, userSignUpData);

      toast({
        title: 'Success',
        description: "Thank you for signing up!",
        position: 'bottom',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      setInputFirstName('')
      setInputLastName('')
      setInputPrefName('')
      setInputEmail('')
      setInputMajor('')
    } else {
      toast({
        title: 'Warning',
        description: "You have already signed up!",
        position: 'bottom',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Box w="100%" minH="100vh" p="0rem 0rem 8rem 0rem" bg="gray.200">
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

   

      {/* Nav bar */}
      <Box d="flex" justifyContent="center" w="100%" margin="0 auto" bg="white" >
        <Flex
          maxW="100rem"
          w="100%"
          justifyContent={"right"}
          alignItems="center"
          p="0.5rem 1rem"
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
      <Box as="form" width="100%" maxW="40rem" bg="white" m="4rem auto" p="2rem" borderRadius={"0.5rem"} onSubmit={submitHandler} boxShadow={"xl"}>
        <Heading color="black" fontWeight={"semibold"} fontSize={"2rem"}>Sign Up</Heading>
        <Text color="gray.500" mt="0.25rem">We just need a little bit of info.</Text>
        <FormControl paddingTop="15px" id="first-name" isRequired>
          <FormLabel color="black">First Name</FormLabel>
          <Input value={inputFirstName} onChange={firstNameChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} />
        </FormControl>
        <FormControl paddingTop="15px" id="last-name" isRequired>
          <FormLabel color="black">Last Name</FormLabel>
          <Input value={inputLastName} onChange={lastNameChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} />
        </FormControl>
        <FormControl paddingTop="15px" id="preferred-name">
          <FormLabel color="black">Preferred Name</FormLabel>
          <Input value={inputPrefName} onChange={prefNameChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} />
        </FormControl>
        <FormControl paddingTop="15px" id="email" isRequired>
          <FormLabel color="black">WSU Email</FormLabel>
          <Input value={inputEmail} onChange={emailChangeHandler} borderColor="gray.500" color="black" _hover={{ background: "white" }} type="email" />
          <FormHelperText color="black">We won't sell your email ;)</FormHelperText>
        </FormControl>
        <FormControl paddingTop="15px" id="major" isRequired>
          <FormLabel color="black">Major</FormLabel>
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
