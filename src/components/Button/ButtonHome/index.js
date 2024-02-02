import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Index = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div>
                <Link to="/agendamento-de-servicos">
                    <Button variant="danger" size="lg" className="mb-2">
                        Agende nosso serviço
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Index;
