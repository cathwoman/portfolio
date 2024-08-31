<template>
    <div class="rotating-text">
        <p>CSS Animation is</p>
        <p>
            <span v-for="(letter, index) in currentWord.split('')" :key="index" class="word">
                <span v-for="(char, index) in letter.split('')" :key="index" class="letter"
                    :class="{ in: index === 0, out: index === 1, behind: index === 2 }">
                    {{ char }}
                </span>
            </span>
            <span>{{ currentWord }}</span>
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const words = ref([
    'awesome.',
    'beautiful.',
    'creative.',
    'fabulous.',
    'interesting.',
]);

const currentIndex = ref(0);
const currentWord = computed(() => words.value[currentIndex.value]);

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % words.value.length;
    }, 2000);
});

</script>

<style scoped>
.rotating-text {
    font-family: Lato, sans-serif;
    font-weight: 600;
    font-size: 36px;
    transform: translateX(-80px);

    p {
        display: inline-flex;
        margin: 0;
        vertical-align: top;

        .word {
            position: absolute;
            display: flex;
            opacity: 0;

            .letter {
                transform-origin: center center 25px;

                &.out {
                    transform: rotateX(90deg);
                    transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
                }

                &.in {
                    transition: 0.38s ease;
                }

                &.behind {
                    transform: rotateX(-90deg);
                }
            }
        }
    }
}

.alizarin {
    color: #e74c3c;
}

.wisteria {
    color: #8e44ad;
}

.peter-river {
    color: #3498db;
}

.emerald {
    color: #2ecc71;
}

.sun-flower {
    color: #f1c40f;
}
</style>