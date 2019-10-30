import React, { Component } from "react";


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Success');
        // console.log('The form was submitted with the following data:');
        // console.log(this.state);
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                <div className="bg-white col-sm-6 offset-lg-3 p-3">

                    <div className="text-stfarm text-center">
                        <div>
                            <h2><strong>ĐĂNG NHẬP</strong></h2>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="control-label offset-lg-1 col-sm-3" htmlFor="userName">Tên đăng nhập</label>
                        <div className="col-sm-7">
                            <input type="text" className="form-control" id="userName" name="userName" required value={this.state.userName} onChange={this.handleChange} />
                        </div>
                        <p className="text-danger">(*)</p>
                    </div>
                    <div className="form-group row">
                        <label className="control-label offset-lg-1 col-sm-3" htmlFor="pwd">Mật khẩu</label>
                        <div className="col-sm-7">
                            <input type="password" className="form-control" id="pwd" name="pwd" required value={this.state.pwd} onChange={this.handleChange} />
                        </div>
                        <p className="text-danger">(*)</p>
                    </div>
                    <div className="form-group row">
                        <div className="offset-lg-4 col-sm-7">
                            <p><a href="#">Quên mật khẩu?</a></p>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-lg-4 col-sm-7">
                            <button type="submit" className="btn btn-warning btn-lg btn-block" id="btnSignIn">Đăng nhập</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-lg-4 col-sm-7">
                            <p>Chưa có tài khoản? <a href="#">Đăng ký ngay!</a></p>
                        </div>
                    </div>

                </div >
            </form>
        )
    }
}
export default SignIn;