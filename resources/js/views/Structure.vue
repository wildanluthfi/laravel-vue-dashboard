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
                        title: 'Subject and Verb | Sentences with One Clause',
                        content: `The most common types of problems that you will encounter in structure questions on the TOEFL test have to do with subjects and verbs: perhaps the sentence is missing either the subject or the verb or both, or perhaps the sentence has an extra subject or verb.`
                    },
                    {
                        title: 'Objects of Prepositions | Sentences with One Clause',
                        content: `An object of a preposition is a noun, pronoun, gerund or noun clause that comes after a preposition, such as in, at, of, to, by, behind, on, and so on, to form a prepositional phrase.<br><br>
                        (After his exams) Tom will take a trip (by boat).<br><br>
                        This sentence contains two objects of prepositions. Exams is the object of the preposition after; and boat is the object of the preposition by. An object of a preposition can cause confusion in structure questions on the TOEFL test because it can be mistaken for the subject of a sentence.`
                    },
                    {
                        title: 'Appositives',
                        content: `Appositives can cause confusion in structure questions on the TOEFL test because an appositive can be mistaken for the subject of a sentence. An appositive is a noun that comes before or after another noun and has the same meaning.`
                    },
                    {
                        title: 'Present Participles',
                        content: `A present participle is the -ing form of the verb (talking; playing). In structure questions on the TOEFL test, a present participle can cause confusion because it can be either a part of the verb or an adjective. It is part of the verb when it is preceded by some form of the verb be.`
                    },
                    {
                        title: 'Past Participles',
                        content: `Past participles can cause confusion in structure questions on the TOEFL test because a past participle can be either an adjective or a part of a verb. The past participle is the form of the verb that appears with have or be. It often ends in eat, but there are also many irregular past participles in English.`
                    }
                ]
            }
        }
    };
</script>
<style></style>
