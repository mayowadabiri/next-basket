'use client';
import ProductCard from '@/components/Card';
import Container from '@/components/Container';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useGetProductsQuery } from '@/api/baseQueries/postsApi/getPosts';
import { useMemo, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { IProductCard } from '@/type';
import Link from 'next/link';
import { useRenderProducts } from '@/hook/useRenderProducts';

const BestSeller = () => {
  const [limit, setLimit] = useState(10);

  const theme = useTheme();

  const { isFetching, renderProducts, renderLoading, shouldShowBtn, isLoading } =
    useRenderProducts(limit);
  const handleLoadMore = () => {
    if (!isFetching) {
      setLimit((prevLimit) => prevLimit + 10);
    }
  };

  return (
    <Box component={'div'}>
      <Container withPadding>
        <Box textAlign={'center'} mb={5}>
          <Typography variant="subtitle1" color={'#737373'}>
            Featured Products
          </Typography>
          <Typography
            variant="h5"
            fontWeight={700}
            color={theme.palette.text.primary}
            my={2}
          >
            BESTSELLER PRODUCTS
          </Typography>
          <Typography variant="caption" color={'#737373'} fontWeight={700}>
            Problems trying to resolve the conflict between
          </Typography>
        </Box>
        <Box
          sx={{
            py: 7,
          }}
        >
          {!isLoading && (
            <>
              {renderProducts()}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {!shouldShowBtn && (
                  <Button
                    onClick={handleLoadMore}
                    variant="outlined"
                    sx={{
                      border: 1,
                      borderColor: theme.palette.primary.main,
                      px: 8,
                      py: 3,
                      borderRadius: 1.5,
                      fontSize: '16px',
                      fontWeight: 700,
                    }}
                  >
                    <span>
                      {!isFetching
                        ? 'LOAD MORE PRODUCTS'
                        : 'Loading more, please wait...'}
                    </span>
                  </Button>
                )}
              </Box>
            </>
          )}
          {renderLoading()}
        </Box>
      </Container>
    </Box>
  );
};

export default BestSeller;
