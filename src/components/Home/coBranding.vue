<template>
    <div class="co-branding co-branding-bg">
        <div class="container py-9 py-md-12">
            <h2 class="text-white fw-bold text-center mb-6 mb-md-10">
                聯名設計鏡框
            </h2>
            <div class="g-6 g-lg-0 row">
                <div v-for="data in datas" :key="data.id" class="col-lg-6">
                    <!---->
                    <div class="text-center">
                        <img :src="data.imageUrl_sm" class="d-md-none img-fluid" :alt="data.title" />
                        <img :src="data.imageUrl" class="d-none d-md-inline-block img-fluid" :alt="data.title" />
                        <p class="co-branding-text py-2 text-primary fw-bold fst-italic bg-white d-lg-none">
                            {{ data.title }}
                        </p>
                    </div>
                    <!---->
                </div>
            </div>
            <div class="row g-0 bg-white">
                <div v-for="data in datas" :key="data.id" class="col-lg-6">
                    <!---->
                    <div class="text-center">
                        <p class="co-branding-text py-2 text-primary fw-bold fst-italic bg-white d-none d-lg-block">
                            {{ data.title }}
                        </p>
                    </div>
                    <!---->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    import homeSection4_1 from "@/assets/images/home/home-section4-1.png";
    import homeSection4_1_sm from "@/assets/images/home/home-section4-1-sm.png";
    import homeSection4_2 from "@/assets/images/home/home-section4-2.png";
    import homeSection4_2_sm from "@/assets/images/home/home-section4-2-sm.png";

    const datas = ref([
        {
            id: 1,
            imageUrl_sm: homeSection4_1_sm,
            imageUrl: homeSection4_1,
            title: "DOUBLE A+",
            description: "",
        },
        {
            id: 2,
            imageUrl_sm: homeSection4_2_sm,
            imageUrl: homeSection4_2,
            title: "YOUTH",
            description: "",
        },
    ]);
</script>

<style scoped>
    .co-branding.co-branding-bg {
        background: url('../../assets/images/home/index-bg-sm.png') no-repeat center;
        background-size: cover;
    }

    .co-branding h2 {
        font-size: 24px;
    }

    .co-branding-text {
        font-size: 48px;
    }

    @media (min-width: 768px) {

        .co-branding.co-branding-bg {
            background: url('../../assets/images/home/index-bg-md.png') no-repeat center;
            background-size: cover;
        }

        .co-branding h2 {
            font-size: 48px;
        }

    }

    @media (min-width: 992px) {

        .co-branding.co-branding-bg {
            background: url('../../assets/images/home/index-bg.png') no-repeat center;
            background-size: cover;
        }

    }
</style>