import { Box } from '@mui/material';
import { useMemo } from 'react';

interface IContainer {
  children: React.ReactNode;
  sx?: any;
  withPadding?: boolean;
}
const Container = ({ children, sx, withPadding = false }: IContainer) => {
  const style = useMemo(() => {
    const defaultStyle: any = {
      maxWidth: '1406px',
      margin: 'auto',
    };
    if (withPadding) {
      defaultStyle['padding'] = '80px 0';
    }
    return defaultStyle;
  }, []);

  return <Box sx={{ ...style, ...sx }}>{children}</Box>;
};

export default Container;
