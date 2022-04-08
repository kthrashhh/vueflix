<template>
    <p :class="type">
        <slot></slot>
    </p>
</template>



<script>
export default {
    props: ['type']
}
</script>



<style scoped>
    p.error {
        color: red;
    }

    p.warning {
        color: orange;
    }

    p.ok {
        color: green;
    }
</style>