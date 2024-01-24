import { useParams } from 'next/navigation';

export const useIsSingleProductPage = () => {
  const params = useParams();

  return !!params.productId;
};
