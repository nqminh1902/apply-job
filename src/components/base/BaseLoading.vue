<template>
    <div class="loading">
        <div class="loader">
            
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.loading{
    position: fixed;
    inset: 0;
    background-color: rgba($color: #ddd, $alpha: 0.3);
    display: flex ;
    align-items: center;
    justify-content: center;
}
    .loader {
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 40px;
    height: 40px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
</style>