import React, { Component } from "react";

class SignIn extends Component {
    render() {
        return (
           <div>
               <div className="col-sm-6  bg-danger">
                   <div>
                       <h2 className="text-stfarm text-center"><strong>ĐĂNG NHẬP</strong></h2>
                   </div>
                   <div className="panel panel-default" style={{border: 'none'}}>
                       <div className="panel-body">
                           <form className="form-horizontal " action="/action_page.php">
                               <div className="form-group">
                                   <label className="control-label col-sm-3" htmlFor="email">Tên đăng nhập</label>
                                   <div className="col-sm-6">
                                       <input type="email" className="form-control" id="email" placeholder="Nhập vào email" name="email" />
                                   </div>
                                   <p style={{color: 'red'}}>(*)</p>
                               </div>
                               <div className="form-group">
                                   <label className="control-label col-sm-3" htmlFor="pwd">Mật khẩu</label>
                                   <div className="col-sm-6">
                                       <input type="password" className="form-control" id="pwd" placeholder="Nhập vào mật khẩu" name="pwd" />
                                   </div>
                                   <p style={{color: 'red'}}>(*)</p>
                               </div>
                               <div className="form-group">
                                   <div className="col-sm-offset-3 col-sm-9">
                                       <p>Quên mật khẩu?</p>
                                   </div>
                               </div>
                               <div className="form-group">
                                   <div className="col-sm-offset-3 col-sm-9">
                                       <button type="submit" className="btn btn-primary">Đăng nhập</button>
                                   </div>
                               </div>
                               <div className="form-group">
                                   <div className="col-sm-offset-3 col-sm-9">
                                       <p>Chưa có tài khoản? <a href="#" style={{color: 'red'}}>Đăng kí ngay!</a></p>
                                   </div>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div>

        )
    }
}
export default SignIn;