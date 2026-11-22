<template>
    <component
        :is="href ? 'a' : 'div'"
        :href="href"
        :target="href ? target : undefined"
        :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
        :data-tooltip="tooltip"
        :aria-label="tooltip"
        class="contact-icon-link"
    >
       <slot></slot> 
    </component>
</template>

<script setup>
defineProps({
    size: {
        type: Number,
        default: 28,
    },
    href: {
        type: String,
        required: false,
    },
    tooltip: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: false,
        default: "_self",
    },
    color: {
        type: String,
        default: "#555555",
    }
})
</script>

<style scoped>
.contact-icon-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: v-bind(size + "px");
    height: v-bind(size + "px");
    color: v-bind(color);
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
}

.contact-icon-link:hover {
    color: #c90000;
    transform: translateY(-2px);
}

.contact-icon-link :deep(svg) {
    width: 18px !important;
    height: 18px !important;
    display: block;
    transition: transform 0.3s ease;
}

.contact-icon-link:hover :deep(svg) {
    transform: scale(1.15);
}

.contact-icon-link::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 130%;
    left: 50%;
    transform: translateX(-50%) translateY(8px);
    background: #ffffff;
    color: #0a0a0a;
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 4px 8px;
    border-radius: 3px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 10;
}

.contact-icon-link::after {
    content: '';
    position: absolute;
    bottom: 115%;
    left: 50%;
    transform: translateX(-50%) translateY(8px);
    border: 4px solid transparent;
    border-top-color: #ffffff;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 10;
}

.contact-icon-link:hover::before,
.contact-icon-link:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}
</style>