import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { fileUploadCSS } from "../../assets/fileUploadCSS";

const Register = () => {
  const [name, setName] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fileUploadStyle = {
    "&::file-selector-button": fileUploadCSS
  }

  const changeImageHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    }
  }

  return (
    <Container h={"95vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children={"Register on reCourse"} />

        <form style={{width: "100%"}}>
          <Box marginY={"4"} display={"flex"} justifyContent={"center"} >
            <Avatar src={imagePrev} size={"2xl"} />
          </Box>
          
          <Box marginY={"4"}>
            <FormLabel htmlFor="name" children="Name" />
            <Input 
              required 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              type={"text"}
              focusBorderColor={"yellow.500"}
            />
          </Box>
          
          <Box marginY={"4"}>
            <FormLabel htmlFor="email" children="Email address" />
            <Input 
              required 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@gmail.com"
              type={"email"}
              focusBorderColor={"yellow.500"}
            />
          </Box>
          
          <Box marginY={"4"}>
            <FormLabel htmlFor="password" children="Password" />
            <Input 
              required 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password here"
              type={"password"}
              focusBorderColor={"yellow.500"}
            />
          </Box>
          
          <Box marginY={"4"}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input 
              accept="image/*"
              required 
              id="password"
              type={"file"}
              focusBorderColor={"yellow.500"}
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
      
          <Button marginY={"4"} colorScheme={"yellow"} type="submit">
            Sign Up
          </Button>

          <Box marginY={"4"}>
            Already a user? {" "}
            <Link to="/register">
              <Button variant="link" colorScheme={"yellow"}>
                Log in
              </Button>
            </Link>
            {" "} here!
          </Box>
        </form>
      </VStack>
    </Container>
  )
}

export default Register