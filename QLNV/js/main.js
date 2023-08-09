/**
 * Thiết lập DOM ID
 */
function getEle(id) {
  return document.getElementById(id);
}
/**
 * Tạo đối tượng listnv từ lớp đối tượng ListNhanVien
 */
var listnv = new ListNhanVien();
/**
 * Tạo đối tượng validation từ lớp đối tượng Validation
 */
var validation = new Validation();
// Chạy local
getLocalStrorage();
/**
 * Lấy thông tin NV
 */
function layThongTinNV() {
  // DOM tới các thẻ input
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCB = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;

  /**
   * Check validation
   */
  var flag = true;
  flag &= validation.checkNul(taiKhoan, "tbTKNV", "(*)Không được để trống");
  flag &=
    validation.checkNul(hoTen, "tbTen", "(*)Không được để trống") &&
    validation.checkLength(hoTen, "tbTen", "(*)Độ dài ký tự 4 - 30", 4, 30) &&
    validation.checkString(hoTen, "tbTen", "(*)Yêu cầu nhập đúng");
  flag &=
    validation.checkNul(email, "tbEmail", "(*)Không được để trống") &&
    validation.checkLength(email, "tbEmail", "(*)Độ dài ký tự 4 - 30", 4, 30) &&
    validation.checkEmail(email, "tbEmail", "(*)Không đúng định dạng");
  flag &=
    validation.checkNul(matKhau, "tbMatKhau", "(*)Không được để trống") &&
    validation.checkLength(
      matKhau,
      "tbMatKhau",
      "(*)Độ dài ký tự 4 - 30",
      4,
      30
    );
  flag &=
    validation.checkNul(ngayLam, "tbNgay", "(*)Không được để trống");
  flag &=
    validation.checkNul(luongCB, "tbLuongCB", "(*)Không được để trống") &&
    validation.checkNumber(luongCB, "tbLuongCB", "(*)Yêu cầu nhập đúng");
  flag &=
    validation.checkNul(gioLam, "tbGiolam", "(*)Không được để trống") &&
    validation.checkNumber(gioLam, "tbGiolam", "(*)Yêu cầu nhập đúng");
  /**
   * Check form
   */
  if (flag) {
    var nhanVien = new NhanVien(
      taiKhoan,
      hoTen,
      email,
      matKhau,
      ngayLam,
      luongCB,
      chucVu,
      gioLam
    );
    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNV();
    return nhanVien;
  } else {
    return null;
  }
}
// Tắt nút cập nhật khi thêm NV
getEle("btnThem").addEventListener("click", function () {
  if ("btnThemNV") {
    getEle("btnCapNhat").style.display = "none";
  }
});
/**
 * Thêm NV mới
 */
getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNV();
  if (nhanVien) {
    listnv._addNV(nhanVien);
    tablesNV(listnv.arr);
    setLocalStrorage();
  }
});
/**
 * Xoá NV khỏi danh sách
 */
function deteleNV(taiKhoan) {
  listnv._deleteNV(taiKhoan);
  tablesNV(listnv.arr);
  setLocalStrorage();
}
/**
 * Sửa thông tin NV
 */
function editNV(taiKhoan) {
  // Tắt nút thêm khi sửa thông tin
  if (editNV) {
    getEle("btnThemNV").style.display = "none";
  }
  var nhanVien = listnv._editNV(taiKhoan);
  // Lấy thông tin từ thẻ input
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nhanVien.hoTen;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCB;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;
}
/**
 * Cập nhật lại NV
 */
getEle("btnCapNhat").addEventListener("click", function () {
  // Lấy lại những thông tin mới nhất từ các thẻ input
  var nhanVien = layThongTinNV();
  listnv._updateNV(nhanVien);
  tablesNV(listnv.arr);
  setLocalStrorage();
});
/**
 * Tìm kiếm loại NV
 */
getEle("btnTimNV").addEventListener("click", function () {
  var keyWord = getEle("searchName").value;
  var arrSearch = listnv._searchNV(keyWord);
  tablesNV(arrSearch);
});
/**
 * Tạo bảng danh sách NV
 */
function tablesNV(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    content += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>${nhanVien.loaiNV}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editNV('${nhanVien.taiKhoan}')">
                        <i class="fa fa-wrench" aria-hidden="true"></i>
                    </button>
                    <button class="btn btn-danger" onclick="deteleNV('${nhanVien.taiKhoan}')">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        `;
  }
  getEle("tableDanhSach").innerHTML = content;
}
/**
 * Xử lý dữ liệu với localStorage
 */
function setLocalStrorage() {
  // Chuyển từ kiểu JSON sang kiểu String
  var dataString = JSON.stringify(listnv.arr);
  // Lưu xuống localStrorage
  localStorage.setItem("DSNV", dataString);
}
function getLocalStrorage() {
  var data = localStorage.getItem("DSNV");
  if (data) {
    // Chuyển từ kiểu String sang kiểu JSON
    var dataJson = JSON.parse(data);
    // Gán dữ liệu từ LocalStorage vào mảng listNV
    listnv.arr = dataJson;
    // Gọi lại hàm tạo bảng
    tablesNV(listnv.arr);
  }
}
