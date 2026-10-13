function kendaraan(jenis,roda,warna) {
    this.jenis = jenis;
    this.roda = roda;
    this.warna = warna;

    this.Maju = function() {
        document.write("Kendaraan Jenis "+this.jenis+" Sedang bergerak Maju"+"<br>");
    }

    this.Mundur =function() {
        document.write("Kendaraan Jenis "+this.jenis+" Sedang bergerak Mundur"+"<br>");
    }

    this.Belok = function(arah) {
        document.write("Kendaraan Jenis "+this.jenis+" Sedang bergerak Belok ke "+arah+"<br>");
    }

    this.Berhenti = function() {
        document.write("Kendaraan Jenis "+this.jenis+" Sedang Berhenti"+"<br>");
    }
}

//membuat instance
var Sedan = new kendaraan("Sedan",4,"Hitam");

var SepedaMotor = new kendaraan("Sepeda Motor",2,"Merah");

//menuliskan hasil ke browser
document.write("<h2>Kendaran Jenis "+SepedaMotor.jenis+"</h2>");
document.write("<h3>Kendaran Warna "+SepedaMotor.warna+"</h3>");
document.write("<h3>Kendaran Beroda "+SepedaMotor.roda+"</h3>");

//memanggil fungsi
SepedaMotor.Belok("kanan");
Sedan.Maju();
SepedaMotor.Mundur();
Sedan.Berhenti();