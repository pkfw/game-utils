<template>
    <v-navigation-drawer id="header-wrap" expand-on-hover rail>
        <v-list density="compact" nav v-for="route in $router.options.routes" :key="route.path">
            <router-link :to="route.path" class="hyper-link" active-class="active-link">
                <!-- <v-list-item prepend-icon="mdi-home-circle"> -->
                <v-list-item prepend-icon="mdi-home-circle">
                    {{ route.name }}
                    <!-- <v-list-item-icon v-bind:src="route.asset"></v-list-item-icon> -->
                    <!-- <v-list-item-content>{{ route.name }}</v-list-item-content> -->
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script></script>

<style scoped>
.hyper-link {
    text-decoration: none;
}
.active-link {
    background-color: orange !important;
    color: red;
}
</style>
