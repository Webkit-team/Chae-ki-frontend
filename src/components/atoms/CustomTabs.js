import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'NanumBarunGothicBold',
          fontSize: '18px',
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
  },
});

const CustomTabs = ({ onTabChange, labels, disabledTabs = []}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 5, borderBottom:'solid 0.5px', borderBottomColor:'#CECECE' }}>
        <Tabs value={value} onChange={handleChange} >
        {labels.map((label, index) => (
            <Tab key={index} label={label} disabled={disabledTabs.includes(index)} />
          ))}
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export default CustomTabs;
