import axios from "axios";
import React, { useEffect, useState } from 'react'
import './users.css'
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, Route } from 'react-router-dom'
import Error from "./Error";



export default function Users() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState({
        user: ''
    })

    const peticionGet = async (base) => {
        await axios.get('https://api.github.com/search/users?q=' + base)
            .then(user => {
                setData(user.data.items)
            })
    }

    useEffect((base) => {
        peticionGet(base);
    }, [])

    const handleInputChange = (event) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    const buscar = (event) => {
        if (search.user === 'doublevpartners') {
            <Route exact path="/Error">
                <Error />
            </Route>
        }
        else {
            event.preventDefault();
            var base = search.user.toString();
            peticionGet(base);
        }
    }

    return (
        <>
            <div className="body">
                <div className="form">
                    <Form on onSubmit={buscar} >
                        <Row className="mb-3">
                            <Form.Group as={Col} md="100" controlId="validationCustom01">
                                <Form.Label>Search User</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="user"
                                    onChange={handleInputChange}
                                    placeholder="search user"
                                    minLength="4"
                                />
                            </Form.Group>
                        </Row>
                        <div className="boton">
                            <Button type="submit">Buscar</Button>
                        </div>
                    </Form>
                </div>
                <div className="mapTable">
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Id</th>
                                <th>login</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(0, 10).map((celda) => {
                                return (
                                    <tr>
                                        <td>
                                            <img className="avatar" src={celda.avatar_url} alt='avatar' />
                                        </td>
                                        <td>{celda.id}</td>
                                        <td>{celda.login}</td>
                                        <td>
                                            <Link className="btn btn-primary"
                                                to={`/User`}
                                                state={{ login: celda.login }}
                                            >Información</Link>
                                        </td>
                                    </tr>
                                );
                            }
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>


    )
}
