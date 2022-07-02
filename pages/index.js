import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbGetir from '../public/images/works/getir.png'
import thumbCrypto from '../public/images/works/crypto.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a frontend developer based in Turkey!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Furkan Can Zirek
          </Heading>
          <p>A software developer in love with frontend development.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/furkan.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who am i ?
        </Heading>
        <Paragraph>
          I am a software developer who interests with Javascript, React.js,Vue.js
          and other Frontend technologies. I have a personality that likes research,
          open to learning and interests in new technologies.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://codepen.io/furkancanzirek/full/wvPoLRJ"
            title="Getir Clone App"
            thumbnail={thumbGetir}
          >
            Getir Clone App on Codepen
          </GridItem>
          <GridItem
            href="https://crypto-currency-tracking-f9r3vt2na-furkancanzirek.vercel.app/"
            title="Crypto Currency App"
            thumbnail={thumbCrypto}
          >
            Crypto Currency Demo App (Under development )
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              All Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
