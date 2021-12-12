import React from "react";
import Films from "./Films";
import Search from "./Search";
import Loader from "./Loader";
export default class MainApp extends React.Component{

  state={
    movie:[],
    loading:true
  }
  

  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=77d01f6c&s=iron')
    .then(response=>response.json())
    .then(result=>this.setState({movie:result.Search}))
  }

  getsearch=(txt)=>{
this.setState({loading:true})
    fetch(`http://www.omdbapi.com/?apikey=77d01f6c&s=${txt}`)
    .then(response=>response.json())
    .then(result=>this.setState({movie:result.Search, loading:false}))
  }


render(){
  
  return(
    <div className="main">
      <Search getsearch={this.getsearch}/>


    {this.state.loading ?  <Loader/>:<Films movie={this.state.movie}/> }
    </div>
  
  )
}

}