<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card -->
            <div class="row mb-5">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">Written Expressions Assignment</h3>
                        </div>
                        <div class="card-body" style="">
                            <div class="row" v-for="(question, index) in questions" v-bind:key="index">
                                <!-- Questions -->
                                <div class="col-12 question mb-3" v-html="(index+1) + '. ' +question.question">
                                    <p>{{index + 1}}. {{ index + '. ' + question.question }}</p>
                                </div>
                                <div class="col-12 answers mb-5">
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="a">{{question.answers.a}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="b">{{question.answers.b}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="c">{{question.answers.c}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="'question'+index" value="d">{{question.answers.d}}
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
                        question: `The tenants in the <span class="a">apartment</span> next to mine <span class="b">is</span> giving <span class="c">a</span> party <span class="d">this</span> evening.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: `<span class="a">Each</span> of the <span class="b">doctors</span> in the building <span class="c">need</span> to <span class="d">have</span> separate reception area.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: `She held <span class="a">jobs</span> as a <span class="b">typist</span>, a <span class="c">housekeeper</span>, and <span class="d">in a restaurant</span>.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: `<span class="a">Dining</span> in a <span class="b">restaurant</span> is <span class="c">more fun</span> than <span class="d">to eat</span> at home`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: `<span class="a">The professor</span> <span class="b">indicated</span> that Anthony's research paper <span class="c">was</span> <span class="d">more long</span> than the other students' paper.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: `The business <span class="a">department</span> is <span class="b">bigger</span> of the <span class="c">departments</span> in <span class="d">the</span> university`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: `<span class="a">The Peace Corps</span> <span class="b">was</span> <span class="c">establish</span> on March 1, 1961, by <span class="d">then</span> President John F. Kennedy.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: `Linus Pauling <span class="a">has</span> <span class="b">wins</span> <span class="c">two Nobel Prizes</span>: the 1954 Nobel Prize <span class="d">in Chemistry</span> and the 1962 Nobel Peace Prize.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: `In English these questions <span class="a">have be</span> <span class="b">formed</span> by <span class="c">changing</span> the word order of a statement, whereas in some languages the word order <span class="d">remains</span> the same.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: `<span class="a">On</span> June 30, 1992, international timekeepers in Paris <span class="b">were added</span> an extra <span class="c">second</span> to <span class="d">the day</span>.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: `The legal system has <span class="a">much</span> safeguards to protect <span class="b">the right</span> of a <span class="c">defendant</span> to an impartial <span class="d">jury</span>.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: `The first of two such <span class="a">investigation</span> <span class="b">requires</span> the students to read continuously over a <span class="c">period</span> of <span class="d">four hours</span>.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: `Superman <span class="a">made</span> <span class="b">their</span> comic <span class="c">debut</span> in 1938 <span class="d">in</span> Action Comics.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: `A baby learns the meanings of words as <span class="a">they</span> are spoken by <span class="b">others</span> and <span class="c">later</span> uses <span class="d">him</span> in sentences.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: `A <span class="a">serious problem</span> is <span class="b">how to</span> communicate <span class="c">reliable</span> with a <span class="d">submerged</span> submarine.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: `Telegraph <span class="a">service</span> <span class="b">across</span> the Atlantic was <span class="c">successful</span> <span class="d">established</span> in 1866.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: `Ford designed <span class="a">the first</span> large-scale <span class="b">assembly line</span> at <span class="c">plant</span> in <span class="d">Highland Park, Michigan</span>.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: `<span class="a">In the</span> human body, blood flows from <span class="b">a</span> heart through <span class="c">the arteries</span>, and it returns through <span class="d">the</span> veins.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: `<span class="a">According legend</span>, Betsy Ross <span class="b">designed and sewed</span> the <span class="c">first</span> American <span class="d">flag.</span>`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: `Mars's <span class="a">two small</span> moons are <span class="b">irregularly</span> <span class="c">shaped</span> and covered <span class="d">for</span> craters.`,
                        answers: {
                        a: "A",
                        b: "B",
                        c: "C",
                        d: "D"
                        },
                        correctAnswer: "d",
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
                        type: 'written expressions',
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