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
      <div
        className="bg-white col-sm-7 offset-lg-2 py-5"
        style={{ height: "95vh", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="mb-5">
          <h2 className="text-stfarm text-center">
            <strong>THÔNG TIN TÔM CẦN BÁN</strong>
          </h2>
        </div>
        <div>
          <form className="col-sm-10 offset-lg-1 ">
            <div className="form-group row">
              <label for="slShrimpType" className="col-sm-5 col-form-label">
                Loại tôm
                <span className="text-danger">&nbsp; (*)</span>
              </label>
              <div className="col-sm-7 d-flex">
                <select id="slShrimpType" className="form-control" required>
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
              <label for="txtEstimatedAmount" className="col-sm-5 col-form-label" required>
                Số lượng ước tính thu hoạch
                <span className="text-danger">&nbsp; (*)</span>
              </label>
              <div className="col-sm-3">
                <input type="number" id="txtEstimatedAmount" className="form-control" />
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
              <label for="dtpEstimatedDate" className="col-sm-5 col-form-label">
                Thời gian dự tính thu hoạch
              </label>
              <div className="col-sm-7">
                <input type="date" id="dtpEstimatedDate" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label for="txtContent" className="col-sm-5 col-form-label">
                Ghi chú
              </label>
              <div className="col-sm-7">
                <textarea className="form-control" rows="3" id="txtContent" placeholder="Nhập ghi chú..."></textarea>
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
                onClick={this.submitShrimpOrderForm}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ShrimpSelling;
