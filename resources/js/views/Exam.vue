<template>
    <div>
        <div class="timer text-center">
            {{Math.floor(timeLeft / 60) | timeFormat}}:{{timeLeft % 60 | timeFormat}}
        </div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card -->
            <div class="row mb-5">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">{{currentSection.charAt(0).toUpperCase() + currentSection.substr(1)}} Section</h3>
                        </div>
                        <div class="card-body" style="">
                            <div class="row" v-for="(question, index) in questions" v-bind:key="index">
                                <!-- Audio for listening section -->
                                <div class="col-12 text-center mb-2" v-if="index === 0 && currentSection === 'listening'">
                                    <audio controls src="https://class.h2omelon.id/audio/listening2.mp3">Your browser doesn't support audio</audio>
                                </div>
                                <!-- <div class="col-12 text-center mb-2" v-if="index === 30 && currentSection === 'listening'">
                                    <audio controls src="https://class.h2omelon.id/audio/partb.mp3">Your browser doesn't support audio</audio>
                                </div>
                                <div class="col-12 text-center mb-2" v-if="index === 38 && currentSection === 'listening'">
                                    <audio controls src="https://class.h2omelon.id/audio/partc.mp3">Your browser doesn't support audio</audio>
                                </div> -->

                                <!-- Articles for reading section -->
                                <div class="col-12 article mb-5" v-if="question.article">
                                    <div class="d-flex align-items-center flex-column" v-html="question.article">{{question.article}}</div>
                                </div>

                                <!-- Questions -->
                                <div class="col-12 question mb-3" v-html="(index+1) + '. ' + (question.question)">
                                    {{index + 1}}. {{ question.question }}
                                </div>
                                <div class="col-12 answers mb-5">
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="currentSection+'question'+index" value="a">A. {{question.answers.a}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="currentSection+'question'+index" value="b">B. {{question.answers.b}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="currentSection+'question'+index" value="c">C. {{question.answers.c}}
                                    </label>
                                    <label class="d-block">
                                        <input class="mr-2" type="radio" :name="currentSection+'question'+index" value="d">D. {{question.answers.d}}
                                    </label>
                                </div>
                            </div>
                            <div class="row justify-content-center" v-if="currentSection != 'reading'">
                                <base-button type="primary" @click.prevent="navigate">Next Section</base-button>
                            </div>
                            <div class="row justify-content-center" v-else="">
                                <base-button type="primary" @click.prevent="navigate">Submit</base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card Ends -->
        </base-header>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueClipboard from 'vue-clipboard2'
    import BTooltipDirective from 'bootstrap-vue/es/directives/tooltip'
    import listening from '../assets/listening'
    import structure from '../assets/structure'
    import reading from '../assets/reading'

    Vue.use(VueClipboard)
    export default {
        directives: {
        'b-tooltip': BTooltipDirective
        },
        data: () => { 
            return {
                has_error: false,
                user: {},
                currentSection: 'listening',
                questions: [],
                userAnswers: [],
                correctAnswers: [],
                listening_ans: '',
                listening_score: 0,
                structure_ans: '',
                structure_score: 0,
                reading_ans: '',
                reading_score: 0,
                timeLeft: 0,
                thereIsTimeLeft: true
            }
        },
        mounted() {
            if (localStorage.token) {
                this.token = localStorage.token;
            }
            this.getUser()
            this.setQuestions(this.currentSection)
            this.countDown(1680)
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
            setQuestions(type) {
                if(type === "reading") {
                    this.questions = reading()
                } else if (type === "listening") {
                    this.questions = listening()
                } else if (type === "structure") {
                    this.questions = structure()
                }
            },
            navigate() {
                if (this.currentSection === 'listening') {
                    this.calculateAnswer()
                    this.currentSection = 'structure'
                    this.setQuestions(this.currentSection)
                    this.removeCheckedOptions('structure')
                    document.documentElement.scrollTop = 0
                    this.timeLeft = 1500
                    this.checkCountDown()
                } else if (this.currentSection === 'structure') {
                    this.calculateAnswer()
                    this.currentSection = 'reading'
                    this.setQuestions(this.currentSection)
                    this.removeCheckedOptions('reading')
                    document.documentElement.scrollTop = 0
                    this.timeLeft = 3300
                    this.checkCountDown()
                } else {
                    this.calculateAnswer()
                    this.showAnswer()
                    this.submitAssignment() 
                }
            },
            calculateAnswer() {
                this.userAnswers = []
                this.correctAnswers = []
                this.userScore = 0
                this.questions.forEach((question, index) => {
                    let option = document.querySelector(`input[name=${this.currentSection}question${index}]:checked`)
                    let userAnswer = ( option || '').value
                    userAnswer ? this.userAnswers.push(userAnswer) : this.userAnswers.push('x')
                    this.correctAnswers.push(question.correctAnswer)
                    if (userAnswer === question.correctAnswer) this.userScore++ 
                    // console.log(userAnswer ? userAnswer : 'x')
                })
                console.log(this.userAnswers)
                console.log(this.userScore)
                switch (this.currentSection) {
                    case 'listening':
                        this.listening_ans = this.userAnswers.toString()
                        this.listening_score = this.userScore
                        break
                    case 'structure':
                        this.structure_ans = this.userAnswers.toString()
                        this.listening_score = this.userScore
                        break
                    case 'reading':
                        this.reading_ans = this.userAnswers.toString()
                        this.listening_score = this.userScore
                        break
                } 
            },
            removeCheckedOptions: function(nextSection) {
                const timeout = setTimeout(() => {
                    this.questions.forEach((question, index) => {
                        try {
                            // console.log('removing ' + nextSection + ' question number ' + index)
                            let option = document.querySelector(`input[name=${nextSection}question${index}]:checked`)
                            option.checked = false
                        } catch (err) {
                            
                        }
                    })

                }, 1000)
            },
            countDown(duration) {
                this.timeLeft = duration
                this.thereIsTimeLeft = true

                var timer = setInterval(() => {
                    this.timeLeft--
                    if (this.timeLeft <= 0) { 
                        clearInterval(timer)
                        this.thereIsTimeLeft = false
                        this.currentSection === 'reading' ? alert('time out!') : alert('time out! moving to next section')
                        this.navigate()
                    }
                }, 1000)
            },
            checkCountDown() {
                if ( !this.thereIsTimeLeft ) {
                    this.thereIsTimeLeft = true
                    this.countDown(this.timeLeft)
                }
            },
            showAnswer() {
                alert(
                    'Your Exam Answer: \n' +
                    'listening answer: ' + this.listening_ans + '\n' +
                    'listening score: ' + this.listening_score + '\n' +
                    'structure answer: ' + this.structure_ans + '\n' +
                    'structure score: ' + this.structure_score + '\n' +
                    'reading answer: ' + this.reading_ans + '\n' +
                    'reading score: ' + this.reading_score + '\n'

                )
            },
            submitAssignment() {
                this.$http({
                    url: 'exam/store',
                    method: 'POST',
                    data: {
                        user_id: this.user.id,
                        listening_ans: this.listening_ans,
                        listening_score: this.listening_score,
                        structure_ans: this.structure_ans,
                        structure_score: this.structure_score,
                        reading_ans: this.reading_ans,
                        reading_score: this.reading_score,
                    }
                })
                .then((res) => {
                    console.log(res)
                    if (res.status === 200) {
                        alert('Thank you! Your Assignment has been submitted')
                        this.$router.push({name: 'dashboard'})
                    }
                }, (err) => {
                    // this.has_error = true,
                    if (err.response.status === 500) alert('error: can\'t connect to database, please try again')
                    // console.log(err.response.status)
                })
                    
            }
        },
        filters: {
            timeFormat: function(value) {
                if (value < 10) {
                    return '0' + value
                } else {
                    return value
                }
            }
        }
    };
</script>
<style type="text/css" scoped>
    .article {
        font-size: 80%;
    }

    .timer {
        position: fixed;
        height: 50px;
        width: 100px;
        font-size: 30px;
        line-height: 50px;
        top: 0px;
        right: 0px;
        background-color: black;
        justify-content: center;
        z-index: 10;
        border-radius: 0 0 0 5px;
    }

    @media screen and (min-width: 600px) {
        .timer {
            border-radius: 0 0 0 10px;
            top: 0px;
            right: 0px;
            height: 80px;
            width: 160px;
            line-height: 80px;
            font-size: 50px;
        }
    }
</style>