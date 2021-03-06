import React, { FunctionComponent } from 'react';
import { Box, Container, Heading, HStack, Tag, Text } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Header, Layout } from '@/components/common';
import { StringUtil } from '@/utils';

const shibaImage = './../../static/images/posts/202205/2f7771ce0890332c248a4b48be2e2f05.jpeg';
const yeppyImage = './../../static/images/posts/202205/KakaoTalk_Photo_2022-05-23-18-13-27.jpeg';
const tags = ['jeju', 'php', 'typescript', 'web game', 'phaser', 'roblox'];

const AboutPage: FunctionComponent = () => {
  const title = 'Yeppyshiba is...';

  return (
    <Layout title={title}>
      <Header title={title} />
      <Container maxW={'7xl'} p={'12'} textAlign={'center'}>
        <Box my={8}>
          <Heading as={'h2'}>μ°λ¦¬λ!</Heading>
          <HStack
            mx={'auto'}
            my={8}
            maxW={'xs'}
            position={'relative'}
            _before={{
              content: '"π"',
              position: 'absolute',
              width: '100%',
              zIndex: 1,
              fontSize: '7xl'
            }}
          >
            <Box width={'50%'} borderRadius={'full'} overflow={'hidden'} boxShadow={'2xl'}>
              <StaticImage src={shibaImage} alt={''} layout={'fullWidth'} />
            </Box>
            <Box width={'50%'} borderRadius={'full'} overflow={'hidden'} boxShadow={'2xl'}>
              <StaticImage src={yeppyImage} alt={''} layout={'fullWidth'} />
            </Box>
          </HStack>
          <Text>
            μ μ£Όμμ μ¬λ κ°λ°μμλλ€.
            <br />
            νμ¬λ μ¬μμΉκ΅¬(μλΉμ λΆ) λκ³Ό νλ³΅νκ² μ μ£Όμμ μννκ³ 
            <br />
            λν κ³΅λμΌλ‘ λΈλ‘κ·Έλ₯Ό μ΄μνκ³  μμ΄μ. κ³΅λΆ κ·Έλ¦¬κ³  μν κ΄μ¬μ¬λ€μ κ°μ΄ μ¬λ¦¬κ² μ΅λλ€.
          </Text>
        </Box>
        <Box my={8}>
          <Heading as={'h2'}>μ§κΈ κ΄μ¬μ¬μΈ κ²λ€!</Heading>
          <Box mx={'auto'} my={8} maxW={'xs'} overflow={'hidden'}>
            {tags &&
              Array.isArray(tags) &&
              tags.map((tag) => (
                <Tag
                  display={'block'}
                  float={'left'}
                  key={tag}
                  bgColor={'teal'}
                  variant={'solid'}
                  as={GatsbyLink}
                  to={`/tag/${StringUtil.slugify(tag)}`}
                  pt={1}
                  m={1}
                >
                  {tag}
                </Tag>
              ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default AboutPage;
