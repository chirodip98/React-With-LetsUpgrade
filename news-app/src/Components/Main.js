import {React,useState,useEffect} from 'react'



const Main=()=>
{
    let [articles, setarticles]=useState([]);
    let[search,setSearch]=useState("");


    const ReadVal=(value)=>{

        setSearch(value);
    }


    function searchNews()
    {
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=aac2110f08d744f79bbdb26f3c06817a`;

        fetch(url)
        .then((res)=>res.json())
        .then((news)=>{
            setarticles(news.articles)
            console.log(news.articles);
        });
    }


    useEffect(() => {
    
        let url="https://newsapi.org/v2/everything?q=india&apiKey=aac2110f08d744f79bbdb26f3c06817a";

        fetch(url)
        .then((res)=>res.json())
        .then((news)=>{
            setarticles(news.articles)
            console.log(news.articles);
        });
    },[]);

    return(
        <div className="container">
            <div className="padd">
                <div className="filter">
                    <input className="search" onChange={(event)=>{ReadVal(event.target.value)}}  type="search" placeholder={"Enter topic to search"}></input>
                    <button className="btn" onClick={searchNews}>search</button>
                </div>
            <h1>All News</h1>
            {
                articles.length===0 ? <h2> (No Data Found)</h2> :
                articles.map((value,i)=>(
                <div key={i} className="article">
                    <div className="art-img">
                        <img src={value.urlToImage} alt="..."></img>
    
                    </div>
                    <div className="news-detail">
                        <h2>{value.title}</h2>
                        <p>{value.author}</p>
                        <p>{value.description}</p>
                        <p>
                            <a href={value.url} target={"_blank"}>
                            <button className="btn">Read more...</button>
                            </a>
                        </p>

    
                    </div>
                </div>
                ))
            }
           
        </div>
        </div>
    )
}

export default Main;