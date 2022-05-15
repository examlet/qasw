<script setup lang="ts">
const popup = ref(false)
const togglePopup = () => (popup.value = !popup.value)
const popup2 = ref(false)
const togglePopup2 = () => {
  popup2.value = !popup2.value;
  popup.value = !popup.value;
}
</script>

<template>
  <div h-screen w-screen flex flex-col>
    <QPopup v-model="popup" class="z-99999">
      <p text="20px" fw-600 mb-20px>Ну что же, давайте начнём</p>
      <div w-540px h-200px flex items-center justify-between gap-24px>
        <div w="50%" h-full>
          <img mx-auto src="https://yastatic.net/s3/frontend/tutor/_/cover-8ada143dd5.svg" alt="" width="136"
            height="auto">
          <p my-10px>Я хочу больше узнать о школе и занятиях</p>
          <QButton w-full @click="togglePopup2">ПОДРОБНЕЕ</QButton>
        </div>
        <div w-1px h-200px bg="[#e5ebef]" />
        <div w="50%" h-full>
          <img mx-auto src="https://yastatic.net/s3/frontend/tutor/_/cover-8ada143dd5.svg" alt="" width="136"
            height="auto">
          <p my-10px>Я все знаю и хочу начать подготовку</p>
          <!-- <p>Я хочу больше узнать о школе</p> -->
          <QButton w-full>ПРОДОЛЖИТЬ</QButton>
        </div>
      </div>
    </QPopup>

    <QPopup v-model="popup2" class="z-99999">
      <p text="20px" fw-600 mb-20px>Спасибо за интерес к нашей онлайн-школе</p>
      <p text="14px" fw-500>Пожалуйста, оставьте заявку и менеджер свяжется в самое ближайшее время!</p>
      <div w-540px h-200px flex items-center justify-between gap-24px>
        kek
      </div>
    </QPopup>

    <header fixed top-0 left-0 right-0 h-64px z-99>
      <div absolute left="20px xl:50px" top="10px xl:30px">
        <p text="32px" fw-700>PĀRTA</p>
        <h1 text="[#4d4d4d] 14px" fw-500>ОНЛАЙН ШКОЛА</h1>
      </div>
    </header>

    <main fixed left-10px right-10px top-10px bottom="50px xl:43px">
      <section w="270px xl:full" mx-auto relative flex mt="94px xl:114px">
        <div h-full mx-auto>
          <h1 text="center 12px xl:44px" fw-600 underline underline-offset="4 xl:15" decoration="2 [#ffdd2d] wavy">
            Учиться и готовиться к экзаменам — просто!
          </h1>
          <h2 mt="10px xl:15px" text="10px xl:18px" mx-auto fw-500>
            <div flex flex-row gap-20px justify-center>
              <p>ЕГЭ</p>
              <p>ОГЭ</p>
              <p>Итоговое сочинение</p> 
              <p hidden xl:block>10 класс</p>
              <p hidden xl:block>8 класс</p>
              <p hidden xl:block>Летняя подготовка</p>
            </div>
            <div flex xl:hidden flex-row gap-20px justify-center>
              <p>10 класс</p>
              <p>8 класс</p>
              <p>Летняя подготовка</p>
            </div>
            <p></p>

          </h2>
          <div flex flex-col xl:flex-row items-center justify-between gap-20px px="xl:50px" mt="24px xl:64px">
            <div text="center xl:left" rounded w="full xl:40%" bg="[#ffffff]" border="1px [#efefef]" p="12px xl:24px">
              <img mx-auto src="https://yastatic.net/s3/edu/main_page_search.svg" alt="" w="100px xl:auto">
              <p my="10px" text="16px xl:24px" fw-600>Впервые на платформе</p>
              <QButton @click="togglePopup">НАЧАТЬ ЗАНИМАТЬСЯ</QButton>
              <div hidden xl:block mt-20px text="14px" fw-500>
                <p>Базовый курс по всем предметам</p>
                <p>Открытые вебинары каждую неделю</p>
                <p>Приводи друзей и занимайся бесплатно</p>
              </div>
            </div>
            <div text="center xl:left"  rounded w="full xl:40%" bg="[#ffffff]" border="1px [#efefef]" p="12px xl:24px">
              <img mx-auto src="https://yastatic.net/s3/edu/main_page_ege.svg" alt="" w="100px xl:auto">
              <p my="10px" text="16px xl:24px" fw-600>Уже занимаюсь с вами</p>
              <QButton>ПРОДОЛЖИТЬ ПОДГОТОВКУ</QButton>
              <div hidden xl:block mt-20px text="14px" fw-500>
                <p>Какое-то длинное описание</p>
                <p>Какое-то длинное разное описание</p>
                <p>Какое-то длинное разное описание</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer fixed bottom-0 left-0 right-0 h="40px xl:33px" border="t [#e7e7e7]">
      <div w="full xl:1024px" h-full mx-auto p="x-20px xl:0">
        <div mt="5px xl:0" w-full h-full grid grid-cols="[1fr_1fr] xl:[2fr_1fr_1fr]" grid-rows="[10px_10px] xl:[1fr]"
          gap="5px xl:0" text="xl:center" items-center>
          <QLink col-span="2 xl:1" text="10px xl:12px">ООО «ПАРТА» ОГРН 1021801163977 ИНН 1831072214</QLink>
          <QLink active text="10px xl:12px">Договор публичной оферты</QLink>
          <QLink active text="10px xl:12px">Образовательная лицензия</QLink>
        </div>
      </div>
    </footer>
  </div>
</template>
