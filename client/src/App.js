import React, {Component} from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';






class App extends Component {
  constructor (props) {
    super(props);
    
    this.state = {  
    }
}
  componentDidMount() {}
  render () {
    

    return (
      <div>
        <Header />
        <div className="footerFixed">
        <Footer />
        </div>
      
      </div>
    );
  }
}

export default App;