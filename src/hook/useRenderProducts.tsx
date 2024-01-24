import { useGetProductsQuery } from '@/api/baseQueries/postsApi/getPosts';
import ProductCard from '@/components/Card';
import { IProductCard } from '@/type';
import { Box, Button, Grid, useTheme } from '@mui/material';
import Link from 'next/link';
import { useMemo } from 'react';
import { Oval } from 'react-loader-spinner';

export const useRenderProducts = (limit: number) => {
  const theme = useTheme();

  const { data, isFetching, isLoading } = useGetProductsQuery({ limit });
  const products = useMemo(() => {
    if (data) {
      const updatedProducts = data.products.map((each: IProductCard) => {
        const discountPrice =
          each.price - (each.discountPercentage / 100) * each.price;
        return {
          ...each,
          image: each.images[0],
          discountPrice: discountPrice.toFixed(2),
        };
      });
      return updatedProducts;
    }
    return [];
  }, [data]);

  const shouldShowBtn = useMemo(() => {
    if (data) {
      return limit === data.total;
    }
  }, [data]);

  const renderProducts = () => (
    <Grid container sx={{ p: 5 }} spacing={6}>
      {products.map((product) => (
        <Grid item xs={3}>
          <Link href={`/${product.id}`} style={{ textDecoration: 'none' }}>
            <ProductCard {...product} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );

  const renderLoading = () => (
    <>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <Oval
            visible={isLoading}
            height="80"
            width="80"
            color="#23A6F0"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </Box>
      )}
    </>
  );

  return {
    renderProducts,
    renderLoading,
    shouldShowBtn,
    isFetching,
    isLoading,
  };
};
