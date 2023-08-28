import { useState } from 'react';
import { Box } from '@mui/material';
import '../App.css'

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [eachBodyPart, setEachBodyPart] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
        <SearchExercises 
          setExercises={setExercises} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart} 
          exercisesData={eachBodyPart} // Try to add different icon on each category 
          setEachBodyPart={setEachBodyPart} // Try to add different icon on each category
        />
        <Exercises 
        setExercises={setExercises} 
        exercises={exercises} 
        bodyPart={bodyPart} 
      />
    </Box>
  );
};

export default Home;