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
                        title: 'Subject/Verb Agreement',
                        content: `Subject/verb agreement is simple: if the subject of a sentence is singular, then the verb must be singular; if the subject of the sentence is plural, then the verb must be plural. An s on a verb usually indicates that a verb is singular, while an <em>s</em> on a noun usually indicates that the noun is plural. (Do not forget irregular plurals of nouns, such as women, children, and people.)`,
                        example: `
                        The boy walks to school.<br>
                        The boys walk to school.
                        `
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
                    },
                    {
                        title: 'The Form of The Verb',
                        content: `The verbs have various forms: the base form, the present tense, the present participle, the past tense, and the past participle. Each of them is used differently based on the context of the sentence. Here are few examples of verb forms:`
                    },
                    {
                        title: 'Passive Verbs',
                        content: `The difference between an active and a passive verb is that the subject in an active sentence does the action of the verb, and the subject in a passive sentence receives the action of the verb. Look at the following example:<br><br>
                        Margaret (subject) wrote the letter. (object)<br>
                        The letter (subject) was written by Margaret. (object)`
                    },
                    {
                        title: 'Nouns',
                        content: `<strong>Singular or plural noun:</strong> Singular nouns usually begin with keywords such as each, every, single, one, or a while plural nouns begin with both, two, many, several, various, etc.<br><br>
                        <strong>Countable and uncountable nouns:</strong> Countable nouns are nouns that can be counted (it comes in quantities of one, or two, or a hundred, etc) such as book. The keywords for countable nouns are many, few, fewer, etc. Uncountable nouns are nouns that cannot be counted because they come in some indeterminate quantity or mass such as water, milk, or happiness. The keywords for uncountable nouns are much, amount, little, less, etc.<br><br>
                        <strong>Irregular plurals of nouns:</strong> Many nouns have irregular plurals that can cause confusions. Irregular plurals looks like singular noun because there is no final s in the word.<br>
                        <strong>Person or thing:</strong> Sometimes nouns can refer to persons or things. Some nouns that looks similar while have different use are accountant and accounting; authority and authorization.`
                    },
                    {
                        title: 'Pronouns',
                        content: `Pronouns are words such as he, she, or it, that take the place of nouns. The pronouns used must serve the correct function in the sentence. Below are some use of pronouns:<br><br>
                        As subject or object: subject (I, you, he, she, it, we, they) or object (me, you, him, her, it, us, them)<br><br>
                        As possessive adjectives or pronouns: it shows who or what "owns" a noun. Possessive adjectives: my, your, his, her, its, our, their must be accompanied by a noun. Possessive pronouns: mine, yours, his, hers, ours, theirs cannot be accompanied by a noun.<br><br>`
                    },
                    {
                        title: 'Adjectives and Adverbs',
                        content: `Adverbs are often formed by adding -ly to adjectives as for example: recent, recently, public, publicly, evident, evidently, etc. However there are many adverbs that do not end in -ly. These adverbs can be recognized from their meanings. They can describe when something happens (often, soon), how something happen (fast, hard), or where something happens (here, there).<br><br>
                        Sometimes adjectives are used in place of adverbs or the way around while they have very different uses. Adjectives describe nouns or pronouns while adverbs describe verbs, adjectives, or other adverbs.`
                    },
                    {
                        title: 'Articles',
                        content: `An article is a word that is used with a noun to specify grammatical definiteness of the noun, and in some languages extending to volume or numerical scope. There are two types of article: definite (specific) and indefinite (general) each to be used with countable sigular nouns, countable plural nouns, and uncountable nouns.  A singular noun must have an article (a, an, the) or some determiner (my, each) while a plural noun or an uncountable noun may or may not have an article.`
                    },
                    {
                        title: 'Prepositions',
                        content: `Prepositions can be used in two ways: in a literal way and in an idiomatic way. In literal way, the preposition means exactly what you expect. In idiomatic way, the meaning has nothing to do with the literal meaning. Examples:<br><br>
                        (Literal) The boy ran <i>up</i> the hill.<br>
                        (Idiomatic) I call <i>up</i> my friend.`
                    },
                ]
            }
        }
    };
</script>
<style></style>
