import {
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Icon, Icons } from './Icon';

const Navigation = ({ primary, name }: { primary: string; name?: Icons }) => {
  const theme = useTheme();

  return (
    <ListItem disablePadding>
      <ListItemButton
        component="a"
        href="#"
        color={theme.palette.text.secondary}
        sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}
      >
        <ListItemText
          primary={primary}
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 700,
            mr: 2,
            '& > *': {
              fontWeight: 700,
            },
          }}
        />
        {name && <Icon name={name} />}
      </ListItemButton>
    </ListItem>
  );
};
export default Navigation;
