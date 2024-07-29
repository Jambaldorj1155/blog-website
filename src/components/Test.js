import React, { useState, useEffect } from "react";
import axios from "axios";

export const Test = () => {
    let [articles, setArticles] = useState([])
    
    useEffect(() => {
        const response = axios.get("https://dev.to/api/articles").then((response) => {

            setArticles(response.data)
          
        })
    },[])
    
    

    return (
        <>
            {articles.map((article) => (<li>{article.title}</li>))}
        </>
    );
}
