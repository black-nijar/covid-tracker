import React, { Component } from "react";
import { Cards, Chart, Country } from "./components";
import styles from "./App.module.css";
import fetchData from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID-19-<span style={{color: 'red'}}>LIVE</span></h1>
        <Cards data={data} />
        <Country handleCountry={this.handleCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
