import React, { Component } from "react";

class ShrimpAds extends Component {
  constructor(props) {
    super(props);
    this.submitShrimpAdsForm = this.submitShrimpAdsForm.bind(this);
  }
  //Funtions
  submitShrimpAdsForm() {
    alert("submitShrimpAdsForm");
  }
  render() {
    return (
      <div
        className="bg-white col-sm-7 offset-lg-2 py-5"
        style={{ height: "95vh", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="mb-4">
          <h2 className="text-stfarm text-center">
            <strong>THÔNG TIN QUẢNG CÁO</strong>
          </h2>
        </div>
        <div>
          <form className="col-sm-10 offset-lg-1 ">
            <div className="form-group row">
              <label for="slShrimpType" className="col-sm-5 col-form-label">
                Loại tôm
              </label>
              <div className="col-sm-7 d-flex">
                <select id="slShrimpType" className="form-control">
                  <option selected value="-1">
                    Chọn loại tôm
                  </option>
                  <option value="0">Tôm thẻ 80 con/kg</option>
                  <option value="1">Tôm thẻ 50 con/kg</option>
                  <option value="2">Tôm sú 30 con/kg</option>
                  <option value="3">Khác</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label for="txtMinOrder" className="col-sm-5 col-form-label">
                Số lượng mua tối thiểu
              </label>
              <div className="col-sm-7">
                <input type="number" id="txtMinOrder" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="txtPricePerUnit" className="col-sm-5 col-form-label">
                Giá / đơn vị
              </label>
              <div className="col-sm-3">
                <input type="number" id="txtPricePerUnit" className="form-control" />
              </div>
              <div className="col-sm-4">
                <select id="slUnit" className="form-control" required>
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
              <label for="txtContent" className="col-sm-5 col-form-label">
                Mô tả
              </label>
              <div className="col-sm-7">
                <textarea className="form-control" rows="3" id="txtContent" placeholder="Nhập ghi chú..."></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label for="txtShelfLife" className="col-sm-5 col-form-label">
                Thời gian sống
              </label>
              <div className="col-sm-7">
                <input type="number" id="txtShelfLife" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="txtEnvironment" className="col-sm-5 col-form-label">
                Môi trường sống
              </label>
              <div className="col-sm-7">
                <input type="number" id="txtEnvironment" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="photo" className="col-sm-5 col-form-label">
                Hình ảnh
              </label>
              <div className="col-sm-7">
                <input type="file" class="form-control-file" id="photo" multiple />
              </div>
            </div>

            <div className="row offset-lg-5 col-sm-7">
              <input
                type="submit"
                value="Thêm"
                className="btn btn-info btn-block"
                id="btnSubmit"
                onClick={this.submitShrimpAdsForm}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ShrimpAds;
