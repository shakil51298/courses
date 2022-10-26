import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourse= useLoaderData();
   
    console.log(allCourse);
    

    
    return (
        <div>
            <h1>{allCourse.length}</h1>
            {
                allCourse.map(course =><CourseSummaryCard course={course}></CourseSummaryCard>)
            }
          
        </div>
    );
};

export default Home;