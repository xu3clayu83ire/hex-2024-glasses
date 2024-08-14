<template>
    <div class="conntact bg-gs-pink">
        <div class="container py-9 py-md-12">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-6">
                    <h2 class="text-gs-red-900 fw-bold text-center mb-8">
                        聯絡我們
                    </h2>
                    <p>
                        我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
                    </p>
                    <form class="mt-6">
                        <div class="mb-4">
                            <label for="inputName" class="form-label">姓名</label>
                            <input type="text" class="form-control" id="inputName" placeholder="陳小明">
                        </div>
                        <div class="mb-4">
                            <label for="inputPhone" class="form-label">聯絡電話</label>
                            <input type="tel" class="form-control" id="inputPhone" placeholder="0912-345-678">
                        </div>
                        <div class="mb-4">
                            <label for="inputEmail" class="form-label">電子郵件</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="example@email.com">
                        </div>
                        <div class="mb-4">
                            <label for="inputComment" class="form-label">意見反應</label>
                            <textarea class="form-control" id="inputComment" placeholder="請輸入您的意見" rows="5"></textarea>
                        </div>
                        <div class="form-check mb-6">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
                            </label>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn-submit btn btn-primary">確認送出</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";

</script>

<style scoped>
    .conntact h2 {
        font-size: 1.5rem;
    }

    .conntact form .form-control,
    .conntact form .form-check-input:not(:checked) {
        background-color: transparent;
    }

    .conntact form .form-control,
    .conntact form .form-check-input {
        border-color: #000;
    }

    .conntact form .btn-submit {
        width: 100%;
    }

    @media (min-width: 768px) {
        .conntact h2 {
            font-size: 3rem;
        }

        .conntact form .btn-submit {
            width: 70%;
        }
    }
</style>