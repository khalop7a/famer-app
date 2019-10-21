import React, {Component} from "react";
import Banner from "./Banner";
class Body extends Component {
    constructor(props) {
        super(props);
        this.Body = this.Body.bind(this);
    }

    Body() {
        alert("Header home page");
    }

    render() {
        return (
            <div>
                <Banner />
                {/*GIải pháp từ STFARM*/}
                <div className="container">
                    <div className="text-center"><h1 style={{fontWeight: 'bold'}}><span className="text-primary">GIẢI PHÁP </span><span>từ</span><span
                        className="text-warning"> STFARM</span></h1></div>
                    <div className="row">
                        <div className="col-5 text-center"><img src="./picture-stfarm/value.png"/></div>
                        <div className="col">
                            <div className="text-left" style={{height: '80%'}}>STFARM là nền tảng công nghệ giúp kết nối
                                nông dân với các<br/> chuyên gia trong
                                lĩnh
                                vực nuôi trồng tôm và người mua bán tôm giống
                            </div>
                            <div className="row container" style={{height: '20%'}}>
                                <div className="align-content-lg-center btn btn-outline-primary"><a href="#">Tìm hiểu thị trường</a>
                                </div>
                                <div className="align-content-lg-center btn btn-outline-primary"><a href="#">Tìm hiểu STFARM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END*/}
                {/*LỢI ÍCH từ STFARM*/}
                <div style={{background: '#fafafa'}}>
                    <div className="container">
                        <div className="text-center"><h1 style={{fontWeight: 'bold'}}><span className="text-primary">LỢI ÍCH </span><span>từ</span><span
                            className="text-warning"> STFARM</span></h1></div>
                        <div className="row">
                            <div className="col-5 text-center"><img src="picture-stfarm/value.png"/></div>
                            <div className="col">
                                <div className="text-left">
                                    <p>Kết nối nông dân với chuyên gia, nhà cung cấp và đại lí</p>
                                    <p>Trao đổi thương lượng giữa nông dân và nhà cung cấp đại lý</p>
                                    <p>Kiểm định chất lượng tôm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END*/}
                {/*Sử dụng STFARM*/}
                <div className="container">
                    <div className="text-center"><h1 style={{fontWeight: 'bold'}}><span
                        className="text-primary">SỬ DỤNG </span><span className="text-warning"> STFARM </span><span>như thế nào?</span>
                    </h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="text-left">
                                <ol>
                                    <li>Đăng nhập nền tảng STFARM</li>
                                    <li>Cung cấp thông tin về tôm giống</li>
                                    <li>Cung cấp thông tin về đơn hàng cần đặt</li>
                                    <li>Đăng tải các thông tin lên nền tảng</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-5 text-center"><img src="picture-stfarm/value.png"/></div>
                    </div>
                </div>
                {/*END*/}
                {/*Bắt đầu cùng STFARM*/}
                <div style={{background: '#fafafa'}}>
                    <div className="container">
                        <div className="text-center"><h1 style={{fontWeight: 'bold'}}><span className="text-primary">BĂT ĐẦU </span><span>cùng</span><span
                            className="text-warning"> STFARM </span></h1>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h5 className="text-center" style={{fontWeight: 'bold'}}>Tôi là nông dân</h5>
                                <p>Với STFARM bạn có thể......</p>
                                <p>
                                    A wiki is run using wiki software,
                                    otherwise known as a wiki engine. A w
                                    iki engine is a type of content manag
                                    ement system, but it differs from most
                                    other such systems, including blog softwa
                                    re, in that the content is created without
                                    defined owner or leader, and wikis have li
                                    e inherent structure, allowing structure
                                    to emerge according to the needs of the users.
                                    [2] There are dozens of different wiki engi
                                    , both standalone and part of other software,
                                </p>
                            </div>
                            <div className="col-4">
                                <h5 className="text-center" style={{fontWeight: 'bold'}}>Tôi là nông dân</h5>
                                <p>Với STFARM bạn có thể......</p>
                                <p>
                                    A wiki is run using wiki software,
                                    otherwise known as a wiki engine. A w
                                    iki engine is a type of content manag
                                    ement system, but it differs from most
                                    other such systems, including blog softwa
                                    re, in that the content is created without
                                    defined owner or leader, and wikis have li
                                    e inherent structure, allowing structure
                                    to emerge according to the needs of the users.
                                    [2] There are dozens of different wiki engi
                                    , both standalone and part of other software,
                                </p>
                            </div>
                            <div className="col-4">
                                <h5 className="text-center" style={{fontWeight: 'bold'}}>Tôi là nông dân</h5>
                                <p>Với STFARM bạn có thể......</p>
                                <p>
                                    A wiki is run using wiki software,
                                    otherwise known as a wiki engine. A w
                                    iki engine is a type of content manag
                                    ement system, but it differs from most
                                    other such systems, including blog softwa
                                    re, in that the content is created without
                                    defined owner or leader, and wikis have li
                                    e inherent structure, allowing structure
                                    to emerge according to the needs of the users.
                                    [2] There are dozens of different wiki engi
                                    , both standalone and part of other software,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END*/}
                {/*DỊch vụ từ STFARM*/}
                <div className="container">
                    <div className="text-center"><h1 style={{fontWeight: 'bold'}}><span
                        className="text-primary">DỊCH VỤ </span><span>từ</span><span
                        className="text-warning"> STFARM </span></h1>
                    </div>
                    {/*<div class="row">*/}
                    <div className="container" style={{marginLeft: '10%'}}>
                        <div className="row">
                            <div className="col-6 icon"><img src="picture-stfarm/Asset%205.png"/> Trợ giúp kinh doanh
                            </div>
                            <div className="col icon"><img src="picture-stfarm/Asset%206.png"/> Nền tảng số</div>
                        </div>
                        <div className="row">
                            <div className="col-6 icon"><img src="picture-stfarm/Asset%208.png"/> Lời khuyên từ chuyên
                                gia
                            </div>
                            <div className="col icon"><img src="picture-stfarm/Asset%207.png"/> Hỗ trợ từ chính quyền
                            </div>
                        </div>
                    </div>
                    {/*</div>*/}
                </div>
                {/*END*/}
            </div>
        );
    } ;
}

export default Body;
