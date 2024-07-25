import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: {}
    }),
    getters: {
        fullname: (state) => `${state.user.first_name} ${state.user.last_name}`
    },
    actions: {
        logout() {
            this.$patch((state) => {
                (state.isAuthenticated = false),
                    (state.user = {});
            });
        },

        async login(email, password) {
            try {
                const rawResponse = await fetch(import.meta.env.VITE_API_URL + "/user/login", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, password: password })
                });
                //const content = await rawResponse.json();
                return "RES_SUCCESS";

            } catch(err){
                //console.log(err);
                return "RES_ERR";
            }


            // const res = await fetch(import.meta.env.VITE_API_URL + "/user/login");
            // const { data } = await res.json();
            // console.log(data);
            // this.user = data;
            // this.isAuthenticated = true;
        }
    }
}
);