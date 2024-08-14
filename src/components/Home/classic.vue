<template>
    <div class="classic">
        <div class="container py-9 py-md-12">
            <h2 class="text-gs-red-900 fw-bold text-center mb-6 mb-md-10">
                經典系列鏡框
            </h2>
            <div class="row g-6">
                <ul v-for="data in datas" :key="data.id" class="col-lg-4">
                    <!---->
                    <li class="classic-card bg-transparent text-center">
                        <img :src="data.imageUrl" :alt="data.title" />
                        <p class="mt-2 text-primary fw-bold fst-italic">
                            {{ data.title }}
                        </p>
                    </li>
                    <!---->
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    import homeSection3_1 from "@/assets/images/home/home-section3-1.png";
    import homeSection3_2 from "@/assets/images/home/home-section3-2.png";
    import homeSection3_3 from "@/assets/images/home/home-section3-3.png";

    const datas = ref([
        {
            id: 1,
            imageUrl: homeSection3_1,
            title: "OPTICAL",
            description: "",
        },
        {
            id: 2,
            imageUrl: homeSection3_2,
            title: "SUNGLASSES",
            description: "",
        },
        {
            id: 3,
            imageUrl: homeSection3_3,
            title: "FUNCTIONAL",
            description: "",
        },
    ]);
</script>

<style scoped>
    .classic h2 {
        font-size: 1.5rem;
    }

    .classic-card p {
        font-size: 3rem;
    }

    .classic-card img {
        max-width: 348px;
        width: 100%;
    }

    @media (min-width: 768px) {
        .classic h2 {
            font-size: 3rem;
        }

        .classic-card img {
            max-width: 336px;
            width: 100%;
        }
    }

    @media (min-width: 992px) {
        .classic-card img {
            max-width: 416px;
            width: 100%;
        }
    }
</style>