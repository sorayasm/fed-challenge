import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import * as config from '../src/enviroment/config.json';

import Search from './components/Search';
import Box from './components/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image';

function App() {
	const [loading, setLoading] = useState(false);
	const [info, setInfo] = useState(null);
	const [count, setCount] = useState(0);

	const display = (tag) => {
		getData(tag);
	}

	let getData = async (tag) => {
		const url = `${config.sandbox.baseUrl}/tag/${tag}/post`;
		const headers = { 
			headers: { 
				'app-id': config.sandbox.api_key,
				'Access-Control-Allow-Origin':'http://localhost:3000',
				'Access-Control-Allow-Credentials': 'true',
				"methods": "GET"
			} 
		};

		setLoading(true);
		try {
			const response = await axios.get( url, headers);
			if(response){
				setInfo(response.data.data);
				console.log(response.data.data)
				setLoading(false);
			}
			return response;
		} catch (error) {
			setCount(count + 1);
			setLoading(false);
			if (error || error.status !== 200) {
				console.error('failed, retry');
				console.log(count)
				if ((info !== null ) && (info.length > 0)) {
					return;
				} 
			} else {
			throw error;
			};
		};
	};
	
	return (
		<Container fluid className='App' > 
			<Row noGutters>
				<Col className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p className="mt-3 mb-4">Write a tag and click search</p>
					<Search display={display}/>
				</Col>
			</Row>
			<Row noGutters>
				<Col className='App-container'>
				{ (loading || (loading && (info === null))) && 
					<div className="mt-5">
						<Spinner animation="grow" />
					</div>
					
				}
				{ !loading && (info !== null ) && (
					<Container >
						<Row>
							<Col>
								<CardDeck>
									{info.map((e, i) => <Box key={i}  e={e}/>)}
								</CardDeck>
							</Col>
						</Row>
						
					</Container>
				)}
				{ !loading && info && (info.length === 0 ) &&(
					<Image src="https://blog.expertrec.com/wp-content/uploads/2019/01/no_results_found.png" fluid />
				)}
				</Col>
			</Row>
		</Container>
	);
}

export default App;
