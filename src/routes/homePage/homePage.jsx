import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";


function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>100+ Properties</h2>
            </div>
            <div className="box">
              <h2>Property Ready</h2>
            </div>
            <div className="box">
              <h2>Find a home you'll love
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/homepage.jpg" alt="" />
      </div>
      
    </div>
  );
}

export default HomePage;
