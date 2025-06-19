import './Card.css';

function Card(props) {
    // The Card component is a simple wrapper that applies a CSS class to its children.
    // It can be used to style a section of the application consistently.
    return (
        <div className='card'>
            {props.children}
        </div>
    );
}

export default Card;
// This component is exported as 'Card' for use in other parts of the application.