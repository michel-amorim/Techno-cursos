export default {
    data() {
        return {
            api: null,
            loading: true,
        };
    },

    methods: {
        fetchData(url) {
            this.loading = true;
            this.api = null;

            fetch(`http://localhost:3000${url}`)
                .then((r) => r.json())
                .then((r) => {
                    // Esse setTimeOut está aqui por fins ilustrativos, em um uso real remova-o
                    setTimeout(() => {
                        this.api = r;
                        this.loading = false;
                    }, 1000);
                });
        },
    },
};
