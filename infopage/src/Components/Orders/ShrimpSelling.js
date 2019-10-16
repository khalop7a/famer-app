import React, { Component } from "react";

class ShrimpSelling extends Component {
  constructor(props) {
    super(props);
    this.submitShrimpSellingForm = this.submitShrimpSellingForm.bind(this);
  }
  //Funtions
  submitShrimpSellingForm() {
    alert("submitShrimpSellingForm");
  }
  render() {
    return (
      <div className="bg-white col-sm-8 offset-lg-2 p-5">
        <div>
          <h2 className="text-stfarm text-center">
            <strong>THÔNG TIN TÔM CẦN BÁN</strong>
          </h2>
        </div>
        <div>
          <form className="col-sm-10 offset-lg-1 ">
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
              <label for="slShrimpSizing" className="col-sm-5 col-form-label">
                Loại kích thước
              </label>
              <div className="col-sm-7">
                <select id="slShrimpSizing" className="form-control">
                  <option selected value="-1">
                    Chọn loại kích thước
                  </option>
                  <option value="0">Nhỏ</option>
                  <option value="1">Vừa</option>
                  <option value="2">Lớn</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label for="txtEstimatedQuality" className="col-sm-5 col-form-label">
                Sản lượng ước tính lúc thu hoạch
              </label>
              <div className="col-sm-7">
                <input type="text" id="txtEstimatedQuality" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="dtpEstimatedCollectDay" className="col-sm-5 col-form-label">
                Thời gian dự tính lúc thu hoạch
              </label>
              <div className="col-sm-7">
                <input type="date" id="dtpEstimatedCollectDay" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="btnChooseFile" className="col-sm-5 col-form-label">
                Hình ảnh
              </label>
              <div className="col-sm-7">
                <input type="file" className="form-control-file" id="btnChooseFile" multiple="multiple" />
              </div>
            </div>
            <div className="form-group row">
              <label for="slShrimpSizing" className="col-sm-5 col-form-label">
                Số lượng
              </label>
              <div className="col-sm-4">
                <input type="text" id="txtEstimatedQuality" className="form-control" />
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
              <label for="dtpEstimatedCollectDay" className="col-sm-5 col-form-label">
                Số điện thoại
              </label>
              <div className="col-sm-7">
                <input type="text" id="txtEstimatedQuality" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="dtpEstimatedCollectDay" className="col-sm-5 col-form-label">
                Người bán
              </label>
              <div className="col-sm-7">
                <input type="text" id="txtEstimatedQuality" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="dtpEstimatedCollectDay" className="col-sm-5 col-form-label">
                Địa chỉ
              </label>
              <div className="col-sm-7">
                <input type="text" id="txtEstimatedQuality" className="form-control" />
              </div>
            </div>
            <div className="text-center">
              <input type="submit" value="Đăng" className="btn btn-primary btn-stfarm mr-3" id="btnSubmit" onClick={this.submitShrimpSellingForm} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ShrimpSelling;
