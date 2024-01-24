'use client';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Icon, Icons } from './Icon';
import Container from './Container';
import { useIsSingleProductPage } from '@/hook/useIsSingleProductPage';

const HeaderTypography = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: any;
}) => (
  <Typography
    sx={{ ...sx }}
    variant="body1"
    color={'white'}
    fontFamily="Montserrat"
    fontWeight={700}
  >
    {children}
  </Typography>
);
const TopHeader = () => {
  const isSingleProduct = useIsSingleProductPage();
  return (
    <Box
      component="section"
      sx={{ padding: '10px 34px', backgroundColor: '#23856D' }}
    >
      <Container sx={!isSingleProduct ? { maxWidth: '100%' } : {}}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction={'row'} spacing={10}>
            <Stack direction="row" spacing={2} alignItems={'center'}>
              <Icon name={Icons.Phone} height={20} width={20} />
              <HeaderTypography> (225) 555-0118</HeaderTypography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems={'center'}>
              <Icon name={Icons.Mail} height={20} width={20} />
              <HeaderTypography>michelle.rivera@example.com</HeaderTypography>
            </Stack>
          </Stack>

          <Box
            sx={{
              padding: '10px',
              alignItems: 'center',
            }}
          >
            <HeaderTypography>
              Follow Us and get a chance to win 80% off
            </HeaderTypography>
          </Box>
          <Stack direction={'row'} spacing={2}>
            <HeaderTypography>Follow Us :</HeaderTypography>
            <Stack spacing={3} direction={'row'} alignItems="center">
              <Icon name={Icons.Instagram} />
              <Icon name={Icons.Youtube} />
              <Icon name={Icons.Facebook} />
              <Icon name={Icons.Twitter} />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
