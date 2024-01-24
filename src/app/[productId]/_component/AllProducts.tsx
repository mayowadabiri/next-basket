'use client';
import Container from '@/components/Container';
import { useRenderProducts } from '@/hook/useRenderProducts';
import { Box, Divider, Typography, useTheme } from '@mui/material';

const AllProducts = () => {
  const theme = useTheme();

  const {
    renderProducts,
    renderLoading,
    isLoading,
  } = useRenderProducts(8);

  return (
    <Box sx={{ backgroundColor: '#FAFAFA' }}>
      <Container>
        <Box sx={{ py: 10 }}>
          <Typography
            color={theme.palette.text.primary}
            fontWeight={700}
            variant="h4"
          >
            BESTSELLER PRODUCTS
          </Typography>
          <Box sx={{ my: 5 }}>
            <Divider />
          </Box>
          <Box>
            {!isLoading && renderProducts()}
            {renderLoading()}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AllProducts;
