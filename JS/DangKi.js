<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation</title>
    <style type="text/css">
        body{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 18px;
        }
        div{
            border-bottom: 1px solid #efefef;
            margin:auto;
            padding-bottom: 10px;
            padding-top: 5px;
            width: 720px;
        }
        .title{
            float: left;
            width: 200px;
            text-align: right;
            padding-right: 10px;
            color: black;
            font-size: 18px;
        }
        .radio-buttons label{
            float: none;
        }
        .submit{
            text-align: center;
        }
        input[type=submit],
        input[type=reset] {
            padding: .1em .2em;
            border: 1px solid hsla(0,0%,0%,.3);
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
            background-color: #000;
            color: #fff;
            text-shadow: 0 -1px 0 hsla(0,0%,0%, .8);
            font-size: 18px;
        }
        span{
            color: red;
            font-size: 14px;
        }
    </style>
    <script>
        function KiemTraTenDN(){
            var re = /^[a-z]\*w/;
            if (re.test(document.getElementById('txtDN').value.trim())== false){
                tendn.innerText= " * bắt buộc, bắt đầu bằng ký tự";
                return false;
            } else {
                tendn.innerText=" *";
                return true;
            }
        }
        function KiemTraPassWord(){
            var re = /(?=.*\d).{6,}/;
            if (re.test(document.getElementById('txtMK').value.trim())== false){
                mk.innerText= " * phải co chữ, số, ít nhất 6 ký tự";
                return false;
            } else {
                mk.innerText="*";
                return true;
            }
        }
        function KiemTraXacNhanPassWord(){
            if (document.getElementById('txtXNMK').value !=
                document.getElementById('txtMK').value){
                xnmk.innerText= " * phải giống ô mật khẩu";
                return false;
            } else {
                xnmk.innerText=" *";
                return true;
            }
        }
        function KiemTraNgaySinh(){
            var ns=new Date(document.getElementById('txtNS').value);
            var today = new Date();
            if (eval(today.getFullYear() - ns.getFullYear()) <= 10){
                ngaysinh.innerText=" tuổi phải >10";
                return false;
            } else {
                ngaysinh.innerText = "";
                return true;
            }
        }
        
    </script>
</head>
<body>
    <h2 align="center"> ĐĂNG KÝ TÀI KHOẢN</h2>
    <form name="form1" onsubmit="SubmitForm();" action="#" method="post">
        <div>
            <label for="txtDN" class="title">Tên đăng nhập:</label>
            <input id="txtDN" onblur="KiemTraTenDN();" type="text" name="txtdn" size="30" placeholder="Tài khoản"/><span id="tendn">*</span>
        </div>
        <div>
            <label for="txtMK" class="title">Mật khẩu:</label>
            <input id="txtMK" onblur=" KiemTraPassWord();" type="password" name="txtMK" size="30" placeholder="Mật khẩu"/><span id="mk"> * </span>
        </div>
        <div>
            <label for="txtXNMK" class="title">Nhập lại mật khẩu:</label>
            <input id="txtXNMK" onblur="KiemTraXacNhanPassWord();" type="password" name="txtXNMK" size="30" placeholder="Xác thực mật khẩu"/><span id="xnmk"> * </span>
        </div>
        <h5 align="center">THÔNG TIN CÁ NHÂN</h5>
        <div>
            <label for="txtName" class="title">Họ và tên:</label>
            <input type="text" id="txtName" name="txtName" size="30"/><span id="hoten"> * bắt buộc </span>
        </div>
        <div>
            <label for="txtNS" class="title">Ngày sinh:</label>
            <input type="date" id="txtNS" name="txtNS" size="30" placeholder="txtNS" onblur="KiemTraNgaySinh();"/><span id="ngaysinh"></span>
        </div>
        <div class="radio-buttons">
            <span class="title">Giới tính:</span>
            <input type="radio" name="gender" id="male" value="M" checked/>
            <label for="male">Name</label>
            <input type="radio" name="gender" id="female" value="F" />
            <label for="female">Nữ</label><br>
        </div>
        <div>
            <label for="txtDC" class="title">Địa chỉ:</label>
            <input type="text" id="txtDC" name="txtDC" size="30" ><span id="diachi"></span>
        </div>
        <div>
            <label for="txtDT" class="title">Điện thoại:</label>
            <input type="text" id="txtDT" name="txtDT" size="30" ><span id="dienthoai"> phải là số </span>
        </div>
        <div>
            <label for="txtEmail" class="title">Email:</label>
            <input type="text" id="txtEmail" name="txtEmail" size="30" placeholder="@exam.com"><span id="email"> nhập đúng địa chỉ email </span>
        </div>
       
    </form> 
    <div class="submit">
        <a href="DangKyThanhCong.html"><input type="submit" value="Đăng ký" id="submit"></a>
        <a href="TrangChu.html"><input type="reset" value="Huỷ" id="submit">
    </div>
</body>
</html>