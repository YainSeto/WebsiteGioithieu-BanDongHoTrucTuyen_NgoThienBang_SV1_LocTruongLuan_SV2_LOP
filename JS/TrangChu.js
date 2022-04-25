        $(document).ready(function(){
            var i=1;
            $("#btn1").click(function(){
                $("#myModal").modal();
            });
            function kiemTraTen(){
                var i=1;
                let mauKT=/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
                if ($("#Name").val()==""){
                    $("#tbName").html("Không để trống");
                    return false;
                }
                if(!mauKT.test($("#Name").val())){
                    $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
                    return true;
                }
                $("#tbName").html("*");
                return true;
            }
            $("#Name").blur(kiemTraTen);

            function kiemTraDiaChi(){
                var mauKT=/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
                if ($("#DC").val() == ""){
                    $("#tbDC").html("Không để trống");
                    return false;
                }
                if(!mauKT.test($("#DC").val())){
                    $("#tbDC").html("Mỗi ký tự đầu viết hoa không sử dụng số");
                    return true;
                }
                $("#tbDC").html("*");
                return true;
            }   
            $("#DC").blur(kiemTraDiaChi);
            
            function kiemTraSDT(){
                var mauKT=/^0\d{3}-\d{3}-\d{3}$/;
                if ($("#SDT").val() == ""){
                    $("#tbSDT").html("Không để trống");
                    return false;
                }
                if(!mauKT.test($("#SDT").val())){
                    $("#tbSDT").html("THoe dạng 0xxx-xxx-xxx trong đó x là số");
                    return true;
                }
                $("#tbSDT").html("*");
                    return true;
            }
            $("#SDT").blur(kiemTraSDT);
        })
             $(document).ready(function(){
            var i=1;
            $("#btn2").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn3").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn4").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn5").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn6").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn7").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn8").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn9").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn10").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn11").click(function(){
                $("#myModal").modal();
            });
        })
        $(document).ready(function(){
            var i=1;
            $("#btn12").click(function(){
                $("#myModal").modal();
            });
        })
