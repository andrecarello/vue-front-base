<template>
  <div class="header">
    <OiIcon style="width: 50px; height: 50px" />
    <h1>

    </h1>
  </div>
</template>
<script>
import OiIcon from "@/components/icons/Oi";

export default {
  name: "HeadersAuth",
  components: {
    OiIcon,
  },
};
</script>
<style lang="scss" scoped>
.header {
	height: 162px;
	background-color: var(--danger);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
