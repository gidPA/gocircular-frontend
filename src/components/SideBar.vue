<template>
    <aside class="flex flex-column justify-content-center text-center side-border h-screen">
        <div class="py-6">
            <Image src="/recycling-green.png" alt="logo" width="100"></Image>
        </div>

        <Menu :model="menuItems" class="custom-menu"></Menu>

    </aside>
</template>

<script setup>
import { ref } from "vue";

import Image from "primevue/image";
import Menu from "primevue/menu";

const menuItems = ref([
    { label: 'Dashboard', command: () => pass },
    { label: 'Transaksi', command: () => pass },
    { label: 'Daftar User', command: () => pass },
    { label: 'Daftar RVM', command: () => pass },
    { label: 'Tukar Poin', command: () => pass }
]);
</script>

<style scoped>
.custom-menu .p-menu {
    border: none !important;
    /* Removes the border */
    box-shadow: none !important;
    /* Removes the box-shadow */
}

.custom-menu .p-menuitem-link {
    padding: 10px 15px !important;
    /* Adjusts the padding if necessary */
}

.custom-menu .p-menuitem-text {
    color: #2c3e50 !important;
    /* Sets the text color */
    font-family: "Inter", sans-serif;
}

.side-border{
    border-right: 5px solid black;
}
</style>