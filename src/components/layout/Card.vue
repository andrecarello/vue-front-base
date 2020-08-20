<template>
	<div class="bg-gray-200 p-15 sm:p-30">
        <div class="card-header" v-if="title">
            {{ title }}
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>

</style>