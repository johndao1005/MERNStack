import { useEffect, useState } from 'react'
import MainScreen from '../../components/MainPage'
import { Link } from 'react-router-dom'
import { Button, Card, Badge } from 'react-bootstrap'
import axios from 'axios'
// axios for connect front end to backend
const MyNotes = () => {
    const [notes, setNotes] = useState([])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure?')) {

        }
    }

    const fetchNotes = async () => {
        const data = await axios.get('products')
        
        // for(let prop in data){
        //     console.log((prop))
        // }
        console.log(data)
        setNotes(data['data'])
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <MainScreen title="Welcome Back">
            <Link to='createnote'>
                <Button>
                    Create New Note
                </Button>
            </Link>
            {notes.map((note) =>
                <Card key={note._id}>
                    <Card.Header>
                        <span>{note.name}</span>
                        <div>
                            <Button href={`/note/${note._id}`}>Edit</Button>
                            <Button
                                variant='danger'
                                className='mx-2'
                                onClick={() => deleteHandler(note._id)}>
                                Delete</Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <h1>
                            <Badge>

                            </Badge>
                        </h1>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {note.description}
                            </p>
                            <footer className="blockquote-footer">
                                Created on - date
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            )}

        </MainScreen>
    )
}

export default MyNotes
