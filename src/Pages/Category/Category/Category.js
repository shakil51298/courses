import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';


const Category = () => {
    let { id } = useParams();

     const [courseData, setCourseData] = useState({});
    useEffect(()=> {

        const url = `http://localhost:5000/course/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCourseData(data))
    },[])
    return (
        <div>
        {
            !courseData ? <h1>Loading...</h1>
            :
            <CourseSummaryCard course={courseData}></CourseSummaryCard>
        }
        </div>
    );
};

export default Category;