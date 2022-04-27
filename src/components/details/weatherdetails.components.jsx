import './weatherdetails.styles.css'

const weatherdetails = () => {
return(
    <>
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <h1 align="center" style={{marginTop: '10px'}}>Weather APP</h1>
            <p>DELHI</p>
          </div>
          <div className="temp">
            <h1>60 &#176;C</h1>
          </div>
          <div className="description">
            <p>Delhi|India,clouds(Sunday 1 April)</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65&#176;C</p>
            <p>feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>humidity</p>
          </div>
          <div className="winds">
            <p className="bold">12MPH</p>
            <p>wind speed</p>
          </div>

        </div>

      </div>
    </div>
    </>

)
}
export default weatherdetails