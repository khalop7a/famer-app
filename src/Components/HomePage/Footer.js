import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    // this.Footer = this.Footer.bind(this);
  }

  render() {
    return (
      <div>
        {/*form footer*/}
        <form className="bg-stfarm text-white">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <h4 style={{ fontWeight: "bold" }}>GIỚI THIỆU</h4>
                <div>Về STFARM</div>
                <div>Thành viên</div>
                {/* <div>Hỏi đáp</div> */}
                <div><a href="#">Hỏi đáp</a></div>
              </div>
              <div className="col-3">
                <h4 style={{ fontWeight: "bold" }}>LIÊN HỆ</h4>
                <div>0292 3678 090</div>
                <div>info@stfarm.com</div>
                <div>stfarm.com.vn</div>
              </div>
              <div className="col-6">
                <h4 style={{ fontWeight: "bold" }}>GÓP Ý</h4>
                <input type="text" name="your-email" placeholder="Email của bạn" className="form-control" />
                <br />
                <textarea className="form-control" rows="3"></textarea>
                <br />
                <button type="submit" value className="btn btn-light">
                  GỬI
                </button>
              </div>
            </div>
          </div>
        </form>
        {/*END*/}
      </div>
    );
  }
}
export default Footer;
