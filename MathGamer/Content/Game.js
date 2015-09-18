
      
        function Box_Event(Number) { //Kutuya tıklanılandıgında kutunun id'si döndürsün Daha sonra bir dizi ye atıp topla fonsiyonu yazılması gerekmekte
        
            $(document).ready(function () {

                $("button").click(function () {

                    $("p").each(function () {

                        $(this).fadeTo("slow", 1);

                    });

                });

            });

            //Span iki tane kutum var bir doğru diğeri yanlış bunları sayfa yuklendiğinde görünmesin aşağıdaki satırda gösterecez...            
        }

var rasgele;


function RasgeleSayıUret() {
        
    //Tıklanan div flulaşıyordu load olayı ile birlikte opacity sahibi olan div yada divler normal gözüksün
    //Jquery Ajax Method...


    rasgele = Math.floor((Math.random() * 30) + 10);
    document.getElementById("Rasgele").innerHTML = rasgele;
            
    //Sayfa yüklendiğinde box2 gözükmesin sayı ile rasgele sayı birbirene eşit ise jquery ile renk değiştirme yapıcaz.
    $(document).ready(function () {
        $("button").click(function () {
            $("#box2").hide();
        });

    });
}

var sonuc = 0;
var k1 = 0; //global değişkenler daha sonra toplam diye bir fonksiyon tanımlanmalı ve RasgeleSayıUret foksiyonu ile tıklananlar arasında ilişki olmalı var doğrudur değilse yanlıştır
var k2 = 0;//diye mesaj verecek şimdilik.
var k3 = 0;
var k4 = 0;
var k5 = 0;
var k6 = 0;
var k7 = 0;
var k8 = 0;
var k9 = 0;

var Kpuan = 100;
var Apuan = 20;
var Psonuc = 0

function toplam() {
                      
    //alert(rasgele);//doğru tutmakta
    (sonuc) = parseInt(k1 + k2 + k3 + k4 + k5 + k6 + k7 + k8 + k9);

    alert(k1);
    alert(k2);
    alert(k3);
    alert(k4);
    alert(k5);
    alert(k6);
    alert(k7);
    alert(k8);
    alert(k9);
    alert(sonuc);
                     

    if (rasgele == sonuc) {
        //alert("doğru");//oyun tekrar başladıgında değişken sıfır olası lzm
        ///*******************************************************************
               
        (this.Psonuc) = Psonuc + Kpuan;
                
        Psonuc=document.getElementById("box2").innerHTML = Psonuc;
                
               
        parseInt(k1 = 0);
        parseInt(k2 = 0);
        parseInt(k3 = 0);
        parseInt(k4 = 0);
        parseInt(k5 = 0);
        parseInt(k6 = 0);
        parseInt(k7 = 0);
        parseInt(k8 = 0);
        parseInt(k9 = 0);
        parseInt(sonuc = 0);

        KutuRasgeleSayı();
        RasgeleSayıUret();

        //Doğru olunca jquery selector ile mesaj versin
        $(document).ready(function () {
            $('button').click(function () {
                $('#box2').show();
                $('#box2').css('background-color', 'green');
            });             
        });
    }

    else
        if (sonuc != rasgele) {

            (this.Psonuc) = Psonuc - Apuan;

            Psonuc = document.getElementById("box2").innerHTML = Psonuc;
              
            parseInt(k1 = 0);
            parseInt(k2 = 0);
            parseInt(k3 = 0);
            parseInt(k4 = 0);
            parseInt(k5 = 0);
            parseInt(k6 = 0);
            parseInt(k7 = 0);
            parseInt(k8 = 0);
            parseInt(k9 = 0);
            parseInt(sonuc = 0);

            //RasgeleSayıUret();


            alert("yanlış giden bişeyler var");


            $(document).ready(function () {

                $('button').click(function () {
                    $('#box2').show();
                    $('#box2').css('background-color', 'red');
                });
            });
                                
        }
}
              
function KutuRasgeleSayı() {
                     
    var i = 0;
    var dizi = new Array(9)

    do {
        var rasgele = Math.round((Math.random() * 15) + 1);
        if ((rasgele % 2 == 0) || (rasgele % 2 == 1)) {

            dizi[i] = rasgele;
            if (dizi[0] != dizi[1] && dizi[0] != dizi[2] && dizi[0] != dizi[3] && dizi[0] != dizi[4] && dizi[0] != dizi[5] && dizi[0] != dizi[6] && dizi[0] != dizi[7] && dizi[0] != dizi[8]

                ) {

                //document.write(dizi[i] + "-");
                i++;
            }
        }
    }
    while (i < 9)
            
    //Tıklananlar opacity sağalamak için tıklanan sayılar belirgin olsun diye
    $(document).ready(function () {

        $("p").click(function () {

            $(this).fadeTo("slow", 0.2);


        });
    });
                    
    var dizi1 = dizi[0];
    document.getElementById("Kutu1").innerHTML = dizi1;
    document.getElementById("Kutu1").addEventListener("click", function () { k1 = parseInt(Kutu1.innerText), false });


    var dizi2 = dizi[1];
    document.getElementById("Kutu2").innerHTML = dizi2;
    document.getElementById("Kutu2").addEventListener("click", function () { k2 = parseInt(Kutu2.innerText), false });

    var dizi3 = dizi[2];
    document.getElementById("Kutu3").innerHTML = dizi3;
    document.getElementById("Kutu3").addEventListener("click", function () { k3 = parseInt(Kutu3.innerText), false });

    var dizi4 = dizi[3];
    document.getElementById("Kutu4").innerHTML = dizi4;
    document.getElementById("Kutu4").addEventListener("click", function () { k4 = parseInt(Kutu4.innerText), false });

    var dizi5 = dizi[4];
    document.getElementById("Kutu5").innerHTML = dizi5;
    document.getElementById("Kutu5").addEventListener("click", function () { k5 = parseInt(Kutu5.innerText), false });

    var dizi6 = dizi[5];
    document.getElementById("Kutu6").innerHTML = dizi6;
    document.getElementById("Kutu6").addEventListener("click", function () { k6 = parseInt(Kutu6.innerText), false });

    var dizi7 = dizi[6];
    document.getElementById("Kutu7").innerHTML = dizi7;//rasgelen sayı diziden alınır
    document.getElementById("Kutu7").addEventListener("click", function () { k7 = parseInt(Kutu7.innerText), false });//diziden string gelen sayı int cevirilir ve bir değişkene aktarılır.

    var dizi8 = dizi[7];
    document.getElementById("Kutu8").innerHTML = dizi8;
    document.getElementById("Kutu8").addEventListener("click", function () { k8 = parseInt(Kutu8.innerText), false });

    var dizi9 = dizi[8];
    document.getElementById("Kutu9").innerHTML = dizi9;
    document.getElementById("Kutu9").addEventListener("click", function () { k9 = parseInt(Kutu9.innerText), false });

           
           
    //puanlama sistemi de olsun her dogru cvp 100 puan 1000 de kazananır sıfıra düştüğünde oyun bitsin.
}
        
var Sure = 77;
var zamanKontrolu;

function zaman() {

    document.getElementById("geriSayim").innerHTML = '<b>' + Sure + 'Kalan süre</b>';
    Sure = Sure - 1; zamanKontrolu=setTimeout("zaman()", 1000);
    KontrolEt();
}

function KontrolEt() {
    if (Sure <= -1) {
        document.getElementById("geriSayim").innerHTML = '<b>Süre tamamlandı.</b>';
        clearTimeout(zamanKontrolu);
    }
}

window.onload = zaman;
