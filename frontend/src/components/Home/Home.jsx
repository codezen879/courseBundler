import React from 'react'
import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './home.css'
import bgroundImage from "../../assets/images/real.png"
import{CgGoogle,CgYoutube} from "react-icons/cg"
import{SiCoursera,SiUdemy} from "react-icons/si"
import{DiAws} from "react-icons/di"
function Home() {
  return (
    <section className='home'>
      <div className='container'>
        <Stack direction={["column","row"]}
          height="100%"
          justifyContent={["center","space-between"]}
          alignItems="center"
          spacing={['16','15']}
        >
        <VStack width={"full"} alignItems={['center','flex-end']}>
          <Heading children="Learn From The Experts" size={'2xl'}/>
          <Text children='Find Valueable Content At Reasonable Price'/>
          <Link to="/courses">
          <Button size={"lg"} colorScheme='yellow'>
            Explore Now
          </Button>
          </Link>
        </VStack>
        <Image className='vector-graphics' boxSize={"md"} src={bgroundImage} objectFit="contain"/>
        </Stack>
      </div>
      <Box padding={'8'} bg="grey">
        <Heading textAlign={"center"} children="Our Brands" />
        <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"4"}>
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>

        </HStack>
      </Box>
      
        <div className="container2">
          <video autoPlay controls 
          controlsList='nodownload nofillscreen noremoteplayback' 
          disablePictureInPicture
          disableRemotePlayback
          src={"IntroVideo"}
          ></video>
        </div>
      
    </section>
  )
}

export default Home