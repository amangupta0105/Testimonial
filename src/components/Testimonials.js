import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import Card from "./Card";
import {useState} from 'react';
import './Testimonial.css';

function Testimonials(props) {
    const reviews = props.reviews;
    const [index, setindex] = useState(0);

    function leftclickHandler() {
        if (index <= 0) {
            setindex(reviews.length - 1)
        } else {
            setindex(index - 1)
        }
    }
    function rightclickHandler() {
        if (index < reviews.length - 1) {
            setindex(index + 1)
        } else {
            setindex(0)
        }
    }
    function surpiseHandler() {
        setindex(Math.floor(Math.random() * (reviews.length)));
    }

    return (
        <div className='testimonials'>
            <Card reviews={reviews[index]}/>
            <div className='nav-buttons'>
                <AiOutlineLeft fontSize='1.5rem' onClick={leftclickHandler}/>
                <AiOutlineRight fontSize='1.5rem' onClick={rightclickHandler}/>
            </div>
            <div>
                <button onClick={surpiseHandler} className='surprise-button'>Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials;