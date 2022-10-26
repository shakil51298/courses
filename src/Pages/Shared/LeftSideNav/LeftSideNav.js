import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        {
                            category.id == 10 ? <Link to="/">{category.name}</Link>
                            :
                            <a href={`/category/${category.id}`}>{category.name}</a>
                        }
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;