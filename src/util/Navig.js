import "bootstrap/dist/css/bootstrap.min.css";
import * as ICON from "react-bootstrap-icons";
export default function Navig() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container-fluid " align="center">
          <a className="navbar-brand mx-auto" href="/">
            <ICON.BookmarkDash width="30" height="35" color="orange" />
            SOTEY LOTTERY
            <ICON.BookmarkDash width="30" height="35" color="orange" />
          </a>
        </div>
      </nav>
    </div>
  );
}
