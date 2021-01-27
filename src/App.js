import React from 'react';
import './App.css';


class App extends React.Component {
  state = {points:0};
  dollarAmount = [120,100,75,200,34];
  points = 0;


  calculatePoint =() =>{
    for (let point of this.dollarAmount){
      if(point>50){
        if(point>100? this.points += (point-100)*2+50:this.points += point-50);
      }
      console.log(this.points);
      }
      this.setState({points:this.points});
    console.log("Total points " + this.points);

  }
 render(){
  return (
    <div className="App">
      <div id="inputc">
        <h1>Data set</h1>
        <h3>{this.dollarAmount + " , "}</h3>
        <button onClick={this.calculatePoint}>Calculate Points</button>
        <div className="total">Congratulations you've accumulated {this.points} for the month!</div>
      </div>
    </div>
  );
}
}

export default App;
