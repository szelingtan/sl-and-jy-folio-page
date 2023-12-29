// app/page.tsx (comment)
// white words displayed to my user (line 30)
'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading, Image, Box, Input } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Flex, Spacer } from '@chakra-ui/react'
import {EmailIcon} from '@chakra-ui/icons'
import { Select, Container, Center, Square, IconButton } from '@chakra-ui/react' //can put in line 4 too
import { Stack, HStack, VStack, extendTheme, Textarea, StackDivider, GridItem, Grid} from '@chakra-ui/react'


export default function Page() {
  return (
    <ChakraProvider> 
    <VStack spacing = "10px">
    <Box bg='white' w='100%' p={2} color='white'>
    </Box>

    <Image
    width='200px'
    objectFit='fill'
    src='data:image/png;base64,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'
    alt='NUSCOLLEGE'
    />
    
    <VStack spacing = "25px">
    <Card
         direction={{ base: 'column', sm: 'row' }}
         overflow='hidden'
         variant='outline'
         size = 'sm'
         width = '900px'
         bg = '#1F407B'
       >    
       <CardBody>
         <HStack spacing='119'>
           <Button size='xs' color='white' variant='link'> Interest Groups </Button>
           <Button size='xs' color='white' variant='link'> Spaces </Button>
           <Button size='xs' color='white' variant='link'> Events </Button>
           <Button size='xs' color='white' variant='link'> Houses </Button>
           <Button size='xs' color='white' variant='link'> NOW! </Button>
           <Button size='xs' color='white' variant='link'> Folio </Button>
         </HStack>
       </CardBody>
     </Card>
    

      <Heading size='sm'>Create New Entry</Heading>
    
      <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size = 'sm'
          width = '700px'
          bg = 'AliceBlue'
        >
          <Image
            objectFit='fill'
            maxW={{ base: '100%', sm: '550px' }}
            src='data:image/png;base64,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'
            alt='NUSC'
          />

          <Stack> 
            <CardBody>
              <Heading size='xs'>Module Code:</Heading>
              <Select placeholder='Select option' bg = 'white' size='xs'>
                <option value='option1'>NSW2001</option>
                <option value='option2'>NSW2002</option>
                <option value='option3'>NSW2003</option>
              </Select>

            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue' size='xs'>
                Confirm Module
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size='sm'
          width = '700px'
          bg = 'AliceBlue'
        >
          <Image
            objectFit='fill'
            maxW={{ base: '100%', sm: '550px' }}
            src='data:image/png;base64,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'
            alt='NUSC'
          />

          <Stack> 
            <CardBody>
              <Heading size='xs'>Instructor:</Heading>
              <Select placeholder='Select option' bg = 'white' size='xs'>
                <option value='option1'>Dr Alberto Perez Pereiro</option>
                <option value='option2'>Dr Bjorn Gomez</option>
                <option value='option3'>Dr Chanad Somaiah</option>
                <option value='option4'>Dr Cheng Yi'En</option>
                <option value='option5'>Dr Hanisah Sani</option>
                <option value='option6'>Dr Lee Chee Keng</option>
              </Select>

            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue' size='xs'>
                Select instructor
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size='sm'
          width = '700px'
          bg = 'AliceBlue'
        >
          <Image
            objectFit='fill'
            maxW={{ base: '100%', sm: '550px' }}
            src='data:image/png;base64,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'
            alt='NUSC'
          />

          <Stack> 
            <CardBody>
              <Heading size='xs'>Annual Year:</Heading>
              <Select placeholder='Select option' bg = 'white' size='xs'>
                <option value='option1'>2018</option>
                <option value='option2'>2019</option>
                <option value='option3'>2020</option>
                <option value='option4'>2021</option>
                <option value='option5'>2022</option>
                <option value='option6'>2023</option>
              </Select>

            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue' size='xs'>
                Select instructor
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size = 'sm'
          width = '700px'
          bg = 'AliceBlue'
        >
          <Image
            objectFit='fill'
            maxW={{ base: '100%', sm: '550px' }}
            src='data:image/png;base64,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'
            alt='NUSC'
          />

          <Stack> 
            <CardBody>
              <Heading size='xs'>Semester:</Heading>
              <Select placeholder='Select option' bg = 'white' size='xs'>
                <option value='option1'>Semester 1</option>
                <option value='option2'>Semester 2</option>
                <option value='option3'>Special Term</option>
              </Select>

            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue' size='xs'>
                Select Semester
              </Button>
            </CardFooter>
          </Stack>
        </Card>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size = 'sm'
          width = '700px'
          bg = 'AliceBlue'
        >

          <HStack spacing='40px'> 
            <CardBody>
              <Heading size='xs'>Student Name:</Heading> 

            </CardBody>

            <CardFooter>
            <Input placeholder='Type in name' size='sm' variant='outline' bg='white' width='300px' /> 
            </CardFooter>
          </HStack>
        </Card>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size = 'sm'
          width = '700px'
          bg = 'AliceBlue'
        >

          <HStack spacing='115px'> 
            <CardBody>
              <Heading size='xs'>Title:</Heading> 

            </CardBody>

            <CardFooter>
            <Input placeholder='Type in title' size='sm' variant='outline' bg='white' width = '300px' /> 
            </CardFooter>
          </HStack>
        </Card>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size = 'sm'
          width = '700px'
          bg = 'AliceBlue'
        >

          <HStack spacing='65px'> 
            <CardBody>
              <Heading size='xs'>Comments:</Heading> 

            </CardBody>

            <CardFooter>
            <Textarea placeholder='Type in comments' size='sm' variant='outline' bg='white' width = '300px' /> 
            </CardFooter>
          </HStack>
        </Card>

        <Card
         direction={{ base: 'column', sm: 'row' }}
         overflow='hidden'
         variant='outline'
         size = 'md'
         width = '900px'
         bg = '#1F407B'
         
       >    
       <CardBody>

       <Flex color='white'>
          <Center w='150px'>
            
            <VStack spacing='3'>
              <Heading size='sm'>Navigate</Heading>
              <Button size='xs' color='white' variant='link'> About Us </Button>
              <Button size='xs' color='white' variant='link'> Interest Groups </Button>
              <Button size='xs' color='white' variant='link'> Bookings </Button>
              <Button size='xs' color='white' variant='link'> Events </Button>
              <Button size='xs' color='white' variant='link'> Activities </Button>
            </VStack>
            
          </Center>

          <Center w='400px'>
              
                <VStack spacing='3'>
                <Heading size='sm'>For more updates, follow us at</Heading>
                <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Send email'
                  icon={<EmailIcon />}
                />
                <Button size='xs' color='white' variant='link'> About Us </Button>
                <Button size='xs' color='white' variant='link'> Interest Groups </Button>
                <Button size='xs' color='white' variant='link'> Events </Button>
                </VStack>
              
          </Center>
          
          <Center w ='300px'>
          <VStack spacing='5'>
            <Heading size='sm'>Locate us:</Heading> 
            <Image
            objectFit='fill'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://www.google.com/maps/vt/data=omJ7fkg6uS1_lKPVh1UW1zYj7KLC2iYdfNsHBRyAHUBXPpre3H_EHxtNnPp3e4A1vWYlhwnoxE9Y-s0Qf9vrgb7U-pBFDvsbDrvRfjd_fK4yzvRNsYK2XkLJhQE0E1XOT2dWTgRgX0ujTAAEH1b_1VYfd0TOZ56pe2mLDUQFvDxVPVBb93lnoVDNPoOs0o2UwQlgiL5Z8hhi8xVF8EVxRe7Z6DTqwbYXysZc1_7ub_57bh2Crs7wOhOLS7-w87CiG9mEFxMeTmOGA4xyZsa0w0d3ejLvkKF77pCkWRJuTj5-u0q0nd_AMN-NPoWncFEVRJASLvBcWfk'
            alt='NUSC'
          /> 
          </VStack>
          </Center>     
        </Flex>
         
       </CardBody>
     </Card>

        

      </VStack>
      </VStack>

        <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
        </Link>

    </ChakraProvider> //closing tag - everything must go here
    
  )
}