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
                <Card.Text >
                    <h5>{profileName}</h5>
                    {profileTitle}
                    <br/>
                    {profileEmail}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default ComiteProfileCard;