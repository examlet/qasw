<script setup lang="ts">
</script>

<template>
  <NuxtLayout name="landing" h-full w="270px xl:full" mx-auto>
    <section id="start" pt="10px lg:50px">
      <div w="full xl:1024px" h-full mx-auto>
        <div grid grid-cols="[1fr] xl:[1fr_1fr]">
          <div relative mt="xl:50px">
            <h1 text="12px xl:15px [#4D4D4D]" fw-700>ОНЛАЙН ШКОЛА ПОДГОТОВКИ К ЕГЭ И ОГЭ</h1>
            <h2 mt="15px" text="28px xl:40px" fw-700 leading="28px xl:40px">
              Ты поступишь <br xl:hidden>на бюджет в ВУЗ своей мечты
            </h2>
            <h3 mt="15px" text="[#4D4D4D] 17px xl:18px" tracking-wide>
              Наша миссия: дать <span fw-600>достойное образование</span> и возможность поступления в вуз мечты 
              <span fw-600>каждому школьнику</span> и сделать его <span fw-600>повсеместно доступным</span> из любой точки мира 🔥
            </h3>
            <p text="[#4D4D4D] 14px xl:16px" mt="15px lg:20px" mb="5px 15px">от 129 ₽ за час, неделя — за наш счёт</p>
            <QButton bg-gradient-to-b from="[#fcc521]" to="[#ffdd2d]" w="full xl:240px" h="40px xl:60px" text="14px">
              НАЧАТЬ БЕСПЛАТНО</QButton>
            <!-- <QButton bg-gradient-to-b from="[#ffdd2d]" to="[#fcc521]" mt-30px w="240px" h="60px" text="14px">НАЧАТЬ БЕСПЛАТНО</QButton> -->
            <img hidden xl:inline-block absolute ml-20px mt-15px src="/img/title2.png" alt="" width="190">
            <img absolute top="25px xl:0" right="20px" src="/img/head.svg" alt="" width="50" height="auto">
          </div>
          <div relative w-full h-full>
            <img hidden xl:block absolute ml-60px src="/img/title1.png" alt="" width="180">
            <img src="/img/ipad.png" alt="Презентация школы" width="100%" height="100%">
            <img absolute mx-auto left="30px lg:140px" bottom="5px lg:20px" src="/img/title3.png" alt="" width="230">
            <img hidden xl:block absolute right-5px top-200px src="/img/pen.png" alt="" width="30">
            <img absolute mt="-90px" src="/img/face1.png" alt="" w="60px xl:100px" width="auto">
          </div>
        </div>
      </div>
    </section>
    <section id="features" pt="76px lg:146px">
      <div rounded bg="[#f5f5f7]" w-full h-auto py-10px>
        <div w="full xl:1024px" h-full mx-auto px="10px xl:0">
          <div grid grid-cols="[1fr_1fr] xl:[1fr_1fr_1fr_1fr]" gap-20px>
            <div bg="[#ffffff]" rounded-lg p-10px>
              <img src="/img/p1.svg" alt="" width="50">
              <div mt-10px>16 онлайн-занятий в месяц по 60 минут</div>
            </div>
            <div bg="[#ffffff]" rounded-lg p-10px>
              <img src="/img/p2.svg" alt="" width="45">
              <div mt-10px>Проверка домашних работ и практик</div>
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
      <div w="full xl:1024px" h-full mx-auto>
        <div text-center mb="20px">
          <h1 text="22px xl:36px" fw-700 underline underline-offset-5 decoration="3 [#ffdd2d] dashed">Отзывы выпускников</h1>
          <p mt-10px text="16px xl:20px">Реальные истории, эмоции и результаты</p>
        </div>
        <div pt-15px flex items-center justify-between overflow-x-scroll lg:overflow-hidden gap-40px>
          <div relative rounded min-w-200px w-200px h-400px>
            <img rounded src="/img/review1.webp" alt="" width="auto" height="auto">
            <div flex flex-row items-center mt-20px>
              <img src="/img/review1_photo.webp" alt="" width="48" height="48">
              <div ml-10px>
                <p fw-700>Кирилл Чистяков</p>
                <div flex flex-row items-center gap-5px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="14px [#4680c2]">@kchistyakov</p>
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
                <div flex flex-row items-center gap-5px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="14px [#4680c2]">@a.manina</p>
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
                <div flex flex-row items-center gap-5px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="14px [#4680c2]">@elzaa_zum</p>
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
                <div flex flex-row items-center gap-5px>
                  <img src="/img/vk.svg" alt="" width="auto" height="auto">
                  <p text="14px [#4680c2]">@id193694905</p>
                </div>
              </div>
            </div>
            <img absolute top="35%" left="38%" src="/img/play.svg" alt="" width="50" height="auto">
          </div>
        </div>
      </div>
    </section>
    <section id="results" pt="46px lg:100px">
      <div w="full xl:1024px" h-full mx-auto>
        <div text-center mb="40px lg:20px">
          <h1 text="22px xl:36px" fw-700 underline underline-offset-5 decoration="3 [#ffdd2d] dashed">Лучшие ВУЗы страны</h1>
          <p mt-10px text="16px xl:20px">Куда поступают наши ученики</p>
        </div>
        <div grid grid-cols="[1fr_1fr] xl:[1fr_1fr_1fr_1fr_1fr]" mt-20px gap-20px items-center>
          <div flex flex-col items-center>
            <img src="/img/vuz1.webp" alt="" width="80" height="auto">
            <p mt-5px text="16px" fw-600>МГУ</p>
            <p text="14px">224 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img src="/img/vuz2.webp" alt="" width="90" height="auto">
            <p mt-14px text="16px" fw-600>МГИМО</p>
            <p text="14px">106 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img src="/img/vuz3.webp" alt="" width="80" height="auto">
            <p mt-5px text="16px" fw-600>ВШЭ</p>
            <p text="14px">135 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img src="/img/vuz4.webp" alt="" width="80" height="auto">
            <p mt-5px text="16px" fw-600>МГТУ</p>
            <p text="14px">57 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img src="/img/vuz5.webp" alt="" width="80" height="auto">
            <p mt-5px text="16px" fw-600>СПБГУ</p>
            <p text="14px">105 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img mt-15px src="/img/vuz6.webp" alt="" width="140" height="auto">
            <p mt-13px text="16px" fw-600>ИТМО</p>
            <p text="14px">31 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img mt-15px src="/img/vuz7.webp" alt="" width="130" height="auto">
            <p mt-15px text="16px" fw-600>МФТИ</p>
            <p text="14px">46 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img src="/img/vuz8.webp" alt="" width="80" height="auto">
            <p mt-5px text="16px" fw-600>МГМУ</p>
            <p text="14px">44 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img src="/img/vuz9.webp" alt="" width="80" height="auto">
            <p mt-5px text="16px" fw-600>КФУ</p>
            <p text="14px">215 выпускника</p>
          </div>
          <div flex flex-col items-center>
            <img src="/img/vuz10.webp" alt="" width="80" height="auto">
            <p mt-5px text="16px" fw-600>МИФИ</p>
            <p text="14px">18 выпускника</p>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
