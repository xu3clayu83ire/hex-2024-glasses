<script setup>
   // import { ref } from "vue";
</script>

<template>
    <div class="location container my-12">
        <h1 class="fw-bold mb-6 mb-md-8 ps-4">門市據點</h1>
        <div class="location-select d-flex align-items-center mb-6 mb-md-9">
            <p class="me-2 me-md-6 text-nowrap">選擇分店</p>
            <div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>台北中山旗艦店</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
        <div class="row g-6">
            <div class="col-lg-6">
                <div class="row d-block d-sm-flex d-lg-block">
                    <div class="col">
                        <img src="../assets/images/store/storepage-1.png" class="img-fluid h-100 object-fit-cover"
                            alt="">
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header bg-white fs-4">
                                台北中山旗艦店
                            </div>
                            <div class="card-body">
                                <p class="card-text fs-5 d-flex align-items-center mb-2">
                                    <span class="material-icons-outlined fs-5 me-2">
                                        call
                                    </span>
                                    <span>電話：(02)000-1234</span>
                                </p>
                                <p class="card-text fs-5 d-flex align-items-center mb-2">
                                    <span class="material-icons-outlined fs-5 me-2">
                                        schedule
                                    </span>
                                    <span>營業時間：10:00-21:00</span>
                                </p>
                                <p class="card-text fs-5 d-flex align-items-start">
                                    <span class="material-icons-outlined me-2">
                                        location_on
                                    </span>
                                    <span class="d-inline-block">地址：台北市中山區南京東路25巷2-1號</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4636121640947!2d121.53529517592672!3d25.05227103755458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdf92494d29%3A0xd908a8a881f73476!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuInmrrUyNeiZnw!5e0!3m2!1szh-TW!2stw!4v1723294014073!5m2!1szh-TW!2stw"
                    style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .location h1 {
        font-size: 24px;
        position: relative;
    }

    .location iframe {
        min-height: 208px;
        width: 100%;
    }

    .location h1::before {
        position: absolute;
        top: 0px;
        left: 0px;
        content: "";
        width: 8px;
        height: 100%;
        background-color: #9F1213;
    }

    @media (min-width: 768px) {
        .location h1 {
            font-size: 48px;
        }

        .location .location-select p {
            font-size: 24px;
        }

        .location iframe {
            min-height: 414px;
            height: 100%;
            width: 100%;
        }
    }
</style>
