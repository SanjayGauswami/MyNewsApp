import React, { Component } from 'react'

const NewsItem  = (props) => {
  
      let {title, Description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div>
       <div className="card" style={{width: "25rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}> 
    {source}
   
  </span>
  <img  height={200} src={!imageUrl?"https://c7.alamy.com/comp/PR1RFW/news-logo-illustration-PR1RFW.jpg":imageUrl} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{Description}...</p>
    <p className="card-text"> by {author?author:"Unknown"} on { new Date(date).toGMTString()}</p>
    <a rel="noreferrer" href={newsUrl} target= "_blank" className="btn btn-primary bg-success">Read More..</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
