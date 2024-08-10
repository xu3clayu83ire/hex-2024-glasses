<template>
    <div class="banner">
        <div class="banner-bg-img">
            <div class="container align-items-center justify-content-end d-flex h-100">
                <!---->
                <div class="banner-text text-gs-red-900 text-end">
                    <p>Promise-Desert 2020 早春系列</p>
                    <h1 class="fw-bold mb-2 mb-md-1">看得清，才能看得遠</h1>
                    <button class="btn btn-primary fs-5">立即購買</button>
                </div>
                <!---->
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .banner .banner-bg-img {
        background: url('../../assets/images/home/home-header-sm.png') no-repeat center;
        /*background-position: center;
        top left; 靠左上角 (defult)*/
        /*background-repeat: no-repeat;
        repeat; (defult)*/
        background-size: cover;
        height: 396px;
    }


    @media (min-width: 576px) {
        .banner .banner-bg-img {
            background: url('../../assets/images/home/home-header.png') no-repeat center;
            background-size: cover;
            height: 787px;
        }

        .banner .banner-text p {
            font-size: 36px;
        }

        .banner .banner-text h1 {
            font-size: 64px;
        }
    }
</style>