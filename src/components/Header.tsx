'use client';
import { navs } from '@/constants';
import {
  Box,
  IconButton,
  Link,
  List,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Navigation from './NavItem';
import { Icon, Icons } from './Icon';
import Container from './Container';
import { useIsSingleProductPage } from '@/hook/useIsSingleProductPage';
import { AppContext } from '@/context';
import { useContext } from 'react';

const Header = () => {
  const isSingleProduct = useIsSingleProductPage();
  const theme = useTheme();
  const { wishlist, carts, setOpenCart } = useContext(AppContext);

  return (
    <Box component={'header'} sx={{ padding: '16px 34px' }}>
      <Container sx={!isSingleProduct ? { maxWidth: '100%' } : {}}>
        <Stack direction={'row'} alignItems={'center'}>
          <Box marginRight={'119px'}>
            <Link
              href="/"
              fontWeight={700}
              color={theme.palette.text.primary}
              variant="h4"
              sx={{ textDecoration: 'none' }}
            >
              Bandage
            </Link>
          </Box>
          <Box>
            <nav>
              <List sx={{ display: 'flex' }}>
                {navs.map((each) => (
                  <Navigation {...each} key={each.primary} />
                ))}
              </List>
            </nav>
          </Box>
          <Box component="div" sx={{ marginLeft: 'auto' }}>
            <Stack alignItems="center" direction="row" spacing={3}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  typography: 'body1',
                  fontWeight: 700,
                  textDecoration: 'none',
                  '& > :not(style) ~ :not(style)': {
                    ml: 2,
                  },
                }}
                color={'#23A6F0'}
              >
                <Icon name={Icons.User} height={20} width={20} />
                <Link marginRight={'10px'}>Login</Link> /<Link>Register</Link>
              </Box>
              <IconButton sx={{ p: 3 }}>
                <Icon name={Icons.Search} height={20} width={20} />
              </IconButton>
              <IconButton sx={{ p: 3 }} onClick={setOpenCart}>
                <Icon name={Icons.Cart} height={20} width={20} />
                {carts.length > 0 && (
                  <Typography color="#23A6F0">{carts.length}</Typography>
                )}
              </IconButton>
              <IconButton sx={{ p: 3 }}>
                <Icon
                  name={Icons.Wishlist}
                  height={20}
                  width={20}
                  fill="#23A6F0"
                />
                {wishlist.length > 0 && (
                  <Typography color="#23A6F0">{wishlist.length}</Typography>
                )}
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
