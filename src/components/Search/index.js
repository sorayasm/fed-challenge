import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Search extends Component {
    
    constructor(){
        super();
        this.state = {
            input:''
        }
    }

    getData = (e) => {
        const input = e.target.value;
        this.setState({input: input })
    }

    render(){
        const { input } = this.state;
        const { display } = this.props;
        return (
            <Container>
                <Form.Row>
                    <Col>
                        <InputGroup className='mb-3 search-bar'>
                            <FormControl
                                placeholder='Search a tag'
                                aria-label='Search a tag'
                                aria-describedby='basic-addon2'
                                value={input}
                                onChange={(e)=> this.getData(e)}
                                onBlur={()=>{display(input)}}
                            />
                            <InputGroup.Append>
                                <Button 
                                    variant='outline-light'
                                    onClick={()=>{display(input)}}
                                >
                                    Search
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Form.Row>
            </Container>
        )
    }
}


export default Search;


