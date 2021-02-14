import React, { useEffect, useState } from 'react';
import { getTodo, deleteTodo, addTodo } from '../actions/todoActions';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Table, Form, Row, Container, Col } from 'react-bootstrap';

function Todo(props) {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch();



    const user_id = useSelector(state => state.user.userDetials.userid)

    const [todo, setTodo] = useState('')

    useEffect(() => {
        dispatch(getTodo(user_id))
    }, []);
    const handleAddTodo = (e) => {
        // const todo = prompt("Enter todo here", "");
        const newTodo = {
            name: todo,
            user_id: user_id
        }

        if (todo) {
            dispatch(addTodo(newTodo));
            setTodo('');
        }
    }

    console.log(todos);
    return (
        <Container className="center">
            <Row>
                <Col>
                    <Form >
                        <fieldset>
                            <legend>Add Todos:</legend>
                            <h1>Add Todos</h1>
                            <Form.Group controlId="formBasicTodo">
                                <Form.Label>Todo - {todo}</Form.Label>
                                <Form.Control type="text" placeholder="Enter todo name" value={todo} onChange={e => setTodo(e.target.value)} />
                                <Button variant="primary" style={{
                                    margin: '10px'
                                }} onClick={() => handleAddTodo()}>Add Todo</Button>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
                <Col>
                    <div>
                        <h1>All Todo</h1>

                        <Table hover responsive striped bordered>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Todo List</th>
                                    <th>Date of Added</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>

                                {todos.map((todo, i) => {
                                    return (
                                        <tr key={todo._id}>
                                            <td>{++i}</td>
                                            <td>{todo.name}</td>
                                            <td>{todo.added_date}</td>
                                            <td><Button variant="dark" onClick={() => dispatch(deleteTodo(todo._id))}>Delete</Button></td>

                                        </tr>
                                    )
                                })}
                            </tbody>

                        </Table>
                    </div>

                </Col>

            </Row>
        </Container>

    )
}

export default Todo





// class Todo extends Component {
//     componentDidMount() {
//         this.props.getTodo()
//     }

//     state = {}
//     render() {
//         const { todos } = this.props.todo;
//         console.log(todos);
//         const handleAddTodo = (e) => {
//             const todo = prompt("Enter todo here", "");
//             const newTodo = {
//                 name: todo
//             }
//             this.props.addTodo(newTodo);
//         }

//         const handleDelete = (id) => {
//             this.props.deleteTodo(id);
//         }
//         return (
//             <div className="todo container">

//                 <Button variant="primary" style={{
//                     margin: '10px'
//                 }} onClick={handleAddTodo}>Add Todo</Button>


//                 <Table hover responsive striped bordered>
//                     <thead>
//                         <tr>
//                             <th>Todo List</th>
//                             <th>Action</th>
//                         </tr>

//                     </thead>
//                     <tbody>
//                         {todos.map((todo) => {
//                             return (
//                                 <tr key={todo._id}>
//                                     <td>{todo.name}</td>
//                                     <td><Button variant="dark" onClick={
//                                         () => handleDelete(todo._id)
//                                     }>Delete</Button></td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>

//                 </Table>
//             </div>
//         );
//     }
// }


// // Todo.prototype ={
// //     getTodo: PropTypes.func.isRequired,
// //     todo: PropTypes.object.isRequired
// // }

// const mapStateToProps = (state) => ({
//     todo: state.todo
// })


// export default connect(mapStateToProps, { getTodo, deleteTodo, addTodo })(Todo);
