import Container from '@/components/Container';
import { Icon, Icons } from '@/components/Icon';
import { Box, Link, Stack, useTheme } from '@mui/material';
import Product from './_component/Product';
import ProductInfo from './_component/ProductInfo';
import AllProducts from './_component/AllProducts';
import Brands from './_component/Brands';

const SingleProduct = () => {
  return (
    <Box component={'main'}>
      <Box sx={{ backgroundColor: '#FAFAFA' }}>
        <Container sx={{ py: 5 }}>
          <Stack py={5} direction="row" alignItems="center" spacing={2}>
            <Link color={'#252B42'} fontWeight={700} variant="body1">
              Home
            </Link>
            <Icon name={Icons.CaretRight} />
            <Link color={'#737373'} fontWeight={700} variant="body1">
              Shop
            </Link>
          </Stack>
        </Container>
      </Box>
      <Product />
      <ProductInfo />
      <AllProducts />
      <Brands />
    </Box>
  );
};

export default SingleProduct;
