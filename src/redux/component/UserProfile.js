import React from 'react'
import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios'

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user_id,
            username: this.props.username,
            email: this.props.email,
            profileImage: this.props.profileImage,
            msg: this.props.msg,
            uploadedFile: null
        }

    }

    getUserDetails = (user_id) => {
        //console.log(user_id);
        axios.get(`${process.env.REACT_APP_API_URL}/userapi/getUserDetails/${user_id}`, {
            headers:
            {
                'content-type': 'application/json',
            },
        }).then(res => {
            console.log(res);
            this.setState({ email: res.data[0].email })
            this.setState({ profileImage: res.data[0].profileImage })
        })
            .catch(err => console.log(err))
    }

    changeProfileImage = (e) => {
        console.log(e.target.files[0]);
        this.setState({ uploadedFile: e.target.files[0] })
    }

    updateProfileHandler = (e) => {
        e.preventDefault();

        //create object of FormData
        const formData = new FormData();
        formData.append('profileImage', this.state.uploadedFile);
        formData.append('user_id', this.state.user_id);
        //updateProfile

        axios.post(`${process.env.REACT_APP_API_URL}/userapi/updateProfile/`, formData, {

            headers:
            {
                'content-type': 'application/json',
            },
        }).then(res => {
            console.log(res);
            this.setState({ msg: res.data.message })
            this.setState({ profileImage: res.data.result.profileImage })

        })
            .catch(err => console.log(err))

    }

    componentDidMount() {
        this.getUserDetails(this.state.user_id);
    }

    render() {
        if (this.state.profileImage) {
            var profilePic = process.env.REACT_APP_API_URL + "/" + this.state.profileImage;
        }
        else {
            profilePic = process.env.PUBLIC_URL + '/assets/dummy-profile-image-female.jpg';
        }
        return (
            <Container className="m-5">
                <Row>
                    <Col>
                        <img alt="profilePic" src={profilePic} width="300px" height="auto" />
                    </Col>
                    <Col>
                        <h1>User Profile</h1>
                        {/* <p>{msg}</p> */}
                        <Form>
                            <p>{this.state.msg}</p>
                            <Form.Group controlId="formUserName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.username}

                                    placeholder="Enter user name" required />

                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" defaultValue={this.state.email}

                                    placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type="file"
                                    onChange={this.changeProfileImage}
                                    name="profileImage"
                                    required />
                            </Form.Group>

                            <Button variant="primary"
                                onClick={this.updateProfileHandler}>
                                Update Profile
          </Button>
                        </Form>
                    </Col>

                </Row>

            </Container>
        )
    }
}


const mapStatetoProps = (state) => {
    return {
        user_id: state.user.userDetials.userid,
        username: state.user.userDetials.username,
        email: state.user.email,
        profileImage: state.user.profileImage,
        msg: state.user.msg
    }
}


export default connect(mapStatetoProps)(UserProfile);
