<template>
  <div class="service bg-gs-pink">
    <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" class="container py-9 py-md-12">
      <h2 class="text-gs-red-900 fw-bold text-center mb-8">
        用專業的心，做專業的事
      </h2>
      <div class="row g-6">
        <ul v-for="data in datas" :key="data.id" class="col-md-6 col-lg-3">
          <!---->
          <li class="service-card text-center">
            <img :src="data.imageUrl" width="83" :alt="data.title" />
            <p class="fs-4 mt-6 mb-2 text-gs-red-900 fw-bold">
              {{ data.title }}
            </p>
            <p class="text-start">
              {{ data.description }}
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

  import homeSection2_1 from "@/assets/images/home/home-section2-1.png";
  import homeSection2_2 from "@/assets/images/home/home-section2-2.png";
  import homeSection2_3 from "@/assets/images/home/home-section2-3.png";
  import homeSection2_4 from "@/assets/images/home/home-section2-4.png";

  const datas = ref([
    {
      id: 1,
      imageUrl: homeSection2_1,
      title: "單一價格",
      description: "無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。",
    },
    {
      id: 2,
      imageUrl: homeSection2_2,
      title: "20 分鐘即可取件",
      description:
        "為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。",
    },
    {
      id: 3,
      imageUrl: homeSection2_3,
      title: "安心售後服務",
      description:
        "我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。",
    },
    {
      id: 4,
      imageUrl: homeSection2_4,
      title: "關於鏡片",
      description: "使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。",
    },
  ]);
</script>

<style scoped>
  .service h2 {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    .service h2 {
      font-size: 3rem;
    }
  }
</style>