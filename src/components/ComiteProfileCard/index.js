import React from "react";
import {Card} from "react-bootstrap";
import './style.css'

const ComiteProfileCard = ({image, profileName, profileTitle, profileEmail}) => {
    return (
        <Card className="h-100 comite-profile-card ">
            <Card.Img
                variant="top"
                src={image}
                alt={profileName}
                className="card-img-custom"
            />
            <Card.Body className="text-center">
                <Card.Title>{profileName}</Card.Title>
                <Card.Text>
                    {profileTitle}
                    <br/>
                    {profileEmail}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default ComiteProfileCard;