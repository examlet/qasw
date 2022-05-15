<script setup lang="ts">
</script>

<template>
    <div w-screen h-screen flex flex-col bg="[#ffffff]">
        <header>
            <div absolute left="20px xl:50px" top="10px xl:30px">
                <p text="32px" fw-700>PĀRTA</p>
                <h1 text="[#4d4d4d] 14px" fw-500>ОНЛАЙН ШКОЛА</h1>
            </div>
        </header>
        <main fixed left-10px right-10px top-10px bottom="50px xl:43px">
            <section h-full w-full flex items-center justify-center>
                <div flex relative h-450px w="full xl:720px" my-20px border="xl:1px [#e1e3e6]" rounded-10px
                    overflow-hidden>
                    <div hidden xl:block h-full w="0 xl:360px" flex="grow-0 shrink-0" bg="[#f7f8f9]" p-28px>
                        <div class="w-full h-8px bg-[#ffdd2d] mb-20px rounded" />
                        <h1 class="font-sans text-lg font-normal leading-snug break-words mb-18px">
                            Авторизуйтесь на платформе, чтобы начать подготовку
                        </h1>
                        <ul class="mb-22px">
                            <li class="mb-2px py-10px flex items-center">
                                <div class="mb-5px w-28px h-28px flex-shrink-0 text-xl text-[#99a2ad] mr-12px">
                                    <div i-carbon-two-factor-authentication />
                                </div>
                                <div class="text-14px leading-tight w-1px flex-grow text-[#6d7885]">
                                    Единый аккаунт при входе через вконтакте, по телефону или почте
                                </div>
                            </li>
                            <li class="mb-2px py-10px flex items-center">
                                <div class="mb-5px w-28px h-28px flex-shrink-0 text-xl text-[#99a2ad] mr-12px">
                                    <div i-carbon-cloud-registry />
                                </div>
                                <div class="text-14px leading-tight w-1px flex-grow text-[#6d7885]">
                                    История входа и активности в аккаунте фиксируется, чтобы сделать твое обучение лучше
                                </div>
                            </li>
                            <li class="mb-2px py-10px flex items-center">
                                <div class="mb-5px w-28px flex-shrink-0 text-xl text-[#99a2ad] mr-12px" items-center>
                                    <div i-carbon-region-analysis-volume />
                                </div>
                                <div class="text-14px leading-tight w-1px flex-grow text-[#6d7885]">
                                    Параллельная сессия с нескольких устройств невозможна и будет приводить к выходу из
                                    аккаунта
                                </div>
                            </li>
                        </ul>
                        <div class="op60 text-sm fw300">
                            Регистрируясь, вы выражаете свое согласие с офертой оказания услуг и
                            <span fw-400>публичной офертой</span> онлайн-школы PARTA, и принимаете их <span
                                fw-400>условия</span>
                        </div>
                    </div>
                    <div class="w-full lg:w-360px h-full flex-grow-0 flex-shrink-0 box-border p-28px pb-16px">
                        <img mt="40px xl:0" mb-20px mx-auto z-99999
                            src="https://yastatic.net/s3/frontend/tutor/_/cover-8ada143dd5.svg" alt="" width="136"
                            height="auto">
                        <slot />
                    </div>
                </div>
            </section>
        </main>
        <footer fixed bottom-0 left-0 right-0 h="40px xl:33px" border="t [#e7e7e7]">
            <div w="full xl:1024px" h-full mx-auto p="x-20px xl:0">
                <div mt="5px xl:0" w-full h-full grid grid-cols="[1fr_1fr] xl:[2fr_1fr_1fr]"
                    grid-rows="[10px_10px] xl:[1fr]" gap="5px xl:0" text="xl:center" items-center>
                    <QLink col-span="2 xl:1" text="10px xl:12px">ООО «ПАРТА» ОГРН 1021801163977 ИНН 1831072214</QLink>
                    <QLink active text="10px xl:12px">Договор публичной оферты</QLink>
                    <QLink active text="10px xl:12px">Образовательная лицензия</QLink>
                </div>
            </div>
        </footer>
    </div>
</template>