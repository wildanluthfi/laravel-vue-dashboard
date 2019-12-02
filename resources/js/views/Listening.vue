<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card -->
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
                        title: 'Focus on The Last Line',
                        content: `<ol>
                                        <li>The last line of the dialogue probably contains the answer to the question.</li>
                                        <li>Listen to the first line of the dialogue. If you understand it, that’s good. If you don’t understand it, don’t worry because it probably does not contain the answer.</li>
                                        <li>Be ready to focus on the last line of the dialogue because it probably contains the answer. Repeat the last line in your mind as you read through the answers in the text.</li>
                                    </ol>`
                    },
                    {
                        title: 'Choose Answers with Similar Meaning',
                        content: `<ol>
                                        <li>As you listen to the last line of the dialogue focus on key words in that line.</li>
                                        <li>If you see any synonyms for key words in a particular answer, then you have probably found the correct answer.</li>
                                    </ol>`
                    },
                    {
                        title: 'Avoid Similar Sounds',
                        content: `<ol>
                                        <li>Identify key words in the last line of the dialogue.</li>
                                        <li>Identify words in the answers that contain similar sounds, and do not choose these answers.</li>
                                    </ol>`
                    },
                    {
                        title: 'Draw Conclusions about Who, What, Where',
                        content: `It is common for you to be asked to draw one of the following conclusions in the short dialogues:
                                    <ol>
                                        <li>WHO is probably talking?</li>
                                        <li>WHAT will she/he probably do next?</li>
                                        <li>WHERE does the dialogue probably take place?</li>
                                    </ol>`
                    },
                    {
                        title: 'Passive Statements of Who and What',
                        content: `<ol>
                                        <li>If the dialogue contains a passive statement, the answer to the question is often an active statement.</li>
                                        <li>If the dialogue contains an active statement, the answer to the question is often a passive statement.</li>
                                    </ol>`
                    },
                    {
                        title: 'Who and What with Multiple Nouns',
                        content: `When there is more than one noun in a sentence in the short dialogues, it is common for the answers to confuse which noun does what.`
                    },
                    {
                        title: 'Negative Expressions',
                        content: `Negative expressions are very common in the short dialogues, and the most common kind of correct response to a negative statement is a positive statement containing a word with an opposite meaning.`
                    },
                    {
                        title: 'Double Negative Expressions',
                        content: `It is possible for two negative ideas to appear in one sentence, and the result can be quite confusing.`
                    },
                    {
                        title: 'Almost Negative Expressions',
                        content: `Certain expressions in English have "almost negative" meanings. These expressions are common in the short dialogues.`
                    },
                    {
                        title: 'Negatives with Comparatives',
                        content: `Negatives can be used with comparatives in the short dialogues of the TOEFL test. A sentence with a negative and a comparative has a superlative, or very strong, meaning.`
                    },
                    {
                        title: 'Expressions of Agreement',
                        content: `Expressions of agreement such as "So do I" or "Me, too" are common in the short dialogues, so you should become familiar with them.`
                    },
                    {
                        title: 'Expressions of Uncertainty and Suggestion',
                        content: `Expressions of uncertainty and suggestion are common in the short dialogues, so you should become familiar with them.<br><br>
                                Uncertainty: "As far as I know", "As far as I can tell".<br>
                                Suggestion: "Why not … ?", "Let's …"`
                    },
                    {
                        title: 'Emphatic Expressions of Surprise',
                        content: `Emphatic expressions of surprise are common in the short dialogues, so you should become familiar with them. When surprise is expressed, it implies that the speaker did not expect something to be true.`
                    },
                    {
                        title: 'Wishes',
                        content: `Conversations about wishes can appear in the short dialogues. The important idea to remember about wishes is that a wish implies that the opposite of the wish is true.`
                    },
                    {
                        title: 'Untrue Conditions',
                        content: `Conversations containing conditions can appear in the short dialogues. The important idea to remember about conditions is that a condition implies that the opposite of the condition is true.`
                    },
                    {
                        title: 'Two and Three Part Verbs',
                        content: `Two and three-part verbs appear in some questions in the short dialogues. These verbs are expressions that include a verb and one or more particles (such as in, on, or at); the particle changes the meaning of the verb. Questions involving two- and three-part verbs can be difficult for students because the addition of the particle changes the meaning of the verb in an idiomatic way.`
                    },
                    {
                        title: 'Idioms',
                        content: `Idioms appear in some questions in the short dialogues. Idioms are special expressions in a language that all speakers of the language know; these special expressions describe one situation in life but are applied to many different areas of life. Idiom questions can be difficult because they seem to be describing one situation when they are really describing a different situation.`
                    },
                ]
            }
        }
    };
</script>
<style></style>
