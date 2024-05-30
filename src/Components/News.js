import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News  = (props) => {

  const[articles,setArticles] = useState([])
  const[Loading,setLoading] = useState(true)
  const[page,setPage] = useState(1)
  const[totalresult,setTotalresult] = useState(0)

  
 const UpdateNews =  async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&Category=${props.category}&apikey=a4e0a87f31064215a01cbf8ff2210491&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ Loading: true })
    props.setProgress(30)
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(parsedata.articles)
    setTotalresult(parsedata.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>{
    UpdateNews();
  },[])

  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&Category=${props.category}&apikey=a4e0a87f31064215a01cbf8ff2210491&pageSize=${props.pageSize}`;
  //   // this.setState({Loading:true})
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   // console.log(parsedata);
  //   // this.setState({articles:parsedata.articles,totalresult:parsedata.totalResults,
  //   //   Loading:false

  //   // })
  //   this.UpdateNews();
  // }

  // handlepreclick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&Category=${props.category}&apiKey=a4e0a87f31064215a01cbf8ff2210491&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({Loading:true})
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   // console.log(parsedata);
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.UpdateNews();

  // }

  // handleNextclick = async () => {
  //   //  if(!(this.state.page + 1 > Math.ceil(this.state.totalresult/props.pageSize))){
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&Category=${props.category}&apiKey=a4e0a87f31064215a01cbf8ff2210491&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //  this.setState({Loading:true})
  //   //   let data = await fetch(url);
  //   //   this.state.Loading = true;
  //   //   let parsedata = await data.json();
  //   //   console.log(parsedata);
  //   //}
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.UpdateNews();
  // }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

 const fetchMoreData = async() =>{
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&Category=${props.category}&apikey=a4e0a87f31064215a01cbf8ff2210491&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(articles.concat(parsedata.articles))
    setTotalresult(parsedata.totalResults)
  }

    return (
      <>  
        {Loading && <Spinner/> }
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalresult}
          loader={<Spinner />}
        >
      
          <div className="container" style={{marginTop:'70px'}}>
          <h1>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          <div className="row"style={{marginTop:'20px'}} >
            {articles.map((element,index) => {
              return <div className="col-md-4" key={index}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} Description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                <br />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between" >
         <button disabled={this.state.page<=1} onClick={this.handlepreclick} type="button" className="btn btn-dark">&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalresult/props.pageSize)} type="button" onClick={this.handleNextclick} className="btn btn-dark">Next &rarr;</button>
         </div>   */}
     </>
    )
  }


 News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: 'general',
  totalResults: 0

}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
