import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import EditorInsights from '../EditorsInsights/EditorInsights';

const News = () => {
    const news = useLoaderData();
     const  {_id,rating,title,author,image_url,details,category_id     } = news
    return (
        <div>
            <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
         <Link to={`/category/${category_id }`}> <Button variant="danger"><FaArrowLeft />  All news in this category</Button></Link>
        </Card.Body>
      </Card>

      <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;