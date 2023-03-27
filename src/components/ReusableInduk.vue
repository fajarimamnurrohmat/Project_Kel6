<template>
  <div class="row">
    <div>
      <h4 class="border-bottom">Daftar Pemesanan Lapangan Futsal</h4>
      <div class="row bg-secondary">
        <div style="padding-left: 5px; padding-right: 5px">
          <base-input
            type="text"
            v-model="product.name"
            label="Nama Pemesan"
            id="product-nama"
          >
          </base-input>
          <base-input
            type="text"
            v-model="product.NoHp"
            label="No Hp/WA"
            id="Data-NoHp"
          >
          </base-input>
          <base-radio-group
            label="Suasana"
            name="publication"
            :options="suasana"
            v-model="product.suasana"
          ></base-radio-group>
          <div class="form-group">
            <base-select
              label="Tipe Lapangan"
              :options="TipeLapangan"
              placeholder="Pilihan Tipe Lapangan"
              v-model="product.TipeL"
            >
            </base-select>
          </div>
          <div class="form-group">
            <label class="text-light">Keterangan</label>
            <textarea
              class="form-control"
              rows="6"
              :value="product.description"
              @input="product.description = $event.target.value"
            >
            </textarea>
          </div>
        </div>
        <div style="padding-left: 5px; padding-right: 5px">
          <base-input
            type="date"
            v-model="product.Date"
            label="Tanggal"
            id="Data-Date"
          >
          </base-input>
          <div class="form-group">
            <base-select
              label="Waktu"
              :options="clocks"
              placeholder="Pilih Waktu"
              v-model="product.At"
            >
            </base-select>
          </div>
          <hr />
          <base-checkbox-group
            label="Tempat"
            v-model="product.Temp"
            :options="Temps"
            inline
            id="temp"
          ></base-checkbox-group>
          <hr />
          <div class="form-group">
            <label class="text-light">Mohon datang tepat waktu</label>
            <div>
              <base-radio
                label="Ya"
                :value="1"
                v-model="product.Ketentuan"
                id="benar"
              ></base-radio>
              <base-radio
                label="Tidak"
                :value="0"
                v-model="product.Ketentuan"
                id="salah"
              ></base-radio>
            </div>
          </div>
          <hr />
          <div class="form-group">
            <label class="text-light">Simpan Pesanan</label>
            <div>
              <base-checkbox
                label="yes"
                v-model="product.Simpan"
                id="simpan"
              ></base-checkbox>
            </div>
          </div>
          <hr />
          <div class="form-group">
            <button class="btn btn-lg btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p><br /><br /></p>
      <div style="padding-left: 60px">
        <table
          class="table table-primary table-striped-columns border border-success"
          style="width: 500px"
        >
          <tr>
            <th style="width: 25%">Nama :</th>
            <td>{{ product.name }}</td>
          </tr>
          <tr>
            <th style="width: 25%">No Hp :</th>
            <td>{{ product.NoHp }}</td>
          </tr>
          <tr>
            <th style="width: 25%">suasana :</th>
            <td>{{ product.suasana }}</td>
          </tr>
          <tr>
            <th style="width: 25%">Tipe :</th>
            <td>{{ product.TipeL }}</td>
          </tr>
          <tr>
            <th style="width: 25%">Lapangan :</th>
            <td>{{ product.Temp }}</td>
          </tr>
          <tr>
            <th style="width: 25%">Tanggal :</th>
            <td>{{ product.Date }}</td>
          </tr>
          <tr>
            <th style="width: 25%">waktu :</th>
            <td>{{ product.At }}</td>
          </tr>
          <tr>
            <th style="width: 25%">Deskripsi :</th>
            <td>{{ product.description }}</td>
          </tr>
          <tr>
            <th style="width: 25%">Ketentuan :</th>
            <td>{{ product.Ketentuan }}</td>
          </tr>
          <tr>
            <th style="width: 25%">Simpan :</th>
            <td>{{ product.Simpan }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "Masukkan Nama Anda",
        Date: "0000-00-00",
        description: "Keterangan Tambahan",
        NoHp: "Masukkan No Telephone",
        At: "",
        TipeL: "",
        Simpan: "true",
        Temp: [1],
        suasana: "",
        Ketentuan: "",
      },
      TipeLapangan: [
        { value: 1, text: "Lapangan Matras" },
        { value: 2, text: "Lapangan Sintetis" },
      ],
      clocks: [
        { value: 1, text: "08.00-09.00" },
        { value: 2, text: "09.00-10.00" },
        { value: 3, text: "11.00.12.00" },
        { value: 4, text: "13.00-14.00" },
        { value: 5, text: "14.00-15.00" },
        { value: 6, text: "15.00-16.00" },
        { value: 7, text: "16.00-17.00" },
        { value: 8, text: "17.00-18.00" },
        { value: 9, text: "18.00-19.00" },
        { value: 10, text: "19.00-20.00" },
        { value: 11, text: "20.00-21.00" },
        { value: 12, text: "21.00-22.00" },
      ],
      Temps: [
        { value: 1, text: "Lapangan 1" },
        { value: 2, text: "Lapangan 2" },
      ],
      suasana: [
        { text: "Indoor", value: 1 },
        { text: "Outdoor", value: 2 },
      ],
      errors: {},
    };
  },
};
</script>
