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
                        <div class="card-body" style="line-height: 2;">
                            <div class="row">
                                <div class="col-12 content" v-html="item.content">
                                    {{item.content}}
                                </div>
                                <div v-if="item.example" class="col-12 mb-2 pb-0 mt-2 text-center card-header">
                                    <h3>Example</h3>
                                </div>
                                <div v-if="item.example" class="col-12 example" v-html="item.example">
                                    {{item.example}}
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
                        title: 'Questions About The Ideas of The Passage',
                        content: `The most common type of question asks about the main idea, topic, title, or subject. There may also be questions about how the information in the passage is organized or about which type of information is included in a particular paragraph.<br><br>

                        TOEFL passages are generally written in a traditionally organized manner, it is relatively easy to find the main ideas by studying the topic sentences, which are most probably found at the beginning of each paragraph.<br><br>

                        On the test, you may be asked to determine how the ideas in one paragraph relate to the ideas in another paragraph. This question is about how the information is organized in the passage. To answer this question, look at the main ideas of each of the paragraphs and draw conclusion based on how they are related one another.`
                    },
                    {
                        title: 'Directly Answered Questions',
                        content: `Some questions will require answers that are directly stated in the passage. This means that you should be able to find the answer to this type of question without having to draw a conclusion. The most commonly asked question types are stated detail questions, unstated detail questions, and pronoun reference questions.<br><br>

                        Stated detail question asks about one piece of information in the passage rather than the passage as a whole. The correct answer is often a restatement of what is given in the passage, expressing the same idea as what is written in the passage, but the words are not exactly the same. To answer this question, you need to identify the key word in the question, skim the passage for the key word or idea, read the sentence that contain the key word or idea, and then eliminate wrong answers and choose the best answer from remaining choices.<br><br>

                        The unstated detail question is the opposite of stated detail questions. The correct answer is often not stated or not mentioned or not true in the passage. It means that three of the answers are stated, mentioned, or true in the passage, while one answer is not.<br><br>

                        Sometimes you will be asked to determine to which noun a pronoun refers. You need to understand that a noun is generally used  first in a passage, and the pronoun that refers to it comes after. You should look at the sentences before the pronoun to find the noun.`
                    },
                    {
                        title: 'Indirectly Answered Questions',
                        content: `Some questions will require answers that are not directly stated in the passage. To answer these questions correctly, you will have to draw conclusions from information that is given in the passage.<br><br>

                        Implied detail questions will let you know that the answer to the question is not directly stated. Some information of the correct answer will be given in the passage and you will need to draw a conclusion from that information. You'll need to identify the key word and look for an answer that could be true according to the sentence containing the key word.<br><br>

                        Transition questions ask you to understand that good writing contains transitions from one paragraph to the next. A paragraph may start out with the idea of the previous paragraph as a way of linking the ideas in the two paragraphs. It may also end with an idea that will be further developed in the following paragraph.`
                    },
                    {
                        title: 'Vocabulary Questions',
                        content: `When answering vocabulary questions, it is helpful if you know the meaning of the word that being tested. However, it is not always necessary for you to know the meaning of the word. You can find definitions from structural clues, determine meanings from word parts, and use context clues to determine meanings.`
                    },
                    {
                        title: 'Overall Review Questions',
                        content: `The most common type of overall review questions are questions that ask where in the passage something is found, questions about the tone of the passage, questions about the author's purpose in writing the passage, questions about which course the passage might be a part of, or questions about where a particular piece of information might be inserted into the passage.<br><br>

                        The "where in the passage" require you to look for the word asked or something with similar meaning and then answer the question asked.<br><br>

                        A question about the tone of the passage might have indication of emotion on the part of the author. You must be able to recognize the emotion of the author to answer a question about tone correctly. The question about purpose is asking what the author trying to do in the passage. You can draw a conclusion about the author's purpose by referring to the main idea and the organization of the details in the passage.<br><br>`
                    },

                ]
            }
        }
    };
</script>
<style></style>
