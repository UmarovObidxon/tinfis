import React, { Component } from 'react'
import Maindiv1 from '../components/main/maindiv1'
import '../css/main/main.div1.css'
var obj = {
  div5H1:"Нoвинки",
  div5Span: "180 товаров",
  div5A : "Показать все"
}

export default class main extends Component {
  constructor(props){
    super(props);
 
 
  }
  state = {user: []};
  componentDidMount(){
    var url="https://jsonplaceholder.typicode.com/photos"
    fetch(url)
  .then(response => response.json())
  .then(data =>{ this.setState({user:data})} )

  }
  render() {
    return (
      <div className='main'>
        <Maindiv1 data={obj}/>
      </div>
    )
  }
}
