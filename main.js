// bai1
function Bai1() {
  var soHang = 1;
  var tong = 0;
  while (tong < 10000) {
    soHang += 1;
    tong += soHang;
  }
  document.getElementById("infoNhonhat").innerHTML =
    "Số nguyên dương nhỏ nhất: " + soHang;
}

// bai2
function Bai2() {
  var soX = document.getElementById("soX").value;
  var soN = document.getElementById("soN").value;
  var sum = 0;
  var soMu = 1;
  var soHang2 = 0;
  while (soMu <= soN) {
    soHang2 = soX ** soMu;
    sum += soHang2;
    soMu += 1;
  }
  document.getElementById("infoTinhtong").innerHTML = "Tổng: " + sum;
}

// bai3
function Bai3() {
  var soN3 = document.getElementById("soN3").value;
  var giaTri = 1;
  var result3 = 1;
  while (giaTri <= soN3) {
    result3 *= giaTri;
    giaTri += 1;
  }
  document.getElementById("infoTinhgiaithua").innerHTML =
    "Giai thừa: " + result3;
}

// bai4
function Bai4() {
  var soThe = 1;
  var content = "";
  while (soThe <= 10) {
    if (soThe % 2 === 0) {
      var div = '<div class="bg-danger text-white p-2">Div chẵn</div>';
      content += div;
    } else {
      var div = '<div class="bg-primary text-white p-2">Div lẻ</div>';
      content += div;
    }

    soThe += 1;
  }
  document.getElementById("infoTaodiv").innerHTML = content;
}
