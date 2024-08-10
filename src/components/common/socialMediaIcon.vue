<template>
    <div>
        <ul class="socialMediaIcon d-flex">
            <li>
                <a href="">
                    <img src="../../assets/images/ic-social_fb.png" alt="Facebook">
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/images/ic_social_ig.png" alt="Instagram">
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/images/ic_social_line.png" alt="Line">
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .socialMediaIcon li:not(:last-child) {
        margin-right: 0.5rem;
    }

    .socialMediaIcon li>a>img {
        width: 24px;
    }

    @media (min-width: 768px) {

        .socialMediaIcon li:not(:last-child) {
            margin-right: 1rem;
        }

        .socialMediaIcon li>a>img {
            width: 40px;
        }
    }
</style>