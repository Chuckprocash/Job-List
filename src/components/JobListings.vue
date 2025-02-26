<script setup>
    // import jobData from '../jobs.json';
    import { ref, reactive, onMounted, defineProps } from 'vue';
    import JobListing from './JobListing.vue';
    import axios from 'axios';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

    const props = defineProps({
        limit:{
            type: Number,  
        },
    });

    const state = reactive({
        jobs: [],
        isLoading: true
    });
    // console.log(jobs.value)

    onMounted(async () => {
        try {
            const response = await axios.get('http://localhost:3001/jobs');
            state.jobs = response.data;
        } catch (error) {
            console.log("error loading data", error)
        } finally {
            state.isLoading = false;
        }
    });

    



</script>
<template>
    <div v-if="state.isLoading" class="text-center">
        <PulseLoader color="#38a169" />
    </div>
    <div v-else="!state.isLoading" class="">
        <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
              Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="job in state.jobs.slice(0, props.limit || state.jobs.length)" :key="job.id">
                    <JobListing :job="job" />
                </div>
            </div>  
        </div>
        </section>
        <section class="m-auto max-w-lg my-10 px-6" v-if="limit">
        <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
        </section>
    </div>
</template>
