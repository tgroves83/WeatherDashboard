function ListGroup() {
    
    let items = ["Ottawa", "Toronto", "Hamilton", "Thunder Bay", "Barrie", "Perth"];
    items = [];
    
    const GetMessage = () => {
        return items.length === 0 ? <p>No items found</p> : null
    }
    return ( 
        <>
            <h2>Countries</h2>
            {GetMessage()}
            <ul className = "list-group">
                {items.map((item) =><li key={item}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;