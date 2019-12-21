<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card -->
            <div class="row mb-5">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">Structure Assignment</h3>
                        </div>
                        <div class="card-body" style="">
                            <div class="row" v-for="(question, index) in questions" v-bind:key="index">
                                <!-- Questions -->
                                <div class="col-12 question mb-3">
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
                        question: "The president of the United States appoints the cabinet members, _____ appointments are subject to Senate approval.",
                        answers: {
                        a: "their",
                        b: "with their",
                        c: "because their",
                        d: "but their"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "When _____ nests during Spring nesting season, Canadian geese are f‌iercely territorial.",
                        answers: {
                        a: "building",
                        b: "are building",
                        c: "built",
                        d: "are built"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: "Dolphins form extremely complicated allegiances and _____ continually change.",
                        answers: {
                        a: "enmities that",
                        b: "that are enmities",
                        c: "enmities that are",
                        d: "that enmities"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: "Still a novelty in the late nineteenth century, _____ limited to the rich.",
                        answers: {
                        a: "was",
                        b: "was photography",
                        c: "it was photography",
                        d: "photography was"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "The National Restaurant _____ Washington, says that federal efforts to regulate workplace smoking would limit restaurants' ability to respond to the desires of their patrons.",
                        answers: {
                        a: "Association in",
                        b: "Association is in",
                        c: "Association which is in",
                        d: "Association, based in"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "Rarely _____ located near city lights or at lower elevations.",
                        answers: {
                        a: "observatories are",
                        b: "are",
                        c: "in the observatories",
                        d: "are observatories"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "The North Platte River _____ from Wyoming into Nebraska.",
                        answers: {
                        a: "it f‌lowed",
                        b: "f‌lows",
                        c: "f‌lowing",
                        d: "with f‌lowing water"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "Scientists are now beginning to conduct experiments on _____ trigger different sorts of health risks.",
                        answers: {
                        a: "noise pollution can",
                        b: "that noise pollution",
                        c: "how noise pollution",
                        d: "how noise pollution can"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "The prisoners were prevented from speaking to reporters because _____.",
                        answers: {
                        a: "not wanting the story in the papers",
                        b: "the story in the papers the superintendent did not want",
                        c: "the public to hear the story",
                        d: "the superintendent did not want the story in the papers"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "Nowhere _____ more skewed than in the auto industry.",
                        answers: {
                        a: "that retail trade f‌igures",
                        b: "retail trade f‌igures are",
                        c: "are retail trade f‌igures",
                        d: "retail trade f‌igures"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: "_____ was backed up for miles on the freeway.",
                        answers: {
                        a: "Yesterday",
                        b: "In the morning",
                        c: "Traffic",
                        d: "Cars"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: "Potassium has a valence of positive one because it usually loses one electron when _____ with other elements.",
                        answers: {
                        a: "does it combine",
                        b: "it combines",
                        c: "in combining",
                        d: "combination"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "Kokanee salmon begin to deteriorate and die soon _____ at the age of four.",
                        answers: {
                        a: "they spawn",
                        b: "after spawning",
                        c: "spawn",
                        d: "spawned the salmon"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "_____ tea plant are small and white.",
                        answers: {
                        a: "The",
                        b: "On the",
                        c: "Having f‌lowers the",
                        d: "The f‌lowers of the"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "The Apollo 11 astronauts _____ of the Earth's inhabitants witnessed on the famous first moonwalk on July 20, 1969, were Neil Armstrong and Buzz Aldrin.",
                        answers: {
                        a: "whom",
                        b: "whom millions",
                        c: "were some",
                        d: "whom some were"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "New York City's Central Park is nearly twice as large _____ second smallest country, Monaco.",
                        answers: {
                        a: "as",
                        b: "the",
                        c: "as is",
                        d: "as is the"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "_____ behind government secrecy for nearly half a century, the Hanford plant in central Washington produced plutonium for the nuclear weapons of the Cold War.",
                        answers: {
                        a: "It is hidden",
                        b: "Hidden",
                        c: "Which is hidden",
                        d: "The plant is hiding"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "The major cause _____ the pull of the Moon on the Earth.",
                        answers: {
                        a: "the ocean tides are",
                        b: "of ocean tides is",
                        c: "of the tides in the ocean",
                        d: "the oceans' tides"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "The economic background of labor legislation will not be mentioned in this course, _____ be treated.",
                        answers: {
                        a: "trade unionism will not",
                        b: "nor trade unionism will",
                        c: "nor will trade unionism",
                        d: "neither trade unionism will"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: "_____ sucked groundwater from below, some parts of the city have begun to sink as much as ten inches annually.",
                        answers: {
                        a: "Pumps have",
                        b: "As pumps have",
                        c: "So pumps have",
                        d: "With pumps"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "At the end of the nineteenth century, Alfred Binet developed a test for measuring intelligence _____ served as the basis of modern IQ tests.",
                        answers: {
                        a: "has",
                        b: "it has",
                        c: "and",
                        d: "which has"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "_____ in North American waterways a little over a decade ago, zebra mussels have already earned a nasty reputation for their expensive habit of clogging water pipes in the Great Lakes area.",
                        answers: {
                        a: "The f‌irst sighting",
                        b: "Although f‌irst sighted",
                        c: "Zebra mussels were f‌irst sighted",
                        d: "First sighting"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: `_____ Biloxi received its name from a Sioux word meaning "f‌irst people."`,
                        answers: {
                        a: "The city of",
                        b: "Located in",
                        c: "It is in",
                        d: "The tour included"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: "There are geographic, economic, and cultural reasons why _____ around the world.",
                        answers: {
                        a: "diets differ",
                        b: "do diets differ",
                        c: "are diets different",
                        d: "to differ a diet"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: "Case studies are the target of much skepticism in the scientif‌ic community, _____ used extensively by numerous researchers.",
                        answers: {
                        a: "they are",
                        b: "are",
                        c: "yet are",
                        d: "yet they are"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "_____ test positive for antibiotics when tanker trucks arrive at a milk processing plant, according to federal law, the entire truckload must be discarded.",
                        answers: {
                        a: "Should milk",
                        b: "If milk",
                        c: "If milk is",
                        d: "Milk should"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: "The boy _____ going to the movies with a friend",
                        answers: {
                        a: "he is",
                        b: "he always was",
                        c: "is relaxing",
                        d: "will be"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "Small companies may take their goods abroad for trade shows without paying foreign value-added taxes by acquiring _____ an ATA carnet.",
                        answers: {
                        a: "a document calls",
                        b: "a document called",
                        c: "calls a document",
                        d: "called a document"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "A cloud's reservoir of negative charge extends upward from the altitude at _____ the freezing point.",
                        answers: {
                        a: "temperatures hit",
                        b: "hit temperatures",
                        c: "which temperatures hit",
                        d: "which hit temperatures"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: "______ show the relations among neurons, they do not preclude the possibility that other aspects are important.",
                        answers: {
                        a: "Neural theories",
                        b: "A neural theory",
                        c: "Although neural theories",
                        d: "However neural theories"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: "Until _____ incorrect, astronomers had assumed that the insides of white dwarfs were uniform.",
                        answers: {
                        a: "they",
                        b: "their proof",
                        c: "the astronomers recently proven",
                        d: "recently proven"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "Were _____ millions of dollars each year replenishing eroding beaches, the coastline would be changing even more rapidly.",
                        answers: {
                        a: "the US. Army Corps of Engineers not spending",
                        b: "the US. Army Corps of Engineers not spend",
                        c: "the US. Army Corps of Engineers does not spend",
                        d: "not spending the US. Army Corps of Engineers"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: "_____ or ref‌inanced, the lender will generally require setting up an escrow account to ensure the payment of property taxes and homeowner's insurance.",
                        answers: {
                        a: "A home is",
                        b: "A home is bought",
                        c: "When a home",
                        d: "When a home is bought"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "Any possible academic assistance from taking stimulants _____ marginal at best.",
                        answers: {
                        a: "it is",
                        b: "there is",
                        c: "is",
                        d: "as"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: "If ultraviolet radiation enters the Earth’s atmosphere, __ generally blocked by the ozone concentrated in the atmosphere.",
                        answers: {
                        a: "it",
                        b: "it is",
                        c: "so it is",
                        d: "then it"
                        },
                        correctAnswer: "b",
                    },
                    {
                        question: "In a 1988 advanced off‌icers' training program, Sampson developed a plan to incorporate police in enforcing environmental protection laws whenever _____ feasible.",
                        answers: {
                        a: "it is",
                        b: "is",
                        c: "has",
                        d: "it has"
                        },
                        correctAnswer: "a",
                    },
                    {
                        question: "Located behind _____ the two lacrimal glands.",
                        answers: {
                        a: "each eyelid",
                        b: "is each eyelid",
                        c: "each eyelid are",
                        d: "each eyelid which is"
                        },
                        correctAnswer: "c",
                    },
                    {
                        question: "_____ artifacts from the early Chinese dynasties, numerous archeologists have explored the southern Silk Road.",
                        answers: {
                        a: "They were searching for",
                        b: "It was a search for",
                        c: "Searched for",
                        d: "Searching for"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "Among human chromosomes, the Y chromosome is unusual _____ most of the chromosome does not participate in meiotic recombination.",
                        answers: {
                        a: "in",
                        b: "so",
                        c: "and",
                        d: "in that"
                        },
                        correctAnswer: "d",
                    },
                    {
                        question: "Only for a short period of time _____ run at top speed.",
                        answers: {
                        a: "Cheetahs",
                        b: "do Cheetahs",
                        c: "that a cheetah can",
                        d: "can"
                        },
                        correctAnswer: "b",
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
                        type: 'structure',
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