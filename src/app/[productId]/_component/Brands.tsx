import Container from '@/components/Container';
import { Box, Stack } from '@mui/material';
import Brand1 from '@/assets/fa-brands-1.png';
import Brand2 from '@/assets/fa-brands-2.png';
import Brand3 from '@/assets/fa-brands-3.png';
import Brand4 from '@/assets/fa-brands-4.png';
import Brand5 from '@/assets/fa-brands-5.png';
import Brand6 from '@/assets/fa-brands-6.png';
import Image from 'next/image';
const Brands = () => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA' }}>
      <Container>
        <Stack
          sx={{ py: 10 }}
          justifyContent={'space-between'}
          direction="row"
          spacing={6}
          alignItems="center"
        >
          <Box>
            <Image src={Brand1} alt="Brand" />
          </Box>
          <Box>
            <Image src={Brand2} alt="Brand" />
          </Box>
          <Box>
            <Image src={Brand3} alt="Brand" />
          </Box>
          <Box>
            <Image src={Brand4} alt="Brand" />
          </Box>
          <Box>
            <Image src={Brand5} alt="Brand" />
          </Box>
          <Box>
            <Image src={Brand6} alt="Brand" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Brands;
