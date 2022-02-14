import React from "react";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      tablenumber:[
        {no:"1",id:"1"},
        {no:"2",id:"2"},
        {no:"3",id:"3"},
        {no:"4",id:"4"},
        {no:"5",id:"5"},
    ],
      number:'',
      date:'',
      time:'',
      value:''
    }
  }

  handleOnClick = (value)=>{
    let today = new Date();
    let date = today.getDate() + '-'+(today.getMonth() + 1) + '-'+ today.getFullYear()
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let body ={
      tableNumber:value,
      date:date,
      time:time
    }
    console.log(body)
  }
  render(){
    const {tablenumber} = this.state
    let tname = tablenumber.map(table=>{
      return(
        <div key={table.id}>
          <button onClick={()=>this.handleOnClick(table.no)}>{table.no}</button>
        </div>  
      )
    })
    return (
      <div className="App">
        {tname}
      </div>
    );
  }
}

export default App;
