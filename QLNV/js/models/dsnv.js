function ListNhanVien() {
  /**
   * Thiết lập mảng danh sách nhân viên
   */
  this.arr = [];
  /**
   * Xây dựng chức năng
   */
  this._positionNV = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };
  this._addNV = function (nhanVien) {
    this.arr.push(nhanVien);
  };
  this._deleteNV = function (taiKhoan) {
    var index = this._positionNV(taiKhoan);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this._editNV = function (taiKhoan) {
   //Tìm vị trí dựa vào SV
   var index = this._positionNV(taiKhoan)
   if (index !== -1) {
     //Lấy object nhanVien trong arr dựa vào index
     var nhanVien = this.arr[index];
     return nhanVien;
   }
   return null;
  };
  this._updateNV = function (nhanVien) {
    var index = this._positionNV(nhanVien.taiKhoan);
    if (index !== -1) {
      this.arr[index] = nhanVien;
    }
  };
  this._searchNV = function (keyWord) {
    var arrSearch = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.loaiNV.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1) {
        arrSearch.push(nhanVien);
      }
    }
    return arrSearch;
  };
}
