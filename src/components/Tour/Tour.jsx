import React, { useEffect } from 'react';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';

const Tour = ({ steps, defaultStepOptions }) => {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions,
    });

    steps.forEach(step => {
      tour.addStep(step.id, step.options);
    });

    tour.start();   

    return () => {
      tour.complete();
    };
  }, [steps, defaultStepOptions]);

  return null; // Shepherd.js doesn't render anything, so we return null
};

export default Tour;
