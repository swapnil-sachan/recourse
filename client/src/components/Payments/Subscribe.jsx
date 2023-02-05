import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react';

const Subscribe = () => {
  return (
    <Container height="90vh" padding={"16"} >
      <Heading children="Welcome!" marginY={"8"} textAlign="center" />

      <VStack 
        boxShadow={"lg"} 
        alignItems="stretch" 
        borderRadius={"lg"} 
        spacing="0"
      >
        <Box
          bg={"yellow.400"} 
          padding="4"
          css={{borderRadius: "8px 8px 0 0"}}
        >
          <Text color={"black"} children="Pro Pack - ₹299" />
        </Box>

        <Box padding={"4"}>
          <VStack textAlign={"center"} paddingX="8" marginTop={"4"} spacing="8">
            <Text
              children={"Join Pro pack and gain access to all premium content."}
            />

            <Heading size={"md"} children={"₹ 299 only /-"} />
          </VStack>

          <Button marginY="8" width={"full"} colorScheme="yellow">
            Buy Now
          </Button>
        </Box>

        <Box
          bg={"blackAlpha.600"}
          padding="4"
          css={{borderRadius: "0 0 8px 8px"}}
        >
          <Heading
            color={"white"}
            size={"sm"}
            children={"100% refund at cancellation"}
          />

          <Text
            fontSize={"xs"}
            color={"white"}
            children="*Terms & Conditions Apply"
          />
        </Box>

      </VStack>
    </Container>
  )
}

export default Subscribe