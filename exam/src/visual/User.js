import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from 'axios';
import './user.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function User() {
    const location = useLocation();
    const { login } = location.state;
    const [data, setData] = useState([])

    const peticionGet = async (login) => {
        await axios.get('https://api.github.com/users/' + login)
            .then(user => {
                setData(user.data)
            })
    }

    useEffect(() => {
        peticionGet(login);
    })

    return (
        <>
            <div className='usuarioFont'>
                <div className='datosUsuario'>
                    <Container>
                        <Row>
                            <Col>
                                <Row className='rows'>
                                    <Col><a href={data.html_url} target='_blank' className='icon'><FontAwesomeIcon icon={faGithub} /></a></Col>
                                </Row>
                                <Row className='rows'>
                                    <Col> Name: {data.name}</Col>
                                </Row>
                                <Row className='rows'>
                                    <Col>
                                        <Link className="btn btn-primary"
                                            to={`/`}
                                        >Back</Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col><img className="avatarUser" src={data.avatar_url} alt='avatar' /></Col>
                            <Col>
                                <Row className='rows'>
                                    <Col>Login: {data.login}</Col>
                                </Row>
                                <Row className='rows'>
                                    <Col>Type: {data.type}</Col>
                                </Row>
                                <Row className='rows'>
                                    <Col>Repos: {data.public_repos}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

