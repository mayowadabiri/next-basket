import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Text from './Text';
import { IProductCard } from '@/type';
import { useIsSingleProductPage } from '@/hook/useIsSingleProductPage';

const ProductCard = ({
  category,
  discountPrice,
  image,
  price,
  title,
}: IProductCard) => {
  const isSingleProduct = useIsSingleProductPage();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative', height: '283px', width: '100%' }}>
        <Image
          src={image}
          alt={title}
          style={{ position: 'absolute' }}
          fill
          objectFit="cover"
        />
      </Box>
      <Box
        textAlign={isSingleProduct ? 'left' : 'center'}
        p={5}
        sx={{ backgroundColor: '#fff' }}
      >
        <Text isBold variant="body2">
          {title}
        </Text>
        <Text isBold variant="body2" color="secondary" sx={{ py: 2 }}>
          {category}
        </Text>
        <Stack
          direction="row"
          justifyContent={isSingleProduct ? 'flex-start' : 'center'}
          spacing={1}
        >
          <Typography
            variant="body2"
            color="#BDBDBD"
            sx={{ textAlign: 'center', fontWeight: 700 }}
          >
            ${price}
          </Typography>
          <Typography
            variant="body2"
            color="#23856D"
            sx={{ textAlign: 'center', fontWeight: 700 }}
          >
            ${discountPrice}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
