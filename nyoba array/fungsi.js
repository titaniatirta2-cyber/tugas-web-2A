var barang = ['pensil', 'penghapus', 'buku', 'penggaris', 'spidol'];

//menampilkan data
function Showdata() {
    var ListBarang=document.getElementById('List-Barang');

ListBarang.innerHTML = '';  

    for (var i = 0; i < barang.length; i++) {
        var linkHapus='<a href="#" onclick="DelData(' + i + ')">Hapus</a>';
        ListBarang.innerHTML += '<li>' + barang[i] + ' ' + linkHapus + '</li>';
    };
}

//menambahkan data
function AddData() {
    var inputBarang = document.getElementById('nama');
   //memasukan data ke array
    barang.push(inputBarang.value);
    Showdata();
}

//menghapus data
function DelData(id) {
    //menghapus elemen dari indeks array
    barang.splice(id, 1);
    Showdata();
}

//menjalankan fungsi tampil data
Showdata();