import React, { Component } from 'react'
import { Cards, Chart, Country } from './components'
import styles from './App.module.css'
import fetchData from './api'

class App extends Component {

  state = {
    data: {}
  }
 async componentDidMount() {
    const fetchedData = await fetchData();
    console.log('sd',fetchedData)
    this.setState({ data: fetchedData})
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={this.state.data}/>
        <Country/>
        <Chart/>
      </div>
    )
  }
}

export default App
