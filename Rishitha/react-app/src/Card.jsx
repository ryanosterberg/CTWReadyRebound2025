
function Card(props){

    const itemList = props.list;
    const cards = itemList.map((item) => (
        <div className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
    ));

    return(cards);  
}

export default Card; 