import React, {Component} from "react";

class Footer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.Footer = this.Footer.bind(this);
    // }

    render() {
        return (
            <div>
                {/*form footer*/}
                <form className="bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <h4 style={{fontWeight: 'bold'}}>GIỚI THIỆU</h4>
                                <div>Về STFARM</div>
                                <div>Thành viên</div>
                                <div>Hỏi đáp</div>
                            </div>
                            <div className="col-3">
                                <h4 style={{fontWeight: 'bold'}}>LIÊN HỆ</h4>
                                <div>0292 3678 090</div>
                                <div>info@stfarm.com</div>
                                <div>stfarm.com.vn</div>
                            </div>
                            <div className="col-6">
                                <h4 style={{fontWeight: 'bold'}}>GÓP Ý</h4>
                                <input type="text" name="your-email" placeholder="Email của bạn"/><br/>
                                <input type="text" name="your-cmt" placeholder="Góp ý........."/><br/>
                                <button type="submit" value>GỬI</button>
                            </div>
                        </div>
                    </div>
                </form>
                {/*END*/}
            </div>
        );
    }
};
export default Footer;
