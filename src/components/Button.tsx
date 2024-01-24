import {Button as MUIButton} from '@mui/material';
const Button = ({children, onClick}:{children: React.ReactNode; onClick:() => void}) =>{
    return(
           <MUIButton
        onClick={onClick}
          sx={{ backgroundColor: '#23A6F0', py: 3, px: 8, color: '#fff' }}
        >
         {children}
        </MUIButton>
    )
}
export default Button