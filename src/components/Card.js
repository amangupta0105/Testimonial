import {BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from "react-icons/bi";
import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <div>
                <img src={props.reviews.image} alt="img" className="card-img"/>
            </div>
            <div>
                <h3>
                    {props.reviews.name}
                </h3>
            </div>
            <div>
                <h4>
                    {props.reviews.job}
                </h4>
            </div>
            <div>
                <BiSolidQuoteAltLeft/>
            </div>
            <div>
                <p>
                    {props.reviews.text}
                </p>
            </div>
            <div>
                <BiSolidQuoteAltRight/>
            </div>
        </div>
    )
}

export default Card;