<template>
  <div>
    <h1>ADMIN PAGE</h1>
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
        <tr v-for="(item, index) in pelanggan" :key="index">
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
            <button @click="del(item)">Done</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        nama: "",
        hp: "",
        makanan: "",
        jmlMakanan: "",
        porsi: "",
        minuman: "",
        jmlMinuman: "",
        keterangan: "",
        pembayaran: "",
        kartuMember: "",
      },
      pelanggan: [],
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/pelanggan")
        .then((res) => {
          this.pelanggan = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(item) {
      const confirmDelete = confirm(
        "Are you sure you want to delete this item?"
      );
      if (confirmDelete) {
        axios
          .delete("http://localhost:3000/pelanggan/" + item.id)
          .then((response) => {
            console.log(response);
            const index = this.pelanggan.indexOf(item);
            if (index > -1) {
              this.pelanggan.splice(index, 1);
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Failed to delete item. Please try again later.");
          });
      }
    },
  },
};
</script>
