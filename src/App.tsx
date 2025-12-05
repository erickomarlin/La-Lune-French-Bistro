import { FaRegSnowflake } from "react-icons/fa";
import "./App.css";
import img1 from "./assets/img-display1.png";
import img2 from "./assets/img-display2.png";
import { RiDoubleQuotesL } from "react-icons/ri";

function App() {
  return (
    <div>
      <div id="page1">
        <h4>
          <strong>LA LUNE FRENCH BISTRO</strong>
        </h4>
        <h1>A TASTE OF PARIS</h1>
        <a href="#page7" className="dine-with-us">
          Dine With Us
        </a>
      </div>

      <div id="page2">
        <div className="icon">
          <FaRegSnowflake />
        </div>
        <p className="hours">HOURS</p>
        <div className="operational-hours">
          <h2 className="weekdays">Weekdays: 11:00am - 9:00pm</h2>
          <h2 className="weekends">Weekends: 11:30am - 10:30pm</h2>
          <h2 className="public-holidays">Closed on public holidays</h2>
        </div>
        <div className="icon">
          <FaRegSnowflake />
        </div>
      </div>

      <div id="page3">
        <div className="upper">
          <p className="flavors-of-france">FLAVORS OF FRANCE</p>
          <a href="#page6a" className="view-full-menu">
            View full menu
          </a>
        </div>
        <div className="lower">
          <div className="appetizers">
            <a className="menu-link" href="#page6a">
              MOUTHWATERING APPETIZERS
            </a>
          </div>
          <div className="mains">
            <a className="menu-link" href="#page6b">
              WHOLESOME MAINS
            </a>
          </div>
          <div className="sweets">
            <a className="menu-link" href="#page6c">
              SWEET ENDINGS
            </a>
          </div>
        </div>
      </div>

      <div id="page4">
        <div className="image-part">
          <img className="left-img" src={img1}></img>
          <img className="right-img" src={img2}></img>
        </div>
        <div className="description-part">
          <h2 className="french-connection">FRENCH CONNECTION</h2>
          <p className="connection-par">
            La Lune French Bistro was born from a love of all things Paris. Our founder and chef Ingrid Correa spent three amazing years in the City of Love, training under the industry's best. She brought home everything she learned—the
            flavors, the feelings, the family-style cafe—so that you can get a taste of Paris, too.
          </p>
          <a className="book-now" href="#page7">
            Book now
          </a>
        </div>
      </div>

      <div id="page5">
        <h2 className="love-for-la-lune">LOVE FOR LA LUNE</h2>
        <div className="testimoni">
          <div className="testimoni1">
            <RiDoubleQuotesL />
            <p className="testimoni-title">TRANSPORTED TO PARIS</p>
            <p className="testimoni-par">One bite and I felt like I was back in France. Chef Ingrid and her team have outdone themselves!</p>
            <p className="testimoni-customer">- Teddy</p>
          </div>
          <div className="testimoni2">
            <RiDoubleQuotesL />
            <p className="testimoni-title">LOVELY BISTRO</p>
            <p className="testimoni-par">The ambience was great - and the food even better! Simple recipes done well, with top-notch ingredients. Will be back!</p>
            <p className="testimoni-customer">- Dani</p>
          </div>
          <div className="testimoni3">
            <RiDoubleQuotesL />
            <p className="testimoni-title">TRULY A TREAT</p>
            <p className="testimoni-par">Eating here made me miss Paris so much. What a treat! I will be bringing my client meetings here. </p>
            <p className="testimoni-customer">- Carly</p>
          </div>
        </div>
      </div>

      <div id="page6a">
        <div className="line"></div>
        <h2 className="menu">MENU</h2>
        <p className="menu-tag-line">Paris is a melting pot, as our food can attest. Take a bite and savor la vie délicieuse!</p>
        <p className="menu-title-appetizers">APPETIZERS</p>
        <div className="menu-list-appetizers">
          <ul>
            <li className="menu-name">ONION SOUP</li>
            <li className="price">$9</li>
            <li className="menu-name">WARM GOAT CHEESE SALAD</li>
            <li className="price">$10</li>
            <li className="menu-name">TARTARE DE SALMON</li>
            <li className="price">$12</li>
            <li className="menu-name">ESCARGOTS DE BOURGOGNE</li>
            <li className="price">$11</li>
          </ul>
        </div>
      </div>

      <div id="page6b">
        <p className="menu-title-mains">MAINS</p>
        <div className="menu-list-appetizers">
          <ul>
            <li className="menu-name">BEEF BURGUNDY STEW</li>
            <li className="price">$24</li>
            <li className="menu-name">ROAST CHICKEN WITH TARRAGON</li>
            <li className="price">$21</li>
            <li className="menu-name">SEARED SCALLOPS</li>
            <li className="price">$26</li>
            <li className="menu-name">RATATOUILLE</li>
            <li className="price">$18</li>
          </ul>
        </div>
        <p className="menu-title-desserts">DESSERTS</p>
        <div className="menu-list-appetizers">
          <ul>
            <li className="menu-name">CREME BRULEE</li>
            <li className="price">$16</li>
            <li className="menu-name">TARTE TATIN</li>
            <li className="price">$18</li>
            <li className="menu-name">DARK CHOCOLATE MOUSSE</li>
            <li className="price">$20</li>
            <li className="menu-name">PROFITEROLES</li>
            <li className="price">$20 / 6 PCS</li>
          </ul>
        </div>
      </div>

      <div id="page6c">
        <p className="menu-title-appetizers">DRINKS</p>
        <div className="menu-list-appetizers">
          <ul>
            <li className="menu-name">VIN DU JOUR</li>
            <li className="price">$10 / GLASS</li>
            <li className="menu-name">FRENCH LONG COFFEE</li>
            <li className="price">$10</li>
            <li className="menu-name">SPARKLING WATER</li>
            <li className="price">$8</li>
          </ul>
        </div>
        <div className="menu-img"></div>
      </div>

      <div id="page7">
        <h2 className="see-you-soon">SEE YOU SOON</h2>
        <p className="head">VISIT US</p>
        <p>123 Anywhere St. Any City, ST 12345</p>
        <p className="italic">Our restaurant has accessible parking spaces and restrooms.</p>
        <p className="head">CALL US FOR DELIVERIES & RESERVATIONS</p>

        <p className="phone-number">1234567890</p>

        <p className="head">FOLLOW US ON OUR SOCIALS</p>

        <p className="email">@reallygreatsite</p>
      </div>

      <div id="page8">
        <h2 className="la-lune-french-bistro">LA LUNE FRENCH BISTRO</h2>
      </div>
    </div>
  );
}

export default App;
