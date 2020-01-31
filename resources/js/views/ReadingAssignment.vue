<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card -->
            <div class="row mb-5">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">Reading Assignment</h3>
                        </div>
                        <div class="card-body" style="">
                            <div class="row" v-for="(question, index) in questions" v-bind:key="index">
                                <div class="col-12 article mb-3" v-if="question.article" v-html="question.article">
                                    {{question.article}}
                                </div>
                                <!-- Questions -->
                                <div class="col-12 question mb-3" v-html="(index+1) + '. ' + (question.question)">
                                    {{index + 1}}. {{ question.question }}
                                </div>
                                <div class="col-12 answers mb-5">
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="a">A : {{question.answers.a}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="b">B : {{question.answers.b}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="c">C : {{question.answers.c}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="d">D : {{question.answers.d}}
                                    </label>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <base-button type="primary" @click.prevent="submitAssignment">Submit</base-button>
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
                has_error: false,
                user: {},
                questions: [
                        {
                    article: `<b>Passage 1</b> <br><br>
                    The Woodstock Music and Art Fair—better known to its participants
                    and to history simply as “Woodstock”—should have been a colossal failure.
                    Just a month prior to its August 15, 1969 opening, the council of
                    Wallkill, New York, informed the fair’s organizers that it was withdrawing
                    its permission to hold the festival.<br><br>
                    Amazingly, the organizers found a new site, a large field in Woodstock,
                    New York, owned by a local dairy farmer. Word spread to the public
                    of the fair’s new location. The event drew a larger audience than the
                    organizers had expected. On the first day of the fair, crowd estimates of
                    30,000 kept rising; traffic jams blocked most roads leading to the area.
                    Some musicians could not reach the site to appear at their scheduled times.
                    In addition, fences that were supposed to facilitate ticket collection never
                    materialized, so the organizers abandoned all attempts at taking tickets.<br><br>
                    But that was not all: as the large crowd gathered, so did summer
                    storm clouds. It started raining on opening night and continued for much
                    of the three-day event. To deal with the crowd, which reached an estimated 
                    500,000 by the third day, helicopters flew in food, doctors, and
                    medical supplies.<br><br>
                    Despite all of its problems, the festival featured some of the greatest
                    musicians of the 1960s, including Janis Joplin; Joan Baez; Crosby,
                    Stills, Nash, and Young; Sly and the Family Stone; Creedence Clearwater
                    Revival; and Jimi Hendrix. Today many people think of Woodstock
                    not only as a milestone for rock music but as the defining moment
                    for an entire generation.`,
                    question: `The main idea of this passage is best expressed in which
                    sentence?`,
                    answers: {
                        a: `Most Americans think of Woodstock as a bunch of
                        kids dancing to music in the mud.`,
                        b: `Most Americans think of Woodstock as a bunch of
                        kids dancing to music in the mud.`,
                        c: `Despite poor planning, Woodstock was a success and
                        a high point for a generation of Americans.`,
                        d: `The organizers succeeded in their goal of creating a
                        historically significant event.`
                    },
                    correctAnswer: "c"
                    },
                    {
                    article: ``,
                    question: `What was the final crowd estimate?`,
                    answers: {
                        a: `20,000`,
                        b: `30,000`,
                        c: `50,000`,
                        d: `500,000`
                    },
                    correctAnswer: "d"
                    },
                    {
                    article: ``,
                    question: `Which of the following was NOT a problem faced by the
                    event’s organizers?`,
                    answers: {
                        a: `blocked access to the site`,
                        b: `attracting musical talent`,
                        c: `bad weather`,
                        d: `finding a location for the festival`
                    },
                    correctAnswer: "b"
                    },
                    {
                    article: ``,
                    question: `The phrase <i>defining moment</i> in paragraph 4 could best be
                    replaced by which word or phrase?`,
                    answers: {
                        a: `symbol`,
                        b: `belief`,
                        c: `anecdote`,
                        d: `fun time`
                    },
                    correctAnswer: "a"
                    },
                    {
                    article: ``,
                    question: `Where in the passage does the author describe the weather
                    conditions during the event?`,
                    answers: {
                        a: `at the end of paragraph 2`,
                        b: `at the beginning of paragraph 3`,
                        c: `at the end of paragraph 3`,
                        d: `at the beginning of paragraph 4`
                    },
                    correctAnswer: "b"
                    },
                    {
                    article: ``,
                    question: `The word <i>facilitate</i> in paragraph 2 is closest in meaning to`,
                    answers: {
                        a: `make easier.`,
                        b: `make more difficult.`,
                        c: `build a facility.`,
                        d: `increase.`
                    },
                    correctAnswer: "a"
                    },
                    {
                    article: ``,
                    question: `What does the author mean by the statement <i>the Woodstock
                    Music and Art Fair should have been a colossal failure?</i>`,
                    answers: {
                        a: `Woodstock should not have happened.`,
                        b: `Woodstock was a financial failure because the organizers
                        did not collect tickets.`,
                        c: `When you mix dairy farmers with young rock fans, you
                        are asking for trouble.`,
                        d: `The large crowd and other problems could easily have
                        resulted in a crisis.`
                    },
                    correctAnswer: "d"
                    },
                    {
                    article: ``,
                    question: `The passage suggests that`,
                    answers: {
                        a: `a free concert would never happen today.`,
                        b: `area residents thought the rock fans were weird.`,
                        c: `the impact of the event exceeded expectations.`,
                        d: `music brings people together in a way other art forms
                        cannot.`
                    },
                    correctAnswer: "c"
                    },
                    {
                    article: `<b>Passage 2</b> <br><br>
                    The largest of the world’s 17 penguin species, emperor penguins stand
                    nearly four feet and weigh up to 90 pounds. These sea birds never set
                    foot on dry land. (1) An estimated 200,000 breeding pairs live in about
                    40 penguin colonies scattered along the coasts of Antarctica. (2) Their
                    waterproofed feathers, flipper-like wings, and streamlined bodies make
                    them excellent swimmers and divers. On ice they can travel distances
                    up to 50 miles by “tobogganing”—gliding on their stomachs while
                    pushing with their wings and feet.<br><br>
                    (3) Emperor penguins breed during the Antarctic winter in some
                    of the world’s most severe weather conditions (temperatures of –80 F
                    and winds up to 112 miles per hour). Breeding during the winter
                    allows chicks to mature in midsummer when food is plentiful. After the
                    female lays a single egg, the male holds it in a fold of skin near his feet
                    for a two-month incubation period. During this time he huddles with
                    other males to keep warm. (4) The male moves very little and does not
                    eat, usually losing up to a third of his body weight. Meanwhile the females
                    go to sea and dive for fish so that when they return they can feed and
                    care for the newly hatched chicks. After the male restores his body
                    weight, both parents take turns caring for their young.<br><br>
                    The world’s emperor penguin population declined in the last 50 years
                    due to a period of warming ocean temperatures. Warm water shrinks
                    ice cover and reduces the population of krill—a small crustacean that 
                    is the emperor penguin’s staple food. Today the emperor penguin population
                    has stabilized, but warming trends could again threaten this magnificent
                    sea bird.`,
                    question: `What is the author’s main purpose in this passage?`,
                    answers: {
                        a: `to describe the recent plight of the emperor penguin`,
                        b: `to show the differences between penguin species`,
                        c: `to describe the characteristics and breeding practice of
                        the emperor penguin`,
                        d: `to describe the eating habits of the emperor penguin`
                    },
                    correctAnswer: "c"
                    },
                    {
                    article: ``,
                    question: `Which of the following is NOT true of the emperor
                    penguin?`,
                    answers: {
                        a: `They can travel 50 miles by gliding.`,
                        b: `They breed during Antarctic summer.`,
                        c: `The male incubates the egg.`,
                        d: `They can withstand severe weather.`
                    },
                    correctAnswer: "b"
                    },
                    {
                    article: ``,
                    question: `The word <i>stabilized</i> in paragraph 3 is closest in meaning to`,
                    answers: {
                        a: `held steady.`,
                        b: `increased.`,
                        c: `slowed.`,
                        d: `fluctuated.`
                    },
                    correctAnswer: "a"
                    },
                    {
                    article: ``,
                    question: `The passage suggests that`,
                    answers: {
                        a: `the female emperor penguin should take better care of
                        her young.`,
                        b: `no animal can survive in subzero temperatures.`,
                        c: `scientists have never been close enough to observe the
                        emperor penguin.`,
                        d: `changes in the global environment can threaten the
                        emperor penguin.`
                    },
                    correctAnswer: "d"
                    },
                    {
                    article: ``,
                    question: `What makes up the staple diet of the emperor penguin?`,
                    answers: {
                        a: `cuttlefish`,
                        b: `krill`,
                        c: `seaweed`,
                        d: `fried clams`
                    },
                    correctAnswer: "b"
                    },
                    {
                    article: ``,
                    question: `Where in the passage does the author describe the characteristics
                    that make emperor penguins excellent swimmers?`,
                    answers: {
                        a: `at the beginning of paragraph 1`,
                        b: `at the end of paragraph 1`,
                        c: `at the beginning of paragraph 2`,
                        d: `at the end of paragraph 2`
                    },
                    correctAnswer: "b"
                    },
                    {
                    article: ``,
                    question: `Why do male emperor penguins form a huddle?`,
                    answers: {
                        a: `to protect the eggs from sea lions`,
                        b: `to share their food supply`,
                        c: `to maintain body heat in harsh temperatures`,
                        d: `to share parenting advice`
                    },
                    correctAnswer: "c"
                    },
                    {
                    article: ``,
                    question: `The following sentence can be inserted into the passage:<br><br>
                    <i>Instead they feed and breed in the frigid waters and sea ice of
                    the southern Ocean.</i><br><br>
                    Where would this sentence best fit in the passage? Choose
                    the number to indicate where you would add the sentence
                    to the passage.`,
                    answers: {
                        a: `(1)`,
                        b: `(2)`,
                        c: `(3)`,
                        d: `(4)`
                    },
                    correctAnswer: "a"
                    },
                ],
                userAnswers: [],
                correctAnswers: [],
                userScore: 0,
            }
        },
        mounted() {
            if (localStorage.token) {
                this.token = localStorage.token;
            }
            this.getUser()
        },
        methods: {
            getUser() {
                this.$http({
                url: 'auth/user',
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
                })
                .then((res) => {
                this.user = res.data.data
                // console.log(this.user.name)
                }, () => {
                this.has_error = true
                })
            },
            submitAssignment() {
                this.userAnswers = []
                this.correctAnswers = []
                this.userScore = 0
                this.questions.forEach((question, index) => {
                    let userAnswer = (document.querySelector(`input[name=question${index}]:checked`) || '').value
                    userAnswer ? this.userAnswers.push(userAnswer) : this.userAnswers.push('x')
                    this.correctAnswers.push(question.correctAnswer)
                    if (userAnswer === question.correctAnswer) this.userScore++ 
                    // console.log(userAnswer ? userAnswer : 'x')
                })

                this.$http({
                    url: 'assignment/store',
                    method: 'POST',
                    data: {
                        user_id: this.user.id,
                        type: 'reading',
                        user_answer: this.userAnswers.toString(),
                        score: this.userScore
                    }
                })
                .then((res) => {
                    console.log(res)
                    if (res.status === 200) {
                        alert('input success')
                        this.$router.push({name: 'dashboard'})
                    }
                }, (err) => {
                    // this.has_error = true,
                    if (err.response.status === 500) alert('error: can\'t connect to database, please try again')
                    // console.log(err.response.status)
                })
                    
            }
        }
    };
</script>
<style scoped>
    @media (max-width: 576px) {
        .example {
            font-size: 0.65rem;
            line-height: 1.6;
        }
        .content {
            font-size: 0.9rem;
        }
    }
</style>