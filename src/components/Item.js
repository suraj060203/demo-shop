import './Item.css';

function Item(props){
    const ItmeName = props.name;
    console.log(ItmeName);
    return(
        <div>
            <p className="nirma">{ItmeName}</p>
            {props.children}
        </div>
    );
}

export default Item;
// This is a simple React component that returns a paragraph element with the text "Nirma".