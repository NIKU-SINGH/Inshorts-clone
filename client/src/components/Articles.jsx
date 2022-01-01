
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import { getNews } from "../service/api";

// components
import Article from "./Article";


const Articles = ()=>{
    
    const [news,setNews] =  useState([]);
    const [page,setPage] = useState(0);

    const dailyNews = async()=>{
        let response = await getNews(page);
        console.log( setNews([...new Set([...news, ...response.data])]));
        setNews([...new Set([...news, ...response.data])]);
    }
    useEffect(() =>{
        dailyNews();
    },[page]);

    return(
        <InfiniteScroll
            dataLength={ news.length }
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                  news.map(article =>(
                    <Article article={article} />       
                ))
            }
        </InfiniteScroll>
    )
};

export default Articles;