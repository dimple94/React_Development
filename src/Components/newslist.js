import React from 'react';

const newsList = (props) =>{
    //console.log(props);
    
    const items= props.news.map((item)=>{
        return(
            <div key={item.id}>
                <h2>{item.title}</h2>
                <div>{item.feed}</div>
            </div>
        )
    })
    return(
        <div>
            {items}
            </div>
    )
   
}

export default newsList;