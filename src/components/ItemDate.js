import './ItemDate.css';

function ItemDate(){
    const date = 20;
    const month = 'June';
    const year = 2018;
    return(
        <div className='item-date'>
            <spam> {date} </spam>
            <spam> {month} </spam>
            <spam> {year} </spam>
        </div>
    );
}

export default ItemDate;
// This is a simple React component that returns an empty div. It is styled using the 'ItemDate.css' file.
// The component is exported as 'ItemDate' for use in other parts of the application.