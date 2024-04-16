import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './ToggleBtn.css';
import { styled } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";



export default function ToggleBtn() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const ToggleButton = styled(MuiToggleButton)({
    color: "white",

    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: '#fab90c'
    }
  });
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      id='toggle'
    >
      <ToggleButton value="left" aria-label="left aligned" >
        Home
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        Favorites
      </ToggleButton>
      
    </ToggleButtonGroup>
  );
}