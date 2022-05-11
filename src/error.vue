<script setup lang="ts">
</script>

<template>
  <div flex flex-col items-center justify-center w-screen h-screen 
    style="background: url(/img/error-bg.svg) 50%/cover no-repeat;">
    <h1 text="32px" fw-700>404</h1>
    <h3 fw-600>Страница не найдена</h3>
    <p my-10px text="14px [#190134]">
        Возможно вы ошиблись в адресе
        <br>
        или страница была перемещена.
    </p>
    <QButton>НА ГЛАВНУЮ</QButton>
  </div>
</template>