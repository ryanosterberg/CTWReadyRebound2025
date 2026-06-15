
function Card(props){

    const itemList = props.list;
    const cards = itemList.map((item) => (
        <div className="card">
            <p>{item.description}</p>
            <h2>{item.title}</h2>
            
        </div>
    ));

    return(cards);  
}

export default Card; 