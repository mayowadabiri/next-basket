import Text from '@/components/Text';
import {
  Box,
  ImageList,
  ImageListItem,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import User from '@/assets/reviewuser.png';
import Review1 from '@/assets/review1.png';
import Review2 from '@/assets/review2.png';
import Review3 from '@/assets/review3.png';
import Review4 from '@/assets/review4.png';
import Review5 from '@/assets/review5.png';
import Review6 from '@/assets/review6.png';
import Review7 from '@/assets/review7.png';
import Review8 from '@/assets/review8.png';
import Review9 from '@/assets/review9.png';
import Image from 'next/image';
import Container from '@/components/Container';

const images = [
  Review1,
  Review2,
  Review3,
  Review4,
  Review5,
  Review6,
  Review7,
  Review8,
  Review9,
];

const Comments = () => {
  return (
    <Box>
      <Container withPadding>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box>
            <Text variant={'h4'} isBold sx={{ mb: 6, textAlign: 'center' }}>
              What they say about us
            </Text>
            <Stack sx={{ p: 7 }} alignItems={'center'} spacing={4}>
              <Box>
                <Image alt="user" src={User} />
              </Box>
              <Box>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Box>
              <Text
                color="secondary"
                variant={'body2'}
                isBold
                sx={{ width: '60%', textAlign: 'center' }}
              >
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </Text>
              <Box>
                <Typography
                  variant="body2"
                  color="#23A6F0"
                  fontWeight={700}
                  sx={{ textAlign: 'center' }}
                >
                  Regina Miles
                </Typography>
                <Text variant="body2" isBold sx={{ textAlign: 'center' }}>
                  Designer
                </Text>
              </Box>
            </Stack>
          </Box>
          <Box>
            <ImageList cols={3} rowHeight={146} gap={20}>
              {images.map((each) => (
                <ImageListItem>
                  <Image
                    src={each}
                    alt="Image"
                    style={{ position: 'relative', width: '100%', zIndex: -10 }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Comments;
