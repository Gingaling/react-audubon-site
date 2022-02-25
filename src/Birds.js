import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Birds(props) {
	const [birds, setBirds] = useState([]);

	const url = 'https://audubon-api.herokuapp.com/api/birds';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setBirds(data);
			})
			.catch(console.error());
	}, []);

	return (
		<section className='container'>
			{birds.map((bird) => {
				return (
					<Link to={`details/${bird.id}`} key={bird.id}>
						<div className='card'>
							<div className='card-image'>
								<img src={bird.image} alt={birds.genus} />
							</div>
							<div className='card-title'>
								<h3>{bird.name}</h3>
							</div>
						</div>
					</Link>
				);
			})}
		</section>
	);
}
