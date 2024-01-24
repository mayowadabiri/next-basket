'use client';
import Container from '@/components/Container';
import { Box, Divider, Link, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import ProductInfoImg from '@/assets/productInfo.png';

const ProductInfo = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Box py={5}>
          <Stack direction="row" justifyContent={'center'}>
            <Link
              href="#"
              variant={'body1'}
              sx={{ p: '24px', textDecoration: 'none', color: '#737373' }}
              fontWeight={700}
            >
              Description
            </Link>
            <Link
              href="#"
              variant={'body1'}
              sx={{ p: '24px', textDecoration: 'none', color: '#737373' }}
              fontWeight={700}
            >
              Additional Information
            </Link>
            <Link
              href="#"
              variant={'body1'}
              sx={{ p: '24px', display: 'flex', textDecoration: 'none' }}
              fontWeight={700}
            >
              <Typography mr={2} fontWeight={700} color="#737373">
                Review
              </Typography>
              <Typography sx={{ color: '#23856D' }} fontWeight={700}>
                (0)
              </Typography>
            </Link>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ mt: 4 }}>
          <Stack sx={{ pt: 5, pb: 10 }} direction="row" spacing={6}>
            <Stack spacing={6}>
              <Typography color={theme.palette.text.primary} fontWeight={700} variant="h3">
                the quick fox jumps over{' '}
              </Typography>
              <Typography color={theme.palette.text.secondary} variant="body1" width="70%"  >
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>
              <Box sx={{display:"flex"}}>
                <Box sx={{alignSelf:"flex-stretch", width:"3px", backgroundColor:"#23856D", mr: 2}}></Box>
                <Typography color={theme.palette.text.secondary} variant="body1" width="70%">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </Typography>
              </Box>
              <Typography color={theme.palette.text.secondary} variant="body1" width="70%">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>
            </Stack>
            <Box>
              <Image src={ProductInfoImg} alt="productInfo" />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default ProductInfo;
