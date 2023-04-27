<template>

    <div id="header-wrap">

        <p id="h-title">이것은 타이틀 </p>

        <ul id="nav-menu">

            <router-link v-for="list in lists" :key="list.key" :to="list.link" slots="li" class="header-menu-list" class-active="active" exact>{{ list.title }} </router-link>

        </ul>

    </div>

</template>

<script>
export default {
    data() {
        return {
            lists: [{ link: "/", title: "Home" }, { link: "/about", title: "About" }, { link: "/todoList", title: "Todo" }],
        };
    },
};
</script>

