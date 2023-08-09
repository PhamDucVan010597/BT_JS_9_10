function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam
) {
  /**
   * Dữ liệu nhân viên
   */
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.loaiNV = "";
  /**
   * Giải thuật tính toán
   */
  this.tinhTongLuong = function () {
    if (this.chucVu == "Sếp") {
      this.tongLuong = this.luongCB * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = this.luongCB * 2;
    } else {
      this.tongLuong = this.luongCB;
    }
  };
  this.xepLoaiNV = function () {
    if (this.gioLam >= 192) {
      this.loaiNV = "Nhân viên xuất sắc";
    } else if (192 >= this.gioLam && this.gioLam >= 176) {
      this.loaiNV = "Nhân viên giỏi";
    } else if (176 >= this.gioLam && this.gioLam >= 160) {
      this.loaiNV = "Nhân viên khá";
    } else {
      this.loaiNV = "Nhân viên trung bình";
    }
  };
}
