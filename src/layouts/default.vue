<script setup lang="ts">
const mobileMenuCollapsed = ref(true);
const toggleMobileMenu = () => (mobileMenuCollapsed.value = !mobileMenuCollapsed.value);
</script>

<template>
  <div w-screen h-screen flex flex-col bg="[#ffffff]">
    <header fixed top-0 left-0 right-0 h-64px z-99>
      <div w-full h-full bg="[#ffffff]" style="box-shadow: 0 4px 56px rgb(0 0 0 / 12%);">
        <div relative w="full xl:1024px" h-full mx-auto p="x-20px lg:0">
          <div flex flex-row justify-between items-center h-full>
            <div flex flex-row items-center>
              <div cursor-pointer xl:hidden items-center mr-17px @click="toggleMobileMenu">
                <div relative inline-block w-20px h-24px space-y-1 h-full>
                  <div bg="[#222222]" top="-6px" w-20px h-2px rounded-4px />
                  <div bg="[#222222]" w-20px h-2px rounded-4px />
                  <div bg="[#222222]" bottom="-6px" w-20px h-2px rounded-4px />
                </div>
              </div>
              <div text="20px xl:24px" mb="2px xl:0" fw-700>PĀRTA</div>
              <div hidden sm:block>
                <QLink secondary ml-40px>ОБУЧЕНИЕ</QLink>
                <QLink secondary ml-20px>ПРЕПОДАВАТЕЛИ</QLink>
                <QLink secondary ml-20px>ОТЗЫВЫ</QLink>
                <QLink primary active ml-20px>БЕСПЛАТНЫЙ КУРС</QLink>
              </div>
            </div>

            <div flex flex-row items-center gap-30px>
              <QButton>ЛИЧНЫЙ КАБИНЕТ</QButton>
              <div leading-16px hidden lg:block>
                <div text="center 14px">8 (800) 222-86-63</div>
                <div text-12px text-center flex flex-row items-center gap-5px>
                  <QLink active text="!12px">whatsapp</QLink>
                  <span>или</span>
                  <QLink active text="!12px">telegram</QLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="absolute block xl:hidden bg-[#fff] rounded top-64px shadow-lg w-full transition duration-300 -z-1"
        :class="[mobileMenuCollapsed ? '-translate-y-120%' : '-translate-y-0']">
        <div flex flex-col py-14px text-18px w="full xl:1024px" px="20px sm:10px lg:0" relative mx-auto h-full>
          <div class="h-28px">
            <button class="flex items-center justify-start">
              <div class="i-carbon-devices" />
              <div mb-4px class="ml-10px">онлайн обучение</div>
            </button>
          </div>
          <div class="h-28px mt-14px">
            <button class="flex items-center justify-start">
              <div class="i-carbon-education" />
              <div mb-4px class="ml-10px">наши преподаватели</div>
            </button>
          </div>
          <div class="h-28px mt-14px">
            <button class="flex items-center justify-start">
              <div class="i-carbon-chat" />
              <div mb-4px class="ml-10px">отзывы и результаты</div>
            </button>
          </div>
          <div class="h-32px mt-14px" w-full text-center flex flex-row items-center text-14px justify-between px-10px>
            <div fw-500>8 (800) 222-86-63</div>
            <div flex flex-row items-center gap-5px>
              <QLink active>whatsapp</QLink>
              <span fw-500>или</span>
              <QLink active>telegram</QLink>
            </div>
          </div>
          <div class="h-28px mt-14px" text-center>
            <QLink primary active text="13px">ПОЛУЧИ БЕСПЛАТНЫЙ КУРС И ВЕБИНАРЫ</QLink>
          </div>
        </div>
      </div>
    </header>

    <main fixed left-10px right-10px top-74px bottom="50px xl:43px" pr-10px overflow-y-auto>
      <slot />
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
