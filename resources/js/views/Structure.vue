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
                                <div class="col-12 mb-2 pb-0 mt-2 text-center card-header">
                                    <h3>Example</h3>
                                </div>
                                <div class="col-12 example" v-html="item.example">
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
                        title: 'Subject and Verb',
                        content: `The most common types of problems that you will encounter in structure questions on the TOEFL test have to do with subjects and verbs: perhaps the sentence is missing either the subject or the verb or both, or perhaps the sentence has an extra subject or verb.`,
                        example: `
                        The boy _____ going to the movies with a friend.
                        <ol type="A">
                            <li>he is</li>
                            <li>he always was</li>
                            <li>is relaxing</li>
                            <li>will be</li>
                        </ol>
                        `
                    },
                    {
                        title: 'Objects of Prepositions',
                        content: `An object of a preposition is a noun, pronoun, gerund or noun clause that comes after a preposition, such as <em>in</em>, <em>at</em>, <em>of</em>, <em>to</em>, <em>by</em>, <em>behind</em>, <em>on</em>, and so on, to form a prepositional phrase.
                        `,
                        example: `
                        <center><u>After his <em>exams</em></u> Tom will take a trip <u>by <em>boat</em></u>.</center>
                        <br>
                        This sentence contains two objects of prepositions. <em>Exams</em> is the object of the preposition <em>after</em>; and <em>boat</em> is the object of the preposition <em>by</em>. An object of a preposition can cause confusion in structure questions on the TOEFL test because it can be mistaken for the subject of a sentence.
                        `
                    },
                    {
                        title: 'Appositives',
                        content: `Appositives can be mistaken for the subject of a sentence. An appositive is a noun that comes before or after another noun and has the same meaning.`,
                        example: `
                        <center><em>Sally</em>, the best <em>student</em> in the class, got an A on the exam</center>
                        <br>
                        <em>Sally</em> is the subject of the sentence and <em>the best student in the class</em> is an appositive phrase.
                        `
                    },
                    {
                        title: 'Present Participles',
                        content: `A present participle is the -ing form of the verb e.g. <em>talking</em>, <em>playing</em>. In structure questions on the TOEFL test, a present participle can cause confusion because it can be either a part of the verb or an adjective. It is part of the verb when it is preceded by some form of the verb be.`,
                        example: `
                        <center>The man <u><em>is talking</em></u> to his friend.</center>
                        <br>
                        In this sentence <em>talking</em> is part of the verb because it is accompanied by <em>is</em>.
                        <br><br>
                        <center>The man <u><em>talking</em></u> to his friend has a beard.</center>
                        <br>
                        In this sentence <em>talking</em> is an adjective and not part of the verb because it is not accompanied by some form of <em>be</em>. The verb in this sentence is <em>has</em>.
                        `
                    },
                    {
                        title: 'Past Participles',
                        content: `Past participles can cause confusion in structure questions on the TOEFL test because a past participle can be either an adjective or a part of a verb. The past participle is the form of the verb that appears with <em>have</em> or <em>be</em>. It often ends in <em>-ed</em>, but there are also many irregular past participles in English.`,
                        example: `
                        <center>The family <u><em>has purchased</em></u> a television.</center>
                        <br>
                        <em>Purchased</em> is part of the verb because it is accompanied by <em>has</em>.
                        <br><br>
                        <center>The television <u><em>purchased</em></u> yesterday was expensive.</center>
                        <br>
                        A past participle is an adjective when it is not accompanied by some form of <em>be</em> or <em>have</em>.
                        `
                    },
                    {
                        title: 'Coordinate Connectors',
                        content: `When you have two clauses in an English sentence, you must connect the two clauses correctly. One way to connect two clauses is to use <em>and</em>, <em>but</em>, <em>or</em>, <em>so</em>, or <em>yet</em> between the clauses.`,
                        example: `
                        <center>Tom is singing, <em>and</em> Paul is dancing.</center>
                        <br>
                        <center>Tom is tall, <em>but</em> Paul is short.</center>
                        <br>
                        <center>Tom must write the letter, <em>or</em> Paul will do it.</center>
                        `
                    },
                    {
                        title: 'Adverb connectors',
                        content: `Adverb clauses can express the ideas of time, cause, contrast, condition, manner, and place. These clauses can form another clause using adverb connector. Sentences with adverb clauses have two basic patterns in English.
                        <br><br>
                        Study the clauses and connectors in the following sentences:
                        <br><br>
                        <center>I will sign the check before you leave.</center>
                        <center>Before you leave, I will sign the check.</center>`,
                        example: `
                        <ul>
                            <li><strong>Time connectors:</strong> after, as, as long as, as soon as, before, by the time, once, since, until, when, whenever, while.</li>
                            <li><strong>Cause connectors:</strong> as, because, inasmuch as, now that, since.</li>
                            <li><strong>Condition connectors:</strong> if, in case, provided, providing, unless, whether.</li>
                            <li><strong>Contrast connectors:</strong> although, even though, though, while, whereas.</li>
                            <li><strong>Manner connectors:</strong> as, in that.</li>
                            <li><strong>Place connectors:</strong> where, wherever.</li>
                        </ul>
                        `
                    },
                    {
                        title: 'Noun clause connectors',
                        content: `A noun clause is a clause that functions as a noun. Because the noun clause is a noun, it is used in a sentence as either an <u>object of a verb</u>, an <u>object of a preposition</u>, or the <u>subject of the sentence</u>.
                        <ul>
                            <li>what, when, where, why, how</li>
                            <li>whatever, whenever</li>
                            <li>whether, if</li>
                            <li>that</li>
                        <ul>
                        `,
                        example: `
                        Noun clause as object of verb:
                        <br><br>
                        <center>I know when he will arrive.</center>
                        <br>
                        Noun clause as object of preposition:
                        <br><br>
                        <center>I am concerned about when he will arrive.</center>
                        <br>
                        Noun clause as subject:
                        <br><br>
                        <center>When he will arrive is not important.</center>
                        `
                    },
                    {
                        title: 'Noun clause connectors/subjects',
                        content: `In some cases a noun clause connector is not just a connector, a noun clause connector can also be the subject of the clause at the same time.`,
                        example: `
                        <center>I do not know what is in the bos.</center>
                        <br>
                        clause connector: what.
                        <br>
                        There are two clauses: <em>I do not know</em> and <em>what is in the box</em>.
                        <br>
                        The clause connector used for noun clause connector and object of the verb at the same time.
                        `
                    },
                    {
                        title: 'Adjective clause connectors',
                        content: `An adjective clause is a clause that describes a noun. Because the clause is an adjective, it is positioned directly after the noun that it describes.
                        <br>
                        adjective clause connectors: whom (for people), which (for things), that (for people or things)
                        `,
                        example: `
                        <center>The woman is filling the <em>glass</em> <u>that she put on the table</u>.</center>
                        `
                    },
                    {
                        title: 'Adjective clause connectors/subjects',
                        content: `In some cases an adjective clause connector is not just a connector; an adjective clause connector can also be the subject of the clause at the same time.`,
                        example: `
                        <center>The woman is filling the <em>glass</em> <u>that <em><strong>is</strong></em> on the table</u>.</center>
                        `
                    },
                    {
                        title: 'Reduced adjective clauses',
                        content: `
                        Clause can appear in a complete form or in a reduced form. The reduced form still have the same meaning as the complete form.
                        <br><br>
                        complete form: Although it was not really difficult, the exam took a lot of time.
                        <br>
                        reduced form: Although not really difficult, the exam took a lot of time.
                        <br><br>
                        Adjective clauses can appear in a reduced form. In the reduced form, the adjective clause connector and the <em>be</em>-verb that directly follow it are omitted.
                        `,
                        example: `
                        <center>The woman <s>who is</s> waving to us is the tour guide.</center>
                        <center>The letter <s>which was</s> written last week arrived today.</center>
                        <center>The pitcher <s>that is</s> on the table is full of iced tea.</center>
                        `
                    },
                    {
                        title: 'Reduced adverb clauses',
                        content: `Adverb clauses can also appear in a reduced form. In the reduced form, the adverb connector remains, but the subject and <em>be</em>-verb are omitted.`,
                        example: `
                        <center>Although <s>he is</s> rather unwell, the speaker will take part in the seminar.</center>
                        <center>When <s>you are</s> ready, you can begin your speech.</center>
                        `
                    },
                    {
                        title: 'Question Words',
                        content: `There is some confusion about when to invert the subject and verb after question words such as what, when, where, why, and how. These words can have two very different functions in a sentence. First, they can introduce a question, and in this case the subject and verb that follow are inverted.<br><br>
                        <center><em>What</em> is the homework?</center>
                        <br><br>
                        Also, these words can join together two clauses, and in this case the subject and verb that follow are not inverted.<br><br>
                        <center>I do not know <em>what</em> the homework is.</center>
                        <br><br>
                        After ideas expressing place, the subject and the verb sometimes invert in English. This can happen with single words expressing place, such as here, there, or nowhere.`,
                        example: `
                        
                        
                        `
                    },
                    {
                        title: 'Place Expressions',
                        content: `After ideas expressing place, the subject and the verb sometimes invert in English. This can happen with single words expressing place, such as here, there, or nowhere.
                        `,
                        example: `Here <em>is</em> the <em>book</em> that you lent me.<br>
                        There <em>are</em> the <em>keys</em> that I thought I lost.<br>
                        Nowhere <em>have I seen</em> such beautiful weather.`
                    },
                    {
                        title: 'Negatives',
                        content: `The subject and verb can also be inverted after certain negatives and related expressions. When negative expressions, such as no, not, or never; come at the beginning of a sentence, the subject and verb are inverted.`,
                        example: `
                        Not once did I miss a question.<br>
                        Never has Mr. Jones taken a vacation.<br>
                        At no time can the woman talk on the telephone.
                        `
                    },
                    {
                        title: 'Conditionals',
                        content: `In certain conditional structures, the subject and verb may also be inverted. This can occur when the helping verb in the conditional clause is had, should, or were, and the conditional connector if is omitted.`,
                        example: `
                        If he had taken more time, the results would have been better.<br>
                        Had he taken more time, the results would have been better.
                        `
                    },
                    {
                        title: 'Comparisons',
                        content: `An inverted subject and verb may also occur after a comparison. The inversion of a subject and verb after a comparison is optional, rather than required, and it is a rather formal structure.`,
                        example: `
                        My sister spends more hours in the office than john.<br>
                        My sister spends more hours in the office than john does.<br>
                        My sister spends more hours in the office than does john.
                        `
                    },
                ]
            }
        }
    };
</script>
<style></style>
