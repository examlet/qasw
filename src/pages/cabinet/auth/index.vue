<script setup lang="ts">
</script>

<template>
    <NuxtLayout name="auth">
        <p text="16px xl:20px" fw-600>Войдите или зарегистрируйтесь</p>
        <div my-20px>Через социальные сети</div>
        <QButton w-full>
            <div class="mb-3px mr-5px i-simple-icons-vk" />
            СТРАНИЦА ВКОНТАКТЕ
        </QButton>
        <div my-20px>Другим способом</div>
        <QButton w-full mb-20px>
            НОМЕР ТЕЛЕФОНА
        </QButton>
        <QButton w-full>
            ЭЛЕКТРОННАЯ ПОЧТА
        </QButton>
    </NuxtLayout>
</template>