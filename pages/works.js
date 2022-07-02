import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbGetir from '../public/images/works/getir.png'
import thumbCrypto from '../public/images/works/crypto.png'
import thumbMovie from '../public/images/works/movieApp.png'
import thumbBeginner from '../public/images/works/simpleProjects.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="crypto-currency-tracking-app.vercel.app"
            title="CryptoCurrency App"
            thumbnail={thumbCrypto}
          />
          <GridItem
            href="https://codepen.io/furkancanzirek/full/wvPoLRJ"
            title="GetirCloneApp"
            thumbnail={thumbGetir}
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://crypto-currency-tracking-f9r3vt2na-furkancanzirek.vercel.app/"
            title="Movie App"
            thumbnail={thumbMovie}
          />
          <GridItem
            href="https://github.com/furkancanzirek/CSS-DEMOS"
            title="Simple Projects For Beginners"
            thumbnail={thumbBeginner}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
