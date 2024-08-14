<template>
    <header class="gs-nav bg-primary">
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-12 col-md-2">
                    <div class="gs-nav-img py-4 px-4 px-sm-0">
                        <RouterLink class="navbar-brand" :to="{ name: 'index' }">
                            <img src="../assets/images/logo-white.png" width="80" alt="">
                        </RouterLink>
                    </div>
                </div>
                <div class="col">
                    <div class="gs-nav-list">
                        <ul class="d-flex">
                            <li><a href="">系列鏡框</a></li>
                            <li>
                                <RouterLink class="navbar-brand" :to="{ name: 'location' }">
                                    門市據點
                                </RouterLink>
                            </li>
                        </ul>
                        <ul class="d-flex">
                            <li><a href="">部落格</a></li>
                            <li><a href="">常見問題</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>

<style scoped>
    .gs-nav-list li {
        width: 50%;
        border: #fff 1px solid;
    }

    .gs-nav-list li>a {
        color: #fff;
        font-size: 20px;
        white-space: nowrap;
        display: block;
        padding: 12px 0;
        text-align: center;
    }

    @media (min-width: 576px) {

        .gs-nav-list {
            display: flex;
            justify-content: end;
        }

        .gs-nav-list li {
            width: auto;
            border: none;
            padding: 0;
            text-align: start;
        }

        .gs-nav-list li:not(:last-child) {
            margin-right: 4rem;
        }

        .gs-nav-list ul+ul {
            margin-left: 4rem;
        }
    }
</style>