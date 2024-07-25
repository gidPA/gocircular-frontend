<template>
    <div class="flex flex-column min-h-screen">
        <main class="flex-grow-1 flex flex-column justify-content-around">
            <div class="grid">
                <div class="col-2 h-screen">
                    <SideBar></SideBar>
                </div>
                <div class="col h-screen flex flex-column justify-content-around">
                    <div>
                        <div>
                            <h1>Main View</h1>
                        </div>
                        <div class="grid">
                            <div class="col text-center card-custom">
                                <Card>
                                    <template #title>
                                        <p class="text-7xl font-bold m-0">10</p>
                                    </template>
                                    <template #subtitle>
                                        <p class="text-lg font-semibold m-0">Transaksi Hari ini</p>
                                    </template>
                                </Card>
                            </div>
                            <div class="col text-center card-custom">
                                <Card>
                                    <template #title>
                                        <p class="text-7xl font-bold m-0">4</p>
                                    </template>
                                    <template #subtitle>
                                        <p class="text-lg font-semibold m-0">RVM Aktif</p>
                                    </template>
                                </Card>
                            </div>
                            <div class="col text-center card-custom">
                                <Card>
                                    <template #title>
                                        <p class="text-7xl font-bold m-0">2</p>
                                    </template>
                                    <template #subtitle>
                                        <p class="text-lg font-semibold m-0">RVM Membutuhkan Penanganan</p>
                                    </template>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import Card from "primevue/card";

</script>

<style>

</style>