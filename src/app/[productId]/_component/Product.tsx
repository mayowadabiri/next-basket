'use client';
import Container from '@/components/Container';
import {
  Box,
  Button,
  Divider,
  Rating,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import { Icon, Icons } from '@/components/Icon';
import Cart from '@/components/Cart';
import { useGetProductQuery } from '@/api/baseQueries/postsApi/getPosts';
import 'react-slideshow-image/dist/styles.css';
import { Oval } from 'react-loader-spinner';

// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useParams } from 'next/navigation';
import '@splidejs/react-splide/css';
import { AppContext } from '@/context';
import { useContext } from 'react';

const colors = ['#23A6F0', '#2DC071', '#E77C40', '#252B42'];

const Product = () => {
  const params = useParams();
  const { data, isLoading } = useGetProductQuery({
    id: Number(params.productId!),
  });
  const theme = useTheme();
  const { addToCart, addToWishlist, carts, wishlist } = useContext(AppContext);
  const isCartDisabled = carts.find((each) => each.id === data?.id);
  const isWishlistDisabled = wishlist.find((each) => each.id === data?.id);
  return (
    <Box sx={{ backgroundColor: '#FAFAFA', pb: '48px' }}>
      {!isLoading && (
        <Container>
          <Stack direction={'row'} spacing={6}>
            <Box
              sx={{
                width: '50%',
                position: 'relative',
              }}
            >
              <Splide
                pagination={false}
                hasTrack={false}
                style={{ height: '100%' }}
                aria-label="My Favorite Images"
              >
                <SplideTrack>
                  {data?.images.map((each) => (
                    <SplideSlide>
                      <img
                        src={each}
                        alt="Image 1"
                        style={{ height: '100%' }}
                      />
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </Box>
            <Box sx={{ pl: 3, pt: 3, flexGrow: 1 }}>
              <Typography variant="h4" color={theme.palette.text.primary}>
                {data?.title}
              </Typography>
              <Stack direction="row" pt={3} spacing={2}>
                <Rating
                  name="half-rating"
                  defaultValue={data?.rating}
                  precision={0.5}
                />
                <Typography
                  color={theme.palette.text.secondary}
                  fontWeight={700}
                >
                  10 Reviews
                </Typography>
              </Stack>
              <Typography
                pt={5}
                variant="h3"
                color={theme.palette.text.primary}
                fontWeight={700}
              >
                ${data?.price}
              </Typography>
              <Stack direction="row" spacing={1} pt={2}>
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}
                  fontWeight={700}
                >
                  Availability:
                </Typography>
                <Typography variant="body2" color="#23A6F0" fontWeight={700}>
                  In Stock
                </Typography>
              </Stack>
              <Box sx={{ paddingTop: '119px' }}>
                <Divider />
              </Box>
              <Stack pt={6} direction="row" spacing={2}>
                {colors.map((each) => (
                  <Box
                    sx={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: each,
                    }}
                  ></Box>
                ))}
              </Stack>
              <Stack direction="row" spacing={2} pt="67px">
                <Button
                  sx={{
                    backgroundColor: '#23A6F0',
                    py: 3,
                    px: 8,
                    color: '#fff',
                    textTransform: 'capitalize',
                  }}
                >
                  Select Options
                </Button>
                <IconButton
                  sx={{
                    p: 2,
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    border: 1,
                    borderColor: '#E8E8E8',
                    backgroundColor: '#FFF',
                  }}
                  onClick={() => addToWishlist(data!)}
                  disabled={!!isWishlistDisabled}
                >
                  <Icon name={Icons.Wishlist} width={20} height={20} />
                </IconButton>
                <IconButton
                  sx={{
                    p: 2,
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    border: 1,
                    borderColor: '#E8E8E8',
                    backgroundColor: '#FFF',
                  }}
                  onClick={() => addToCart(data!)}
                  disabled={!!isCartDisabled}
                >
                  <Icon
                    name={Icons.Cart}
                    fill="#252B42"
                    width={20}
                    height={20}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    p: 2,
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    border: 1,
                    borderColor: '#E8E8E8',
                    backgroundColor: '#FFF',
                  }}
                >
                  <Icon name={Icons.Fav} width={20} height={20} />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
          <Stack direction="row" pt="21px" spacing={4}>
            {data?.images.map((each) => (
              <Box
                sx={{ width: '100px', height: '75px', position: 'relative' }}
              >
                <Image
                  src={each}
                  alt="carousel"
                  fill
                  style={{ position: 'absolute' }}
                />
              </Box>
            ))}
          </Stack>
        </Container>
      )}
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#23A6F0"
            ariaLabel="oval-loading"
          />
        </Box>
      )}
      <Cart />
    </Box>
  );
};

export default Product;
