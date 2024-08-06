<template>
    <header class="gs-nav bg-primary">
        <div class="container px-0 px-sm-3">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-12 col-sm-2">
                    <div class="gs-nav-img py-3 px-3 px-sm-0">
                        <img src="../assets/images/logo-white.png" width="80" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="gs-nav-list">
                        <ul class="d-flex">
                            <li><a href="">系列鏡框</a></li>
                            <li><a href="">門市據點</a></li>
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

</script>

<style scoped>
    .gs-nav-list a {
        color: #fff;
        font-size: 20px;
        white-space: nowrap;
    }

    .gs-nav-list li {
        width: 50%;
        border: #fff 1px solid;
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