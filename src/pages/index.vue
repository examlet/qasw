<script setup lang="ts">
</script>

<template>
  <div h-full w-full>
    <section id="start" pt="26px lg:50px">
      <div w="full xl:1024px" h-full mx-auto p="x-10px xl:0">
        <div grid grid-cols="[1fr] xl:[1fr_1fr]">
          <div relative mt="xl:50px">
            <h1 text="12px xl:15px [#808080]" fw-700>ОНЛАЙН ШКОЛА ПОДГОТОВКИ К ЕГЭ И ОГЭ</h1>
            <h2 mt="10px xl:20px" text="28px xl:40px" fw-700 leading="28px xl:40px">Ты поступишь на бюджет в ВУЗ своей
              мечты</h2>
            <p mt="15px xl:30px" text="14px xl:18px" tracking-wide>
              Наша цель, чтобы ты набрал нужное количество баллов<br hidden xl:block>
              для поступления<br xl:hidden>на <span fw-600 text="[#fcc521]">бюджет в лучший ВУЗ</span> 😎<br
                xl:hidden>Составим<br hidden xl:block>
              для тебя <span fw-600 text="[#fcc521]">индивидуальный план подготовки</span> 🚀<br>
              Ты сдашь экзамены минимум <span fw-600 text="[#fcc521]">на 30-35 баллов больше</span>,<br hidden xl:block>
              чем сейчас 🔥
            </p>
            <QButton bg-gradient-to-b from="[#fcc521]" to="[#ffdd2d]" mt-30px w="full xl:240px" h="60px" text="14px">
              НАЧАТЬ БЕСПЛАТНО</QButton>
            <!-- <QButton bg-gradient-to-b from="[#ffdd2d]" to="[#fcc521]" mt-30px w="240px" h="60px" text="14px">НАЧАТЬ БЕСПЛАТНО</QButton> -->
            <img hidden xl:inline-block absolute ml-20px mt-50px src="/img/title2.png" alt="" width="190">
          </div>
          <div relative w-full h-full>
            <img hidden xl:block absolute ml-60px src="/img/title1.png" alt="" width="180">
            <img src="/img/ipad.png" alt="Презентация школы" width="100%" height="100%">
            <img mx-auto mb="-20px xl:0" mt="xl:-40px" pl-20px src="/img/title3.png" alt="" width="300">
            <img hidden xl:block absolute right-5px top-200px src="/img/pen.png" alt="" width="30">
            <img absolute mt="-80px" src="/img/face1.png" alt="" w="60px xl:100px" width="auto">
          </div>
        </div>
      </div>
    </section>
    <section id="features" pt="46px lg:146px">
      <div rounded bg="[#f5f5f7]" w-full h-auto py-10px>
        <div w="full xl:1024px" h-full mx-auto p="x-10px xl:0">
          <div grid grid-cols="[1fr_1fr] xl:[1fr_1fr_1fr_1fr]" gap-20px>
            <div bg="[#ffffff]" rounded-lg p-10px>
              <img src="/img/p1.svg" alt="" width="50">
              <div mt-10px>16 онлайн-занятий в месяц по 60 минут</div>
            </div>
            <div bg="[#ffffff]" rounded-lg p-10px>
              <img src="/img/p2.svg" alt="" width="45">
              <div mt-10px>Проверка домашних заданий и практик</div>
            </div>
            <div bg="[#ffffff]" rounded-lg p-10px>
              <img src="/img/p3.svg" alt="" width="32">
              <div mt-10px>Поддержка 24/7 от личных кураторов</div>
            </div>
            <div bg="[#ffffff]" rounded-lg p-10px>
              <img src="/img/p4.svg" alt="" width="50">
              <div mt-10px>Закрытые чаты с другими учениками</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="reviews" pt="46px lg:100px">
      <div w="full xl:1024px" h-full mx-auto p="x-10px xl:0">
        <div text-center mb="20px">
          <h1 text="22px xl:36px" fw-700>Отзывы выпускников</h1>
          <p text="16px xl:20px">Реальные истории, эмоции и результаты</p>
        </div>
        <div p-10px pt-15px flex items-center justify-between overflow-x-scroll lg:overflow-hidden gap-40px>
          <div relative rounded min-w-200px w-200px h-400px>
            <img rounded src="/img/review1.webp" alt="" width="auto" height="auto">
            <div flex flex-row items-center mt-20px>
              <img src="/img/review1_photo.webp" alt="" width="48" height="48">
              <div ml-10px>
                <p fw-700>Кирилл Чистяков</p>
                <div flex flex-row items-center gap-10px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="[#0065f2]">@kchistyakov</p>
                </div>
              </div>
            </div>
            <img absolute top="35%" left="38%" src="/img/play.svg" alt="" width="50" height="auto">
          </div>
          <div relative rounded min-w-200px w-200px h-400px>
            <img rounded src="/img/review2.webp" alt="" width="auto" height="auto">
            <div flex flex-row items-center mt-20px>
              <img src="/img/review2_photo.webp" alt="" width="48" height="48">
              <div ml-10px>
                <p fw-700>Аня Манина</p>
                <div flex flex-row items-center gap-10px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="[#0065f2]">@a.manina</p>
                </div>
              </div>
            </div>
            <img absolute top="35%" left="38%" src="/img/play.svg" alt="" width="50" height="auto">
          </div>
          <div relative rounded min-w-200px w-200px h-400px>
            <img rounded src="/img/review3.webp" alt="" width="auto" height="auto">
            <div flex flex-row items-center mt-20px>
              <img src="/img/review3_photo.webp" alt="" width="48" height="48">
              <div ml-10px>
                <p fw-700>Эльза Зумагулова</p>
                <div flex flex-row items-center gap-10px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="[#0065f2]">@elzaa_zum</p>
                </div>
              </div>
            </div>
            <img absolute top="35%" left="38%" src="/img/play.svg" alt="" width="50" height="auto">
          </div>
          <div relative rounded min-w-200px w-200px h-400px>
            <img rounded src="/img/review4.webp" alt="" width="auto" height="auto">
            <div flex flex-row items-center mt-20px>
              <img src="/img/review4_photo.webp" alt="" width="48" height="48">
              <div ml-10px>
                <p fw-700>Арина Королёва</p>
                <div flex flex-row items-center gap-10px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="[#0065f2]">@id193694905</p>
                </div>
              </div>
            </div>
            <img absolute top="35%" left="38%" src="/img/play.svg" alt="" width="50" height="auto">
          </div>
        </div>
      </div>
    </section>
    <section h-2000px>
    </section>
  </div>
</template>
