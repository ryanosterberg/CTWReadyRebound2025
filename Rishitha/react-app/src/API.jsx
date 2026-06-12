import {useEffect, useState} from "react";

function API(){
    const[data, setData] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").
        then((response) => response.json()).
        then((data) => {setData(data); setIsLoading(false);}).
        catch((error) => {setError("Failed to load data"); setIsLoading(false);});
    }, []);

    return (
        <>
            {isLoading ? <div>Loading...</div> : 
            error ? <div>{error}</div> : 
            data.map((item) => <div key={item.id}>{item.title}</div>)};
        </>
    )
}

export default API;