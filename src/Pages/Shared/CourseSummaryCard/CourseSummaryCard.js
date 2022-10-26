import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
const CourseSummaryCard = ({course}) => {
    const {id,name,description,price, image, duration} = course;
    
    return (
        <Card className="mb-5">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                    roundedCircle
                    className='me-2'
                    src={image}
                    style={{ height: '60px' }}
                ></Image>
                <div>
                    <p className='mb-0'>{name}</p> 
                    <p>{price}</p> 
                </div>
            </div>
            <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
             <Card.Title>{name}</Card.Title>
             <Card.Img variant="top" src={image} />
            <Card.Text>
                {
                    // description.length > 2 ?
                    //     <>{description.slice(0, 2) + '...'} <Link to={`/course/${id}`}>Read More</Link> </>
                    //     :
                        description
                }
            </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{price}</span> 
            </div>
            <div>
                <FaEye className='me-2'></FaEye>
                <span>{duration}</span>
            </div>
        </Card.Footer>
    </Card>
        
    );
};

export default CourseSummaryCard;