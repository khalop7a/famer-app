import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUserAlt,
  faPhoneAlt,
  faPhoneSquareAlt,
  faMailBulk,
  faFileWord,
  faAt,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
class Footer extends Component {
  constructor(props) {
    super(props);
    // this.Footer = this.Footer.bind(this);
  }

  render() {
    return (
      <div className="text-white" style={{ backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)" }}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h4 style={{ fontWeight: "bold" }}>
                <p>GIỚI THIỆU</p>
              </h4>
              <Link to="/">
                <p className="text-white">Về STFARM</p>
              </Link>
              <Link to="/ve-chung-toi">
                <p className="text-white">Thành viên</p>
              </Link>
              <Link to="/">
                <p className="text-white">Hỏi đáp</p>
              </Link>
            </div>
            <div className="col-3">
              <h4 style={{ fontWeight: "bold" }}>
                <p>LIÊN HỆ</p>
              </h4>
              <p>
                <FontAwesomeIcon icon={faPhoneSquareAlt} className="mr-2" />
                0292 3678 090
              </p>
              <p>
                <FontAwesomeIcon icon={faAt} className="mr-2" />
                info@stfarm.com
              </p>
              <p>
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                stfarm.com.vn
              </p>
            </div>
            <div className="col-6">
              <h4 style={{ fontWeight: "bold" }}>
                <p>GÓP Ý</p>
              </h4>
              {/*form footer*/}
              <form>
                <input type="text" name="your-email" placeholder="Email của bạn" className="form-control" />
                <br />
                <textarea className="form-control" rows="3"></textarea>
                <br />
                <button type="submit" value className="btn btn-light">
                  GỬI
                </button>
              </form>
              {/*form footer end*/}
            </div>
          </div>
          <div className="">
            <hr />
            <p className="text-center">Copyright © 2019. Designed by STFARM</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
