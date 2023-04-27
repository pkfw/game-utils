<template>

    <v-app>

        <v-main>

            <main-header></main-header>

            <router-view />

        </v-main>

    </v-app>

</template>

<script>
import NavigatorMain from "./components/navigator/MainHeader.vue";
export default {
    name: "App",
    components: {
        "main-header": NavigatorMain,
    },
    data: () => ({
        //
    }),
};
</script>

