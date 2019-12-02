<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row mb-5" v-for="(item, index) in items" v-bind:key="index">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">{{item.title}}</h3>
                        </div>
                        <div class="card-body">
                            <div class="row icon-examples">
                                <div class="col" v-html="item.content" style="line-height: 2;">
                                    {{item.content}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </base-header>

    </div>
</template>
<script>
    import Vue from 'vue'
    import VueClipboard from 'vue-clipboard2'
    import BTooltipDirective from 'bootstrap-vue/es/directives/tooltip'
    Vue.use(VueClipboard)
    export default {
        directives: {
        'b-tooltip': BTooltipDirective
        },
        data: () => { return {
                items: [
                    {
                        title: 'Subject/Verb Agreement',
                        content: `Subject/verb agreement is simple: if the subject of a sentence is singular, then the verb must be singular; if the subject of the sentence is plural, then the verb must be plural. An s on a verb usually indicates that a verb is singular, while an s on a noun usually indicates that the noun is plural. (Do not forget irregular plurals of nouns, such as women, children, and people.)<br><br>
                        The boy walks to school.<br>
                        The boys walk to school.`
                    },
                    {
                        title: 'Parallel Structure',
                        content: `In good English an attempt should be made to make the language as even and balanced as possible. This balance is called "parallel structure." You can achieve parallel structure by making the forms of words as similar as possible. The following is an example of a sentence that is not parallel:<br><br> 
                        I like to sing and dancing.<br><br>
                        The problem in this sentence is not the expression to sing, and the problem is not the word dancing.
                        The expression to sing is correct by itself, and the word dancing. The expression to sing is correct by
                        itself, and the word dancing is correct by itself. Both of the following sentences are correct:<br><br>
                        I like to sing.<br>
                        I like dancing.<br><br>
                        The problem in the incorrect example is that to sing and dancing are joined together in one sentence
                        with and. They are different forms where it is possible to have similar forms; therefore the example is not parallel. It can be corrected in two different ways: we can make the first expression like the second, or we can make the second expression like the first.<br><br>
                        I like to sing and to dance.<br>
                        I like singing and dancing.`
                    },
                    {
                        title: 'Comparatives and Superlatives',
                        content: `The comparative is formed with either <i>-er</i> or <i>more</i> and <i>than</i>. In the comparative, <i>-er</i> is used with short adjectives such as <i>tall</i>, and <i>more</i> is used with longer adjectives such as <i>beautiful</i>.<br><br>
                        The superlative is formed with <i>the</i>, either <i>-est</i> or <i>most</i>. Similar to comparative, <i>-est</i> is used with short adjectives and <i>most</i> is used with longer adjectives.`
                    }
                ]
            }
        }
    };
</script>
<style></style>
