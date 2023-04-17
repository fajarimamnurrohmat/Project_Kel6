<template>
  <div class="container bg-light p-5 rounded-lg shadow-lg">
    <h2 class="text-center border-bottom pb-3">Form Pemesanan Nasi Goreng</h2>
    <div class="row bg-secondary p-3 rounded-lg">
      <div class="col-lg-6 col-md-12">
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
      <div class="col-lg-6 col-md-12">
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
          <button
            class="btn btn-lg btn-primary rounded-pill px-5"
            @click="saveData"
          >
            Tambah Keranjang
          </button>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="container bg-light rounded-lg shadow-lg">
    <h3 class="border-bottom text-center">Keranjang Anda</h3>
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="bg-info text-light">
          <tr>
            <th class="text-center">No</th>
            <th class="text-center">Nama Pemesan</th>
            <th class="text-center">No Hp/WA</th>
            <th class="text-center">Makanan</th>
            <th class="text-center">Jumlah Makanan</th>
            <th class="text-center">Porsi</th>
            <th class="text-center">Minuman</th>
            <th class="text-center">Jumlah Minuman</th>
            <th class="text-center">Keterangan</th>
            <th class="text-center">Pembayaran</th>
            <th class="text-center">Kartu Member</th>
            <th class="text-center">Setting</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataList" :key="index">
            <td class="text-center">{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.NoHp }}</td>
            <td>{{ item.MenuM }}</td>
            <td class="text-center">{{ item.JumlahM }}</td>
            <td>{{ item.porsi }}</td>
            <td>{{ item.MenuMin }}</td>
            <td class="text-center">{{ item.JumlahMin }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.Temp }}</td>
            <td class="text-center">{{ item.Ketentuan ? "Ya" : "Tidak" }}</td>
            <td class="text-center">
              <button class="btn btn-warning btn-sm mr-2" @click="edit(item)">
                Edit
              </button>
              <button class="btn btn-danger btn-sm" @click="del(item)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="form-group mt-3 text-center">
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
      tempData: [],
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
          MenuM: "",
          JumlahM: "",
          porsi: "",
          MenuMin: "",
          JumlahMin: "",
          description: "",
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
      if (!this.tempData || Object.keys(this.tempData).length === 0) {
        alert("Data harus diisi terlebih dahulu sebelum disimpan.");
        return;
      }

      axios
        .post("http://localhost:3000/pelanggan/", this.tempData)
        .then((res) => {
          // handle successful response here
          this.tempData = [];
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
