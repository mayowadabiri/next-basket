import { Typography } from '@mui/material';

interface IText {
  children: React.ReactNode;
  sx?: any;
  color?: 'primary' | 'secondary';
  variant: any;
  isBold?: boolean;
}

const colorVariations: Record<'primary' | 'secondary', string> = {
  primary: '#252B42',
  secondary: '#737373',
};
const Text = ({
  children,
  sx,
  color = 'primary',
  isBold,
  variant,
  ...props
}: IText) => {
  return (
    <Typography
      sx={{ ...sx, color: colorVariations[color] }}
      fontWeight={isBold ? 700 : 400}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export default Text;
