import { Box, Modal, Typography, Stack } from '@mui/material';
import { AppContext } from '@/context';
import { useContext } from 'react';
import ProdImage from '@/assets/bestseller.png';
import Button from '@/components/Button';

import Image from 'next/image';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 10,
  width: '70%',
};

const Cart = () => {
  const { updateCartItem, carts, wishlist, openCart, setOpenCart } =
    useContext(AppContext);
  return (
    <Modal
      open={openCart}
      onClose={setOpenCart}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={3}>
          {carts.map((each) => (
            <Stack direction="row" spacing={4} alignItems="center">
              <Box
                sx={{
                  height: '100px',
                  width: '100px',
                  position: 'relative',
                  borderRadius: '50%',
                }}
              >
                <Image
                  src={each.thumbnail}
                  alt="image"
                  fill
                  style={{ borderRadius: '50%' }}
                />
              </Box>
              <Box>
                <Typography color="#252B42" variant="h4">
                  {each.title}
                </Typography>
                <Typography color="#252B42" variant="h6">
                  ${each.price}
                </Typography>
                <Typography>Quantity: {each.quantity} </Typography>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => updateCartItem('increment', each.id)}>
                    Increment
                  </Button>
                  {each.quantity > 0 && (
                    <Button
                      onClick={() => updateCartItem('decrement', each.id)}
                    >
                      Decrement
                    </Button>
                  )}
                </Stack>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Modal>
  );
};

export default Cart;
