function Validation() {
  this.checkNul = function (value, errorID, mess) {
    if (value === "") {
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    } else {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
  };
  this.checkLength = function (value, errorID, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  this.checkString = function (value, errorID, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  this.checkNumber = function (value, errorID, mess) {
    var letter = "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$";
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  this.checkEmail = function (value, errorID, mess) {
    var letter =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
}
