'use client';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
  Button,
} from '@mui/material';
import PostImage1 from '@/assets/postimg1.png';
import PostImage2 from '@/assets/postimg2.png';
import PostImage3 from '@/assets/postimg3.png';
import Image from 'next/image';
import { Icon, Icons } from '@/components/Icon';
import Text from '@/components/Text';
import Container from '@/components/Container';

const images = [PostImage1, PostImage2, PostImage3];

const Posts = () => {
  const theme = useTheme();

  return (
    <Box component={'div'}>
      <Container sx={{ py: 23 }}>
        <Box textAlign={'center'} mb={16}>
          <Typography variant="subtitle1" color={theme.palette.primary.main}>
            Practice Advice
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            color={theme.palette.text.primary}
            my={2}
          >
            Featured Posts
          </Typography>
        </Box>
        <Box
          sx={{
            py: 7,
          }}
        >
          <Stack direction="row" spacing={2} justifyContent={'center'}>
            {images.map((each, index) => (
              <Card sx={{ position: 'relative' }} key={index}>
                <Image src={each} alt="Posts" style={{ width: '100%' }} />
                <CardContent sx={{ p: 5 }}>
                  <Stack direction="row" spacing={3} alignItems="center" mb={2}>
                    <Typography variant="body2" color="#8EC2F2">
                      Google
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.text.secondary}
                    >
                      Trending
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.text.secondary}
                    >
                      New
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      letterSpacing: '0.2px',
                      lineHeight: '30px',
                      fontWeight: 400,
                      my: 2,
                    }}
                    variant="h6"
                    color={theme.palette.text.primary}
                  >
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Loudest à la Madison #1 (L'integral){' '}
                  </Typography>
                  <Typography color={theme.palette.text.secondary} mb={2}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    We focus on ergonomics and meeting you where you work. It's{' '}
                    only a keystroke away.
                  </Typography>
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    py={3}
                  >
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      <Icon name={Icons.Clock} />
                      <Text variant="caption" color="secondary">
                        22 April 2021
                      </Text>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      <Icon name={Icons.Comments} />
                      <Text variant="caption" color="secondary">
                        10 comments
                      </Text>
                    </Stack>
                  </Stack>
                  <Button sx={{ display: 'flex', alignItems: 'center' }}>
                    <Text
                      variant="caption"
                      sx={{ mr: 2 }}
                      color="secondary"
                      isBold
                    >
                      Learn More
                    </Text>
                    <Icon name={Icons.CaretRight} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Posts;
