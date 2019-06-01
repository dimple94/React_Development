import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import component
import Header from './Components/header';
import NewsList from './Components/newslist';

import JSON from './db.json';

// const App = () =>{
//     // console.log("Data in JSON :: ", JSON);
//     return (
//         <div>
           
//             <Header/>
//         </div>
//     )
// }

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            news:JSON,
            filteredState: JSON


        }
    }

    filteredNews(keywords){
        console.log("News from Keyword:", keywords);

        let filteredNews = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords.toUpperCase()||keywords.toLowerCase()) > -1
        })

        this.setState({filteredState:filteredNews});

    }
    render(){
        return(
            <div>
                <Header newsSearch={keywords=>this.filteredNews(keywords)}/>
                <NewsList news={this.state.filteredState}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.querySelector("#root"));


