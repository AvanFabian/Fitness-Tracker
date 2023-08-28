import { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

// setBodyPart coming from HorizontalScrollbar.jsx
const BodyPart = ({ item, setBodyPart, bodyPart, eachBodyPart }) => {

  useEffect(() => {
    eachBodyPart.map((bodyPart) => {
      if (bodyPart === item) {
        // setBodyPart('all');
      }
    });
  }, []);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #165bf0', 
      background: '#fff', borderBottomLeftRadius: '20px', 
      width: '270px', height: '282px', cursor: 'pointer', gap: '47px' 
      } : 
      { background: '#fff', borderBottomLeftRadius: '20px', 
      width: '270px', height: '282px', cursor: 'pointer', gap: '47px' 
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#12163a" textTransform="capitalize"> 
        {item}
      </Typography>
    </Stack>
  );
}
export default BodyPart;