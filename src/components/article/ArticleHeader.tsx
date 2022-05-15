import React, { FunctionComponent } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, Heading, HStack, keyframes, Tag, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { kebabCase } from 'lodash';
import { MathUtil } from '@/utils';

const defaultImages = ['/images/header/wp7317693-jeju-wallpapers.jpg'];

const shrink = keyframes`
  from { transform: scale(1.0); }
  to { transform: scale(1.1); }
`;

interface ArticleHeaderProps {
  title: string;
  date?: string;
  image?: string;
  category?: string;
  tags?: string[];
}

const ArticleHeader: FunctionComponent<ArticleHeaderProps> = ({ title, image, category, date, tags }) => {
  const headerImage = image || MathUtil.getRandomValue(defaultImages);
  const dateObj = date && new Date(date);

  return (
    <Box 
      w={'full'} 
      h={'100vh'}
      overflow={'hidden'}
    >
      <Flex
        w={'full'}
        h={'full'}
        position={'relative'}
        justify={'center'}
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url('${headerImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          animation: `${shrink} 30s infinite alternate`
        }}
      >
        <VStack maxW={'7xl'} w={'full'} px={'12'} justify={'center'} alignItems={'flex-start'}>
          {category && (
            <Text
              color={useColorModeValue('gray.700', 'gray.700')}
              textTransform={'uppercase'}
              textShadow={'0.125rem 0.125rem white'}
              fontWeight={800}
              fontSize={'md'}
              letterSpacing={1.1}
              as={GatsbyLink}
              to={`/category/${kebabCase(category)}`}
            >
              {category}
            </Text>
          )}
          <Heading
            color={useColorModeValue('gray.900', 'gray.900')}
            as={'h1'}
            size={'3xl'}
            lineHeight={'125%'}
            textShadow={'0.25rem 0.25rem white'}
          >
            {title}
          </Heading>
          {dateObj && (
            <Text
              color={useColorModeValue('gray.700', 'gray.700')}
              fontSize={'xl'}
              fontStyle={'italic'}
              textShadow={'0.125rem 0.125rem white'}
            >
              {dateObj.toLocaleDateString()}
            </Text>
          )}
          {tags && (
            <HStack wrap={'wrap'}>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  bgColor={useColorModeValue('gray.700', 'gray.700')}
                  variant={'solid'}
                  as={GatsbyLink}
                  to={`/tag/${kebabCase(tag)}`}
                  mx={1}
                  my={2}
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
          )}
        </VStack>
      </Flex>
    </Box>
  );
};

export default ArticleHeader;
