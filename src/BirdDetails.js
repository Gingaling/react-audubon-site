import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export default function BirdDetails(props) {
	const [bird, setBird] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://audubon-api.herokuapp.com/api/birds/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setBird(data);
			})
			.catch(console.error());
	}, []);

    
    //this will render if the above if statement is no longer true
    return (
        // normal return 
        )
        
    
        if (!bird) {
      return <p>Loading bird information ...</p>
    }
      
    return (
            <div className='details-container'>
			<img
				src={bird.image}
				alt={bird.name}
			/>
			<div className='details'>
				<h2>{bird.name}}</h2>
				<h3>{bird.genus}</h3>
				<h4>Conservation Status</h4>
				<p>{bird.conservationStatus}</p>
				<a
					href='https://www.audubon.org/field-guide/bird/acadian-flycatcher'
					target='_blank'
					rel='noopener noreferrer'>
					Read More
				</a>
			</div>
		</div>
	);
}
