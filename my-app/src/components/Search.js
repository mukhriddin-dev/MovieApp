import React  from "react";
export default class Search extends React.Component{

state={
  res:''
}
    handleKey=(e)=>{
        if(e.key==='Enter'){
            this.props.getsearch(this.state.res)
            console.log('smm')
        }
    }

render(){

  return(
    <>
    <div className="row">
    <div className="input-field col s6">
      <input  
      id="first_name2"
       type="text" 
       className="validate"
       placeholder='search'
       value={this.state.res}
       onChange={(e)=>(this.setState({res:e.target.value}))}
      onKeyDown={this.handleKey}
       />

    </div>
    <button
     className="btn bt"
     onClick={()=>(
       this.props.getsearch(this.state.res)
       )}
     >Search movie</button>

  </div>


    </>
  )
}

}