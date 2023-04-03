<template>
  <div class="container">
    <h4 class="border-bottom">Form Pemesanan Nasi Goreng</h4>
    <div class="row bg-secondary">
      <div class="col-md-6">
        <base-input
          type="text"
          v-model="Data.name"
          label="Nama Pemesan"
          placeholder="Masukkan nama anda"
          id="Data-nama"
        ></base-input>
        <div class="form-group">
          <base-select
            label="Makanan"
            :options="MenuMakanan"
            placeholder="Pilih menu makanan"
            v-model="Data.MenuM"
          ></base-select>
        </div>
        <base-input
          type="number"
          v-model="Data.JumlahM"
          label="Jumlah makanan"
          id="Data-jumlahM"
        ></base-input>
        <hr />
        <base-radio-group
          label="Porsi"
          :options="porsi"
          v-model="Data.porsi"
        ></base-radio-group>
        <hr />
        <div class="form-group">
          <base-select
            label="Minuman"
            :options="MenuMinuman"
            placeholder="Pilih menu minuman"
            v-model="Data.MenuMin"
          ></base-select>
        </div>
        <base-input
          type="number"
          v-model="Data.JumlahMin"
          label="Jumlah Minuman"
          id="Data-jumlahmin"
        ></base-input>
      </div>
      <div class="col-md-6">
        <base-input
          type="text"
          v-model="Data.NoHp"
          label="No Hp/WA"
          placeholder="Masukkan No Hp"
          id="Data-NoHp"
        ></base-input>
        <div class="form-group">
          <label class="text-light">Keterangan</label>
          <textarea
            class="form-control"
            rows="6"
            placeholder="Tambahkan keterangan"
            :value="Data.description"
            @input="Data.description = $event.target.value"
          ></textarea>
        </div>
        <hr />
        <base-checkbox-group
          label="Metode Pembayaran"
          v-model="Data.Temp"
          :options="Temps"
          inline
          id="temp"
        ></base-checkbox-group>
        <hr />
        <div class="form-group">
          <label class="text-light">Punya kartu member ?</label>
          <div>
            <base-radio
              label="Ya"
              :value="1"
              v-model="Data.Ketentuan"
              id="punya"
            ></base-radio>
            <base-radio
              label="Tidak"
              :value="0"
              v-model="Data.Ketentuan"
              id="tidak"
            ></base-radio>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label class="text-light">Simpan</label>
          <div>
            <base-checkbox
              label="yes"
              v-model="Data.Simpan"
              id="simpan"
            ></base-checkbox>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <button class="btn btn-lg btn-primary" @click="saveData">
            Tambah Keranjang
          </button>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div>
    <h4 class="border-bottom">Keranjang Anda</h4>
    <table class="table table-bordered table-striped">
      <thead class="bg-primary">
        <tr>
          <th>No</th>
          <th>Nama Pemesan</th>
          <th>No Hp/WA</th>
          <th>Makanan</th>
          <th>Jml Makanan</th>
          <th>Porsi</th>
          <th>Minuman</th>
          <th>Jml Minuman</th>
          <th>Keterangan</th>
          <th>Pembayaran</th>
          <th>Kartu Member</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.NoHp }}</td>
          <td>{{ item.MenuM }}</td>
          <td>{{ item.JumlahM }}</td>
          <td>{{ item.porsi }}</td>
          <td>{{ item.MenuMin }}</td>
          <td>{{ item.JumlahMin }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.Temp }}</td>
          <td>{{ item.Ketentuan ? "Ya" : "Tidak" }}</td>
          <td>
            <button @click="edit(item)">Edit</button>
            <button @click="del(item)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="form-group mt-3">
      <button class="btn btn-lg btn-primary" @click="save">
        Pesan Makanan
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Data: {
        name: "",
        NoHp: "",
        MenuM: "",
        JumlahM: "",
        porsi: "",
        MenuMin: "",
        JumlahMin: "",
        description: "",
        Temp: [],
        Ketentuan: "",
        Simpan: false,
      },
      MenuMakanan: [
        { value: 1, text: "Nasi Goreng " },
        { value: 2, text: "Nasi Mawut " },
        { value: 3, text: "Mie Goreng " },
        { value: 4, text: "Mie Goreng " },
        { value: 5, text: "Mie Kuah " },
        { value: 6, text: "Cap Jay " },
        { value: 7, text: "Krengsengan Ayam " },
      ],
      Temps: [
        { text: "Bayar di Warung", value: "1" },
        { text: "Transfer", value: "2" },
      ],
      MenuMinuman: [
        { value: 1, text: "Es Jeruk" },
        { value: 2, text: "Es Teh" },
        { value: 3, text: "Jeruk Hangat" },
        { value: 4, text: "Teh Hangat" },
        { value: 5, text: "kopi" },
        { value: 6, text: "Air mineral" },
        { value: 7, text: "-" },
      ],
      porsi: [
        { text: "Biasa", value: 1 },
        { text: "Jumbo", value: 2 },
      ],
      dataList: [],
      tempData: {},
    };
  },
  methods: {
    saveData() {
      if (this.Data.Simpan) {
        this.tempData = Object.assign({}, this.Data);
        this.dataList.push(this.Data);
        this.Data = {
          name: "",
          NoHp: "",
          suasana: "",
          TipeL: "",
          description: "",
          Date: "",
          At: "",
          Temp: [],
          Ketentuan: "",
          Simpan: false,
        };
      }
    },
    edit(item) {
      this.Data = Object.assign({}, item);
      this.dataList.splice(this.dataList.indexOf(item), 1);
    },
    del(item) {
      this.dataList.splice(this.dataList.indexOf(item), 1);
      axios
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    save() {
      axios
        .post("http://localhost:3000/pelanggan/", this.tempData)
        .then((res) => {
          // handle successful response here
          this.tempData = {};
          setTimeout(() => {
            location.reload();
          }, 500);
          alert("Data berhasil disimpan!");
        })
        .catch((err) => {
          // handle error response here
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>