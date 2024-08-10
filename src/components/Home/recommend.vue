<template>
    <div class="recommend">
        <div class="container py-9 py-md-12">
            <h2 class="text-gs-red-900 fw-bold text-center mb-6 mb-md-10">
                顧客推薦
            </h2>
            <div class="row g-6">
                <div v-for="data in datas" :key="data.id" class="col-md-6 col-lg-3 d-flex justify-content-center">
                    <!---->
                    <div class="recommend-card card rounded-1 shadow">
                        <img :src="data.imageUrl" :alt="data.title">
                        <div class="card-body">
                            <div class="d-flex flex-column h-100">
                                <div>
                                    <h5 class="mb-2">{{data.title}}</h5>
                                    <p class="card-text">{{data.description}}</p>
                                </div>
                                <p class="date mt-auto small">
                                    {{data.date}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    import homeSection5_1 from "@/assets/images/home/home-section5-1.png";
    import homeSection5_2 from "@/assets/images/home/home-section5-2.png";
    import homeSection5_3 from "@/assets/images/home/home-section5-3.png";
    import homeSection5_4 from "@/assets/images/home/home-section5-4.png";

    const datas = ref([
        {
            id: 1,
            imageUrl: homeSection5_1,
            title: "Jessy",
            description: "眼鏡品質優良，下次還會想來這邊購買！",
            date: '2021/06/20'
        },
        {
            id: 2,
            imageUrl: homeSection5_2,
            title: "凱倫",
            description: "做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！",
            date: '2021/04/18'
        },
        {
            id: 3,
            imageUrl: homeSection5_3,
            title: "悠悠",
            description: "謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！",
            date: '2020/12/25'
        },
        {
            id: 4,
            imageUrl: homeSection5_4,
            title: "Kyuan",
            description: "服務很好，品質沒有任何問題，非常喜歡。",
            date: '2020/10/31'
        },
    ]);
</script>

<style scoped>
    .recommend h2 {
        font-size: 1.5rem;
    }

    .recommend-card {
        max-width: 348px;
        height: 511px;
    }

    .recommend-card img {
        max-width: 348px;
        width: 100%;
    }

    .recommend-card .date {
        color: #707070;
    }

    @media (min-width: 768px) {
        .recommend h2 {
            font-size: 3rem;
        }

        .recommend-card img {
            max-width: 336px;
            width: 100%;
        }
    }

    @media (min-width: 992px) {
        .recommend-card img {
            max-width: 416px;
            width: 100%;
        }
    }
</style>