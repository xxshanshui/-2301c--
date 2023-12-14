<template>
    <div>
        <h1>子</h1>
        {{ qwe.qqname }}
        {{ qwe.job }}
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
defineProps(['qwe'])
</script>
