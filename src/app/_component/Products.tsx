'use client';
import Container from '@/components/Container';
import { itemData } from '@/constants/products';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

const Products = () => {
  const theme = useTheme();
  return (
    <Container withPadding>
      <ImageList variant="quilted" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem
            key={1}
            cols={item.cols}
            rows={item.rows || 1}
            sx={{ position: 'relative' }}
          >
            <Image
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ position: 'relative', width: '100%', zIndex: -10 }}
            />
            <Box
              sx={{
                position: 'absolute',
                zIndex: 100,
                top: 0,
                p: 5,
                fontWeight: 700,
              }}
              component="div"
            >
              <Typography
                variant="body2"
                color={'#2DC071'}
                marginBottom={'10px'}
                fontWeight={700}
              >
                5 Items
              </Typography>
              <Typography
                variant="h3"
                color={theme.palette.text.primary}
                fontWeight="bold"
              >
                FURNITURE
              </Typography>
              <Button
                sx={{ fontWeight: 700, color: theme.palette.text.primary }}
              >
                Read More
              </Button>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Products;
