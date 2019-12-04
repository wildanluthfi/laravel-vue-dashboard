<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="container">
                            <base-progress type="success" :height="8" :value="0" label="Learning Progress"></base-progress>
                        </div>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <!--Tables-->
                    <div class="row">
                        <!-- <div class="col-xl-8 mb-5 mb-xl-0">
                            <page-visits-table></page-visits-table>
                        </div>
                        <div class="col-xl-4">
                            <social-traffic-table></social-traffic-table>
                        </div> -->
                    </div>
                    <!--End tables-->
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import Vue from 'vue'
    import VueClipboard from 'vue-clipboard2'
    import BTooltipDirective from 'bootstrap-vue/es/directives/tooltip'
    
    // Tables
    // import SocialTrafficTable from './Dashboard/SocialTrafficTable';
    // import PageVisitsTable from './Dashboard/PageVisitsTable';

    Vue.use(VueClipboard)
    export default {
        components: {
            // PageVisitsTable,
            // SocialTrafficTable,
        },
        directives: {
            'b-tooltip': BTooltipDirective
            },
            methods: {

            }
    };
</script>
<style></style>
