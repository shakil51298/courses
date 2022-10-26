import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Course = ({id}) => {
    // const course = useLoaderData ();
    // const { name, description, image,  category_id } = course;
    // console.log(category_id);
    return (
        <Card>
            {/* <Card.Img variant="top" src={image} /> */}
            <Card.Body>
                {/* <Card.Title>{name}</Card.Title> */}
                <Card.Text>
                    {/* {description} */}
                </Card.Text>
                {/* <Link to={`/category/${category_id}`}> */}
                    <Button variant="primary">All Course in this category</Button>
                {/* </Link> */}
            </Card.Body>
        </Card>
      
    );
};

export default Course;