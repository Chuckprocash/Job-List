<script setup>
    import Hero from '../components/Hero.vue';
    import Cards from '../components/Cards.vue';
    import JobListings from '../components/JobListings.vue';
</script>
<template>
    <Hero />
    <Cards />
    <JobListings :limit="3"/>
</template>