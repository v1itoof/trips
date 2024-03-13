import { render } from "@testing-library/react";
import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

class Users extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            users: [
                {'id': 1, 'Title': 'Conference', 'Description': 'An annual conference focusing on AI and its applications.', 'Date_start': '2022-05-13', 'Date_end': '2022-05-15', 'Locals': 'New York City, USA', 'Participants': 'Researchers, Engineers, Entrepreneurs'},
                {'id': 2, 'Title': 'teste teste', 'Description': 'An annual conference focusing on AI and its applications.', 'Date_start': '2022-05-02', 'Date_end': '2022-05-08', 'Locals': 'New York City, USA', 'Participants': 'Researchers, Engineers, Entrepreneurs'},
            ]
        }
    }

    formatDate = (dateString) => {
        const date = new Date(dateString + 'T00:00:00'); // Adiciona o horário 00:00:00 para evitar problemas com o fuso horário
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${month}-${day}`;
    }

    formatDateRange = (start, end) => {
        return `${this.formatDate(start)} to ${this.formatDate(end)}`;
    }

    truncateDescription = (description, limit) => {
        const words = description.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return description;
    }

    componentDidMount() {
        
    }

    componentWillUnmount(){

    }

    render() {
        return (
            <div className="my-3">
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Dates</th>
                                <th>Locals</th>
                                <th>Participants</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.Title}</td>
                                    <td>{this.truncateDescription(user.Description, 4)}</td> {/* Limite de 10 palavras */}
                                    <td>{this.formatDateRange(user.Date_start, user.Date_end)}</td>
                                    <td>{user.Locals}</td>
                                    <td>{user.Participants}</td>
                                    <td>Edit | Delete</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

export default Users;