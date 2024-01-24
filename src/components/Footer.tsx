'use client';
import {
  Box,
  Stack,
  Typography,
  useTheme,
  IconButton,
  Link,
} from '@mui/material';
import { Icon, Icons } from './Icon';
import { footerNavs } from '@/constants';
import Text from './Text';
import Container from './Container';
import { useIsSingleProductPage } from '@/hook/useIsSingleProductPage';

const Footer = () => {
  const isSingleProduct = useIsSingleProductPage();

  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ backgroundColor: isSingleProduct ? '#fff' : '#FAFAFA' }}>
        <Container>
          <Stack
            sx={{ py: 10 }}
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              color={theme.palette.text.primary}
              variant="h4"
            >
              Bandage
            </Typography>
            <Stack spacing={4} direction="row">
              <IconButton aria-label="delete" sx={{ p: 3 }}>
                <Icon name={Icons.Search} height={20} width={20} />
              </IconButton>
              <IconButton aria-label="delete" sx={{ p: 3 }}>
                <Icon name={Icons.Cart} height={20} width={20} />
              </IconButton>
              <IconButton aria-label="delete" sx={{ p: 3 }}>
                <Icon name={Icons.Wishlist} height={20} width={20} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Stack sx={{ py: 13 }} direction="row" justifyContent="space-between">
          {footerNavs.map((each, index) => (
            <Stack spacing={5} key={index}>
              <Text variant="body1" isBold>
                {each.title}
              </Text>
              <Stack spacing={3}>
                {each.links.map((item, index) => (
                  <Link
                    key={index}
                    sx={{
                      color: '#737373',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                    variant="body2"
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
      <Box sx={{ backgroundColor: '#FAFAFA' }}>
        <Container>
          <Text
            color="secondary"
            isBold
            variant="body2"
            sx={{ py: 6, maxWidth: '1406px', margin: 'auto' }}
          >
            Made With Love By Finland All Right Reserved{' '}
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
