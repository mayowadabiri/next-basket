import { Box } from '@mui/material';
import Featured from './_component/Featured';
import Posts from './_component/Posts';
import BestSeller from './_component/Bestseller';
import Products from './_component/Products';
import Comments from './_component/Comment';
import Experience from './_component/Experience';

export default function Home() {
  return (
    <Box component={'main'}>
      <Products />
      <BestSeller />
      <Featured />
      <Posts />
      <Comments />
      <Experience />
    </Box>
  );
}
