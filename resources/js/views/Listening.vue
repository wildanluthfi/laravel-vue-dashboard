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
                                <!-- <base-button type="primary">
                                    Example
                                </base-button> -->
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
        data: () => { 
            return {
                items: [
                    {
                        title: 'Focus on The Last Line',
                        content: `
                        <ol>
                            <li>The last line of the dialogue probably contains the answer to the question.</li>
                            <li>Listen to the first line of the dialogue. If you understand it, that’s good. If you don’t understand it, don’t worry because it probably does not contain the answer.</li>
                            <li>Be ready to focus on the last line of the dialogue because it probably contains the answer. Repeat the last line in your mind as you read through the answers in the text.</li>
                        </ol>`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">Billy really made a big mistake this time.</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Yes, <u>he forgot to turn in his research paper.</u></div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about Billy?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>It was the first time he made a mistake.</li>
                            <li>He forgot to write his papers.</li>
                            <li>He turned in the paper in the wrong place.</li>
                            <li>He <u>didn't remember to submit his assignment.</u></li>
                        </ol>`,
                    },
                    {
                        title: 'Choose Answers with Similar Meaning',
                        content: `
                        <ol>
                            <li>As you listen to the last line of the dialogue focus on key words in that line.</li>
                            <li>If you see any synonyms for key words in a particular answer, then you have probably found the correct answer.</li>
                        </ol>`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Why is Barbara feeling so happy?</div>
                            <div class="col-3">(man)</div>
                            <div class="col-9">She just <u>started working</u> in a real estate agency.</u></div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the man say about Barbara?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>She always liked her work in real estate.</li>
                            <li>She <u>began a new job</u>.</li>
                            <li>She just bought some real estate.</li>
                            <li>She bought a real estate agency.</li>
                        </ol>`
                    },
                    {
                        title: 'Avoid Similar Sounds',
                        content: `<ol>
                                        <li>Identify key words in the last line of the dialogue.</li>
                                        <li>Identify words in the answers that contain similar sounds, and do not choose these answers.</li>
                                    </ol>`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">Why couldn't Mark come with us?</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">He was <u>searching</u> for a new <u>apartment</u>.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about Mark?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>He was in the <u>department</u> office.</li>
                            <li>He was looking for a place to live.</li>
                            <li>He was working on his <u>research</u> project.</li>
                            <li>He had an <u>appointment</u> at <u>church</u>.</li>
                        </ol>`
                    },
                    {
                        title: 'Draw Conclusions about Who, What, Where',
                        content: `It is common for you to be asked to draw one of the following conclusions in the short dialogues:
                                    <ol>
                                        <li>WHO is probably talking?</li>
                                        <li>WHAT will she/he probably do next?</li>
                                        <li>WHERE does the dialogue probably take place?</li>
                                    </ol>`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Can you tell me what assignments I missed when I was absent from <u>your class</u>?</div>
                            <div class="col-3">(man)</div>
                            <div class="col-9">You missed one <u>homework</u> assignment and a <u>quiz</u>.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">Who is the man?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>A newspaper editor</li>
                            <li>A police officer</li>
                            <li>A <u>teacher</u></li>
                            <li>A student</li>
                        </ol>`
                    },
                    {
                        title: 'Passive Statements of Who and What',
                        content: `<ol>
                                        <li>If the dialogue contains a passive statement, the answer to the question is often an active statement.</li>
                                        <li>If the dialogue contains an active statement, the answer to the question is often a passive statement.</li>
                                    </ol>`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">Did Sally go to the bank this morning?</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Yes, she did. <u>She got a new checking account</u>.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman imply?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>Sally wrote several checks.</li>
                            <li>Sally wanted to check up on the bank.</li>
                            <li><u>A new checking account was opened.</u></li>
                            <li>Sally checked on the balance in her account.</li>
                        </ol>`
                    },
                    {
                        title: 'Who and What with Multiple Nouns',
                        content: `When there is more than one noun in a sentence in the short dialogues, it is common for the answers to confuse which noun does what.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">Do you know who is in the band now?</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">I heard that <u>Mara replaced Robert</u> in the band.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about the band?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>Robert became a new member of the band.</li>
                            <li>Robert took Mara's place in the band.</li>
                            <li>Mara didn't have a place in the band.</li>
                            <li><u>Mara took Robert's place</u> in the band.</li>
                        </ol>`
                    },
                    {
                        title: 'Negative Expressions',
                        content: `Negative expressions are very common in the short dialogues, and the most common kind of correct response to a negative statement is a positive statement containing a word with an opposite meaning.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">How did they get to their grandmother's house in Milan in only five hours?</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">They <u>didn't drive slowly</u> on the trip to Milan.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about the trip?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>They drove rather <u>quickly</u>.</li>
                            <li>They couldn't have driven more slowly.</li>
                            <li>They wanted to travel slowly to Milan.</li>
                            <li>They didn't drive to Milan.</li>
                        </ol>`
                    },
                    {
                        title: 'Double Negative Expressions',
                        content: `It is possible for two negative ideas to appear in one sentence, and the result can be quite confusing.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">I can't believe the news that I heard about the parade.</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Well, it <u>isn't impossible</u> for the parade to take place.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about the parade?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>There's no possibility that the parade will take place.</li>
                            <li>The parade will definitely not take place.</li>
                            <li>The parade <u>might</u> take place.</li>
                            <li>The parade can't take place.</li>
                        </ol>`
                    },
                    {
                        title: 'Almost Negative Expressions',
                        content: `Certain expressions in English have "almost negative" meanings. These expressions are common in the short dialogues.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Were you able to pay the electric bill?</div>
                            <div class="col-3">(man)</div>
                            <div class="col-9">I had <u>barely enough</u> money.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the man imply?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>He had plenty of money for the bill.</li>
                            <li>He did not have enough money for the bill.</li>
                            <li>He <u>paid</u> the bill but <u>has no money left</u>.</li>
                            <li>He was unable to pay the bill.</li>
                        </ol>`
                    },
                    {
                        title: 'Negatives with Comparatives',
                        content: `Negatives can be used with comparatives in the short dialogues of the TOEFL test. A sentence with a negative and a comparative has a superlative, or very strong, meaning.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(woman)</div>
                            <div class="col-9">What do you think of the new student in math class?</div>
                            <div class="col-3">(man)</div>
                            <div class="col-9"><u>No one is more intelligent</u> than she is.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the man say about the new student?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>She is not very smart.</li>
                            <li>He is smarter than she is.</li>
                            <li>Other students are smarter than she is.</li>
                            <li>She is <u>the smartest</u> student in the class.</li>
                        </ol>`
                    },
                    {
                        title: 'Expressions of Agreement',
                        content: `Expressions of agreement such as "So do I" or "Me, too" are common in the short dialogues, so you should become familiar with them.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">I think that the hypothesis is indefensible.</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9"><u>So do I</u>.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman mean?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>She is unsure about the hypothesis.</li>
                            <li>The hippopotamus is behind the fence.</li>
                            <li>She thinks that the hypothesis can be defended.</li>
                            <li>She <u>agrees</u> with the man.</li>
                        </ol>`
                    },
                    {
                        title: 'Expressions of Uncertainty and Suggestion',
                        content: `Expressions of uncertainty and suggestion are common in the short dialogues, so you should become familiar with them.<br><br>
                                Uncertainty: "As far as I know", "As far as I can tell".<br>
                                Suggestion: "Why not … ?", "Let's …"`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">Do you know anything about the final exam in physics?</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">It's going to be rather difficult, <u>isn't it</u>?</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman mean?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>The exam is not going to be too difficult.</li>
                            <li>She's positive that it's going to be hard.</li>
                            <li>She <u>thinks</u> that it <u>might</u> be hard.</li>
                            <li>She has no idea about the exam.</li>
                        </ol>`
                    },
                    {
                        title: 'Emphatic Expressions of Surprise',
                        content: `Emphatic expressions of surprise are common in the short dialogues, so you should become familiar with them. When surprise is expressed, it implies that the speaker did not expect something to be true.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Did you see Paul driving around in his Mustang?</div>
                            <div class="col-3">(man)</div>
                            <div class="col-9">Then <u>he DID get</u> a new car.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What had the man thought?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>Paul would definitely get a Mustang.</li>
                            <li>Paul did not know how to drive.</li>
                            <li>Paul did not like Mustangs.</li>
                            <li>Paul <u>would not get</u> a new car.</li>
                        </ol>`
                    },
                    {
                        title: 'Wishes',
                        content: `Conversations about wishes can appear in the short dialogues. The important idea to remember about wishes is that a wish implies that the opposite of the wish is true.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(woman)</div>
                            <div class="col-9">It's too bad that you have to stay here and work during the school break.</div>
                            <div class="col-3">(man)</div>
                            <div class="col-9">I really <u>wish I could go</u> with you and the others to Palm Springs.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the man mean?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>Maybe he will go with the others on the trip.</li>
                            <li>He is <u>unable to go</u> on the trip.</li>
                            <li>He's happy to be going on the trip.</li>
                            <li>He's going on the trip, but not with the others.</li>
                        </ol>`
                    },
                    {
                        title: 'Untrue Conditions',
                        content: `Conversations containing conditions can appear in the short dialogues. The important idea to remember about conditions is that a condition implies that the opposite of the condition is true.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">Do you think that you'll be able to go to the party?</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9"><u>If I had time</u>, I would go.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about the party?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>Maybe she'll go.</li>
                            <li>She has time, so she'll go.</li>
                            <li>She is going even if she doesn't have time.</li>
                            <li><u>It's impossible to go</u>.</li>
                        </ol>`
                    },
                    {
                        title: 'Two and Three Part Verbs',
                        content: `Two and three-part verbs appear in some questions in the short dialogues. These verbs are expressions that include a verb and one or more particles (such as in, on, or at); the particle changes the meaning of the verb. Questions involving two- and three-part verbs can be difficult for students because the addition of the particle changes the meaning of the verb in an idiomatic way.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">What time does the meeting start?</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">Didn't you hear that it was <u>called off</u> by the director?</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about the meeting?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>The director called a meeting.</li>
                            <li>The director phoned her about the meeting.</li>
                            <li>The director called the meeting to order.</li>
                            <li>The director <u>canceled</u> the meeting.</li>
                        </ol>`
                    },
                    {
                        title: 'Idioms',
                        content: `Idioms appear in some questions in the short dialogues. Idioms are special expressions in a language that all speakers of the language know; these special expressions describe one situation in life but are applied to many different areas of life. Idiom questions can be difficult because they seem to be describing one situation when they are really describing a different situation.`,
                        example: `
                        On the recording, you hear:
                        <div class="row">
                            <div class="col-3">(man)</div>
                            <div class="col-9">Tom is a full-time student and is holding down a full-time job.</div>
                            <div class="col-3">(woman)</div>
                            <div class="col-9">He's really <u>burning the candle at both ends</u>.</div>
                            <div class="col-3">(narrator)</div>
                            <div class="col-9">What does the woman say about Tom?</div>
                        </div>
                        <br>
                        <ol type="A">
                            <li>He's lighting a candle.</li>
                            <li>He's holding the candle at the top and the bottom.</li>
                            <li>He's <u>doing too much</u>.</li>
                            <li>He's working as a firefighter.</li>
                        </ol>`
                    },/*
                    {
                        title: 'Long Conversations | Before Listening: Anticipate the Topic and the Questions',
                        content: `It is very helpful to your overall comprehension if you know what topics to expect in the long conversations. You should therefore try to anticipate the topics you will be hearing. For example, are the conversations about some aspect of school life, or some type of social issue, or a trip someone is planning? A helpful strategy is therefore to look briefly at the answers in the test book, before you actually hear the conversations on the recording, and try to determine the topics of the conversations that you will hear.<br><br>

                        It is also very helpful to your ability to answer individual questions with the long conversations if you can anticipate what the questions will be and listen specifically for the answers to those questions.`
                    },
                    {
                        title: 'Long Conversations | While Listening: Determine the Topic, Draw Conclusions, Answer in Order',
                        content: `As you listen to each long conversation, you should be thinking about the topic (subject) or main idea for each conversation. Since the first one or two sentences generally give the topic, you should be asking yourself what the topic is while you are listening carefully to the first part of the conversation.<br><br>
                        As you listen to each long conversation, you should be trying to set the situation in your mind. You should be thinking the following thoughts:<br>
                        Who is talking?<br>
                        When does the conversation probably take place?<br>
                        Where does the conversation probably take place?<br>
                        Mat is the source of information for the conversation?<br><br>
                        There are two possible methods to use while you listen to a long conversation:<br>
                        You can just listen to the conversation (and ignore the answers).<br>
                        You can follow along with the answers while you listen.<br><br>
                        Some students prefer to just listen to the conversation while it is being spoken, and if that method works well for you, then that is what you should do. Other students find that they can answer more questions correctly if they read along with the answers while the conversation is being spoken. Because the detail questions are answered in order, it is possible to read along while you listen to the conversation on the recording.`
                    },*/
                ]
            }
        }
    };
</script>
<style scoped>
    @media (max-width: 576px) {
        .example {
            font-size: 0.7rem;
        }
        .content {
            font-size: 0.9rem;
        }
    }
</style>