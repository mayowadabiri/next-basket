import Text from '@/components/Text';
import { Box, Stack, Typography } from '@mui/material';
import Button from "@/components/Button"

const Experience = () => {
  return (
    <Box
      sx={{
        mt: 15,
        backgroundImage:
          "url('https://res.cloudinary.com/dabirimayowa/image/upload/v1705908190/experience_omghls.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
      }}
    >
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ pt: 33, pb: 25, width: '30%', mx: 'auto', textAlign: 'center' }}
        spacing={6}
      >
        <Typography variant="body2" color="#23A6F0" fontWeight={700}>
          Designing Better Experience
        </Typography>
        <Text variant={'h4'} isBold>
          How Problems trying to resolve the conflict between{' '}
        </Text>
        <Text variant={'subtitle1'}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{' '}
        </Text>
        <Typography color="#23856D" variant="h6">
          $16.48
        </Typography>
        <Button
         
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Stack>
    </Box>
  );
};
export default Experience;
