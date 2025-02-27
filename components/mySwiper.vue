<template>
    <!-- Swiper -->
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
        </div>
        <!-- 左右箭头 -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper/bundle'; // 确保导入 Swiper Bundle

onMounted(() => {
    new Swiper('.mySwiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination', // 修正选择器
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
    });
});
</script>

<style scoped lang="less">
.swiper {
    width: 100%;
    height: 100px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: skyblue;
    color: #fff;
}

.swiper-button-next, .swiper-button-prev {
    color: #000; /* 设置箭头颜色 */
}

.swiper-pagination {
    bottom: 10px; /* 分页器位置 */
}
</style>
