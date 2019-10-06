import React, { Component } from "react";

class ShrimpOrder extends Component {
  constructor(props) {
    super(props);
    this.submitShrimpOrderForm = this.submitShrimpOrderForm.bind(this);
  }
  //Funtions
  submitShrimpOrderForm() {
    alert("submitShrimpOrderForm");
  }
  render() {
    return (
      <div className="bg-white col-sm-8 offset-lg-2 p-5">
        <div>
          <h2 className="text-stfarm text-center">
            <strong>THÔNG TIN THU MUA TÔM</strong>
          </h2>
        </div>
        <div>
          <form className="col-sm-10 offset-lg-1 ">
            <div className="form-group row">
              <label for="txtPhoneNumber" className="col-sm-5 col-form-label">
                Số điện thoại
              </label>
              <div className="col-sm-7">
                <input type="text" id="txtPhoneNumber" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="txtAddress" className="col-sm-5 col-form-label">
                Địa chỉ
              </label>
              <div className="col-sm-7">
                <input type="text" id="txtAddress" className="form-control" />
              </div>
            </div>
            <hr />
            <div className="form-group row">
              <label for="slShrimpType" className="col-sm-5 col-form-label">
                Loại tôm
              </label>
              <div className="col-sm-7">
                <select id="slShrimpType" className="form-control">
                  <option selected value="-1">
                    Chọn loại tôm
                  </option>
                  <option value="0">Tôm thẻ 80 con/kg</option>
                  <option value="1">Tôm thẻ 50 con/kg</option>
                  <option value="2">Tôm sú 30 con/kg</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label for="slQuantity" className="col-sm-5 col-form-label">
                Số lượng
              </label>
              <div className="col-sm-4">
                <input type="text" id="slQuantity" className="form-control" />
              </div>
              <div className="col-sm-3">
                <select id="slUnit" className="form-control ">
                  <option selected value="-1">
                    Chọn đơn vị
                  </option>
                  <option value="0">kg</option>
                  <option value="1">con</option>
                  <option value="2">bao</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label for="dtpEstimatedBuyDay" className="col-sm-5 col-form-label">
                Thời gian dự tính mua
              </label>
              <div className="col-sm-7">
                <input type="date" id="dtpEstimatedBuyDay" className="form-control" />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <input type="submit" value="Thêm" className="btn btn-primary btn-stfarm mr-2" id="btnSubmit" onClick={this.submitShrimpOrderForm}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ShrimpOrder;
