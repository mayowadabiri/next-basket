import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TopHeader from '@/components/TopHeader';
import { Container } from '@mui/material';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
