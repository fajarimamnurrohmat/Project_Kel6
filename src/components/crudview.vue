<template>
    <div>
        <table>
            <tr v-for="user in pelanggan" :key="user.id">
                <td>{{ user.nama }}</td>
            </tr>
        </table>
        <form action="" @submit.prevent="add">
            <input type="hidden" v-model="form.id" />
            <input type="text" v-model="form.nama" />
            <button type="submit">add</button>
            <button type="button" v-show="updateSubmit" @click="update(form)">
                Update
            </button>
        </form>
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
                hp : "",
                makanan : "",
                jmlMakanan : "",
                porsi : "",
                minuman : "",
                jmlMinuman : "",
                keterangan : "",
                pembayaran : "",
                kartuMember : ""
            },
            pelanggan: [],
            updateSubmit : false ,
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
        add() {
            axios.post("http://localhost:3000/pelanggan/", this.form).then((res) => {
                this.load();
                this.form.nama = "";
            });
        },
        update() {

        }
    },
};
</script>

<style scoped>
div {
    width: max-content;
    height: max-content;
    background-color: aqua;
}
</style>
