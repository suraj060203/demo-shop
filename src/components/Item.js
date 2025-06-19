import './Item.css';

function Item(props){
    const ItmeName = props.name;
    console.log(ItmeName);
    return(
        <p className="nirma">{ItmeName}</p>
    );
}

export default Item;
// This is a simple React component that returns a paragraph element with the text "Nirma".