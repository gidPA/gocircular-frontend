<template>
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
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>
.card-custom .p-card{
    min-height: 200px;
    max-width: 250px;
}

.card-custom .p-card .p-card-subtitle {
    color: black;
}
</style>