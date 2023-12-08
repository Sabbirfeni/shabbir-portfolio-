import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../HOC';
import { technologies } from '../constants';
import LottieAnimation from './LottieAnimamtions/LottieAnimation';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-12'>
      {technologies.map(technology => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt="" className='sm:w-[100%] w-[80%] mx-auto'/>
          <h1 className='text-center mt-2'>{technology.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')