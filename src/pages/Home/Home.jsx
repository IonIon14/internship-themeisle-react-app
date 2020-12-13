import React, {useState, useEffect} from 'react'
import CardList from "../../components/CardList/CardList";
import './Home.scss'

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
            .then(res => res.json())
            .then((data) => {
                setPosts(data);
            })
            .catch(console.log)
    });

    return (
        <div className="my-posts">
            <CardList posts={posts}/>
        </div>
    );

};

export default HomePage;
