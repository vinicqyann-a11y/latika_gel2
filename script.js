// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapabutton');
// 2. Tambahkan 'eventlistener' untuk aksi 'click'
tombolSapa.addEventlistener('click',function(){
  //3. Jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
