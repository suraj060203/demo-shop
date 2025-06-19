import './ItemDate.css';

function ItemDate(props){
    const date = 20; // You can replace this with props.day if you want to use dynamic values
    // const date = props.day; // Uncomment this line to use the day prop
    const month = props.month || 'January'; // Default to 'January' if month prop is not provided
    // const month = 'January'; // Uncomment this line to use a static month value
    const year = props.year;
    return(
        <div className='item-date'>
            <spam> {date} </spam>
            <spam> {month} </spam>
            <spam> {year} </spam>
            {props.children}
            {props.className}
        </div>
    );
}

export default ItemDate;
// This is a simple React component that returns an empty div. It is styled using the 'ItemDate.css' file.
// The component is exported as 'ItemDate' for use in other parts of the application.