<template>
    <section id="contacts" class="contacts">
        <div class="contacts-row">
            <div class="contacts-icons">

                <UiIcon
                    v-for="(icon, index) in icons"
                    :key="index"
                    :href="icon.href"
                    :tooltip="icon.tooltip"
                    :target="icon.target"
                >
                    <component :is="icon.component">
                    </component>
                </UiIcon>
            </div>
        </div>
    </section>
</template>

<script setup>

import IconEmail from "@/components/icons/IconEmail.vue";
import IconLitres from "@/components/icons/IconLitres.vue";
import IconYouTube from "@/components/icons/IconYouTube.vue";
import IconVkontakte from "@/components/icons/IconVkontakte.vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";
import IconStihi from "@/components/icons/IconStihi.vue";
import UiIcon from "@/components/portfolio-page/ui/UiIcon.vue";


const icons = [
    {
        href: "mailto:appolllllllo@gmail.com",
        tooltip: "Email",
        component: IconEmail,
    },
    {
        href: "https://www.litres.ru/author/tata-appolonova/",
        target: "_blank",
        tooltip: "Литрес",
        component: IconLitres,
    },
    {
        href: "https://www.youtube.com/@appolllllllo",
        target: "_blank",
        tooltip: "YouTube",
        component: IconYouTube,
    },
    {
        href: "https://stihi.ru/author/appolllllllo",
        target: "_blank",
        tooltip: "Стихи.ру",
        component: IconStihi,
    },
    {
        href: "https://vk.com/appolllllllo",
        target: "_blank",
        tooltip: "ВКонтакте",
        component: IconVkontakte,
    },
    {
        href: "https://github.com/appolllllllo",
        target: "_blank",
        tooltip: "GitHub",
        component: IconGitHub,
    }
]
</script>

<style scoped>
.contacts {
    background: #0a0a0a;
    padding: 18px 60px;
    border-top: 1px solid #1a1a1a;
}

.contacts-row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contacts-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
}

@media (max-width: 768px) {
    .contacts {
        padding: 15px 20px;
    }

    .contacts-icons {
        gap: 18px;
    }
}
</style>