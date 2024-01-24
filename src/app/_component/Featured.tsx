'use client';

import Container from '@/components/Container';
import { Icon, Icons } from '@/components/Icon';
import Text from '@/components/Text';
import { Box, Stack, Typography, useTheme } from '@mui/material';

const Featured = () => {
  const theme = useTheme();
  return (
    <Box component={'div'}>
      <Container withPadding>
        <Box textAlign={'center'} mb={16}>
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
          <Stack direction={'row'} justifyContent={'space-between'} spacing={6}>
            <Stack alignItems="center" sx={{ p: 8 }}>
              <Icon name={Icons.Easy} />
              <Text isBold variant="body2" sx={{ my: 4, textAlign: 'center' }}>
                Graphic Design
              </Text>
              <Text
                variant="body2"
                color="secondary"
                sx={{ textAlign: 'center' }}
              >
                Get your best looking smile now!
              </Text>
            </Stack>
            <Stack alignItems="center" sx={{ p: 8 }}>
              <Icon name={Icons.Concrete} />
              <Text isBold variant="body2" sx={{ my: 4, textAlign: 'center' }}>
                Concrete
              </Text>
              <Text
                variant="body2"
                color="secondary"
                sx={{ textAlign: 'center' }}
              >
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </Text>
            </Stack>
            <Stack alignItems="center" sx={{ p: 8 }}>
              <Icon name={Icons.Hack} />
              <Text isBold variant="body2" sx={{ my: 4, textAlign: 'center' }}>
                Hack Growth
              </Text>
              <Text
                variant="body2"
                color="secondary"
                sx={{ textAlign: 'center' }}
              >
                Overcame any hurdle or any other problem.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default Featured;
