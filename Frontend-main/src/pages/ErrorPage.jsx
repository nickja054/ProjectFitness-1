import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  const handleGoBack = () => {
    navigate(-1); // ย้อนกลับหน้าก่อนหน้า
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          bgcolor: '#f5f5f5',
        }}
      >
        <Box
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: 'white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
          }}
        >
          <ErrorOutlineIcon
            sx={{
              fontSize: 100,
              color: '#f44336',
              mb: 2,
            }}
          />
          
          <Typography
            variant="h1"
            sx={{
              fontSize: '6rem',
              fontWeight: 'bold',
              color: '#f44336',
              mb: 1,
            }}
          >
            404
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#333',
              mb: 2,
            }}
          >
            ไม่พบหน้าที่ต้องการ
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              mb: 4,
              fontSize: '1.1rem',
            }}
          >
            ขออภัย หน้าที่คุณกำลังมองหาไม่มีอยู่ในระบบ
            <br />
            อาจเป็นเพราะ URL ผิด หรือหน้านี้ถูกย้ายที่แล้ว
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: 2,
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              กลับหน้าหลัก
            </Button>
            
            <Button
              variant="outlined"
              onClick={handleGoBack}
              sx={{
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: 2,
                borderColor: '#1976d2',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: 'white',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              ย้อนกลับ
            </Button>
          </Box>
        </Box>
        
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            color: '#999',
          }}
        >
          หากปัญหายังคงอยู่ กรุณาติดต่อผู้ดูแลระบบ
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default ErrorPage;