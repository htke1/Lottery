import "./body.css";
import Picture from "./book.jpg";
import Calendar from "./schedule.jpg";
export default function LotteryCard() {
  return (
    <div className="container">
      <div className="row booking">
        <div className="textCol col-6 ">
          <h2>Get your lucky number!</h2>
          <h6>( Check horoscope if needed. )</h6>
          <br />
          <button className="btn btn-secondary">Book here</button>
        </div>
        <div className="picCol col-6 ">
          <img className="bookPic" src={Picture} alt="..." />
        </div>
      </div>
      <div className="row Schedule">
        <div className="picCol col-6 ">
          <img className="bookPic" src={Picture} alt="..." />
        </div>
        <div className="textCol col-6 ">
          <h2>Check the time slot and schedule!</h2>
          <h6>( Will be shared in SocialMedia also )</h6>
          <br />
          <button
            onclick={(window.location.href = "/Booking")}
            className="btn btn-secondary"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
