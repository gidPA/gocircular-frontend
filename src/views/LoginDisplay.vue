<template>
    <div class="flex flex-column min-h-screen">
        <main class="flex-grow-1 flex flex-column justify-content-around">
            <div class="grid align-self-center">
                <div class="col text-center">
                    <Image src="/recycling-green.png" alt="GoCircular logo" width="250"></Image>
                    <h2>Gocircular <br> Management Suite</h2>
                </div>
                <div class="col flex flex-column justify-content-center px-6 custom-input">
                    <div>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-envelope"></i>
                            </InputGroupAddon>
                            <InputText placeholder="Email" v-model="login_username" />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-lock"></i>
                            </InputGroupAddon>
                            <InputText type=password placeholder="Password" v-model="login_password" />
                        </InputGroup>
                    </div>

                    <div class="flex-none pt-5">
                        <Button @click="login">Login</Button>
                    </div>

                </div>


            </div>
        </main>
    </div>

</template>

<script setup>
import {
    ref
} from 'vue';

import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import Image from "primevue/image";

import router from '../router'
import axios from 'axios';

import { useAuthStore } from '../stores/auth.store';

const login_username = ref("");
const login_password = ref("");
const error = ref(null);
const success = ref(false);

const authStore = useAuthStore();

const login = async () => {
    if (login_username.value !== "" && login_password.value !== "") {
        console.log("passed");
    } else {
        console.log("Username and password cannot be empty");
        return;
    }

    const res = await authStore.login(login_username.value, login_password.value);

    if (res === "RES_SUCCESS") {
        router.push("/dashboard");
    } else {
        console.log(res);
    }


}
</script>

<style scoped>
/* .custom-input .p-inputtext{
    font-family: 'Inter', sans-serif;
} */

.custom-input .p-button{
    color: white;
}
</style>