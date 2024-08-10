<template>
  <footer class="bg-primary">
    <div class="container py-6">
      <div
        class="d-none d-md-flex justify-content-between align-items-center mb-md-8"
      >
        <ul class="footer-nav d-md-flex d-none">
          <li><a href="">首頁</a></li>
          <li><a href="">系列鏡框</a></li>
          <li><a href="">門市據點</a></li>
          <li><a href="">部落格</a></li>
          <li><a href="">常見問題</a></li>
        </ul>
        <SocialMediaIcon />
      </div>
      <div
        class="d-flex d-md-block justify-content-between align-items-center mb-md-2"
      >
        <p class="footer-tel align-items-center d-flex">
          <span class="material-icons-outlined me-2 me-md-6">call</span>
          <a href="tel:0800-000-000"> 0800-000-000</a>
        </p>
        <SocialMediaIcon class="d-md-none" />
      </div>
      <p class="footer-email align-items-center d-flex">
        <span class="material-icons-outlined me-2 me-md-6">mail</span>
        <a href="mailto:glasses@business.com">glasses@business.com</a>
      </p>
      <hr class="my-md-8 mt-6 mb-4 text-white" />
      <div class="d-md-flex justify-content-between align-items-center">
        <p>Copyright © 2020 Glasses.All rights reserved.</p>
        <div class="footer-policy d-sm-flex gap-sm-10">
          <p class="my-2 my-sm-0">
            <a href=""> 隱私權政策</a>
          </p>
          <p>
            <a href=""> 服務條款</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialMediaIcon from "./common/socialMediaIcon.vue";
</script>

<style scoped>
footer a,
footer p {
  color: #fff;
}

footer .material-icons {
  font-size: 18px;
}

@media (min-width: 768px) {
  .footer-tel,
  .footer-email {
    font-size: 36px;
  }

  footer .footer-nav li:not(:last-child) {
    margin-right: 3rem;
  }

  footer .material-icons-outlined {
    font-size: 36px;
  }

  footer .footer-policy {
    font-size: 14px;
  }
}
</style>