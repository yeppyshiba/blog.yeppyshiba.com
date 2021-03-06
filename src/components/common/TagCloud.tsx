import React, { FunctionComponent } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { slugify } from 'transliteration';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { GroupCountType } from '@/types';
import { StringUtil } from '@/utils';
import '@static/css/tag-cloud.css';

interface TagCloudProps {
  tags: GroupCountType[];
}

const TagCloud: FunctionComponent<TagCloudProps> = ({ tags }) => {
  return (
    <UnorderedList
      listStyleType={'none'}
      p={8}
      display={'flex'}
      flexWrap={'wrap'}
      alignItems={'center'}
      justifyContent={'center'}
      lineHeight={'2.75rem'}
      maxWidth={'100%'}
      className={'tag-cloud'}
    >
      {tags.map(({ fieldValue, totalCount }) => {
        return (
          <ListItem key={fieldValue}>
            <GatsbyLink to={`/tag/${StringUtil.slugify(fieldValue)}`} data-weight={totalCount}>
              {fieldValue}
            </GatsbyLink>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default TagCloud;
