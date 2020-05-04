<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="boxjudul col-md-8">
        <h2>Formulir Registrasi</h2>
      </div>
      <div class="boxjudul col-md-8">
        <h5 style="color:white!important;" class="leftcontent">501005-SUM0009</h5>
        <h3 class="leftcontent">Sumber Makmur</h3>
      </div>
      <div class="col-md-8" style="padding:0px;">
        <div class="boxjudul2">
          <h2 style="color:white">Target Penjualan</h2>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Bulan Transaksi</th>
              <th scope="col">Target Penjualan</th>
            </tr>
          </thead>
          <tbody class="text-left pl-5">
            <tr>
              <td>Januari</td>
              <td class="tablekanan">Rp 63,000,000</td>
            </tr>
            <tr>
              <td>Februari</td>
              <td class="tablekanan">Rp 63,000,000</td>
            </tr>
            <tr>
              <td>Maret</td>
              <td class="tablekanan">Rp 63,000,000</td>
            </tr>
          </tbody>
          <tfoot class="text-left">
            <tr>
              <th>Total Quarter 1</th>
              <td class="tablekanan">Rp. 188.000.000</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="boxjudul col-md-8 mt-5">
        <p>
          Mohon dibaca syarat dan ketentuannya
          <span>http://inosis.co.id/porelo_privacy.html</span>
          jika anda setuju. Silahkan lanjutkan menekan TOMBOL SUBMIT untuk registrasi dalam program loyalti mondelez.
        </p>
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block col-md-8">Submit</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
