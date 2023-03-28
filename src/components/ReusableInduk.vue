<template>
  <div class="container">
    <h4 class="border-bottom">Form Pemesanan Lapangan Futsal</h4>
    <div class="row bg-secondary">
      <div class="col-md-6">
        <base-input
          type="text"
          v-model="Data.name"
          label="Nama Pemesan"
          placeholder="Masukkan nama anda"
          id="Data-nama"
        ></base-input>
        <base-input
          type="text"
          v-model="Data.NoHp"
          label="No Hp/WA"
          placeholder="Masukkan No Hp"
          id="Data-NoHp"
        ></base-input>
        <base-radio-group
          label="Suasana"
          name="publication"
          :options="suasana"
          v-model="Data.suasana"
        ></base-radio-group>
        <div class="form-group">
          <base-select
            label="Tipe Lapangan"
            :options="TipeLapangan"
            placeholder="Pilihan Tipe Lapangan"
            v-model="Data.TipeL"
          ></base-select>
        </div>
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
      </div>
      <div class="col-md-6">
        <base-input
          type="date"
          v-model="Data.Date"
          label="Tanggal"
          placeholder="Tentukan tanggal"
          id="Data-Date"
        ></base-input>
        <div class="form-group">
          <base-select
            label="Waktu"
            :options="clocks"
            placeholder="Pilih Waktu"
            v-model="Data.At"
          ></base-select>
        </div>
        <hr />
        <base-checkbox-group
          label="Tempat"
          v-model="Data.Temp"
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
              v-model="Data.Ketentuan"
              id="benar"
            ></base-radio>
            <base-radio
              label="Tidak"
              :value="0"
              v-model="Data.Ketentuan"
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
              v-model="Data.Simpan"
              id="simpan"
            ></base-checkbox>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <button class="btn btn-lg btn-primary" @click="saveData">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h4 class="border-bottom">Data Pemesan Lapangan Futsal</h4>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Pemesan</th>
          <th>No Hp/WA</th>
          <th>Suasana</th>
          <th>Tipe Lapangan</th>
          <th>Tanggal</th>
          <th>Waktu</th>
          <th>Tempat</th>
          <th>Ketentuan</th>
          <th>Simpan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.NoHp }}</td>
          <td>{{ item.suasana }}</td>
          <td>{{ item.TipeL }}</td>
          <td>{{ item.Date }}</td>
          <td>{{ item.At }}</td>
          <td>{{ item.Temp.join(", ") }}</td>
          <td>{{ item.Ketentuan ? "Ya" : "Tidak" }}</td>
          <td>{{ item.Simpan ? "Ya" : "Tidak" }}</td>
        </tr>
      </tbody>
    </table>
    <div class="form-group mt-3">
      <button class="btn btn-lg btn-primary" @click="clearData">
        Tambah Pesanan
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Data: {
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
      },
      TipeLapangan: [
        { value: 1, text: "Lapangan Matras" },
        { value: 2, text: "Lapangan Sintetis" },
      ],
      Temps: [
        { text: "Lapangan 1", value: "Lapangan 1" },
        { text: "Lapangan 2", value: "Lapangan 2" },
      ],
      suasana: ["Rame", "Sepi"],
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
      suasana: [
        { text: "Indoor", value: 1 },
        { text: "Outdoor", value: 2 },
      ],
      dataList: [],
    };
  },
  methods: {
    saveData() {
      if (this.Data.Simpan) {
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
  },
};
</script>
<style scoped></style>
