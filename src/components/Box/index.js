import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FaHeart, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Box(props) {
    const { e} = props
    return (
        <Card border='dark'>
            <Card.Header className=''>
                <Image  
                    width={64}
                    height={64}
                    src={e.owner.picture} 
                    roundedCircle 
                />
                <Card.Text>
                    {e.owner.title[0].toUpperCase() + e.owner.title.substring(1)} {e.owner.firstName}  {e.owner.lastName}
                </Card.Text>
                <Button 
                        variant='light'
                        href={'mailto:'+ e.owner.email}
                    >
                        <FaEnvelope/>
                    </Button>
            </Card.Header>
            <Card.Link href={e.link}>
                <Card.Img 
                    variant='top' 
                    src={e.image} 
                />
            </Card.Link>
            <Card.Body>
                <Card.Title>{e.text}</Card.Title>
                <Card.Text>
                <FaHeart/> {e.likes} 
                <Button 
                    variant='light'
                    href={e.link}
                >
                    <FaInstagram/>
                </Button>
                </Card.Text>
                <Card.Text>
                    <strong>Tags: </strong> { e.tags.join(', ') }.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Published on: {new Date(e.publishDate).toLocaleDateString()}</small>
            </Card.Footer>
        </Card>
    )
}
