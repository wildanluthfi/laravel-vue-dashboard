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
                                    Question {{index + 1}}
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
                        question: "",
                        answers: {
                        a: "The coffee is much better this morning.",
                        b: "The coffee tastes extremely good.",
                        c: "The coffee isn't very good.",
                        d: "This morning he definitely wants some coffee."
                        },
                        correctAnswer: "c"
                    },{
                        question: "",
                        answers: {
                        a: "The two classes meet in an hour and a half.",
                        b: "The class meets three hours per week.",
                        c: "Each half of the class is an hour long.",
                        d: "Two times a week the class meets for an hour."
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "A few minutes ago, the flight departed.",
                        b: "The fight will start in a while.",
                        c: "They are frightened about the departure.",
                        d: "The plane is going to take off soon."
                        },
                        correctAnswer: "d"
                    },{
                        question: "",
                        answers: {
                        a: "He hasn't yet begun his project.",
                        b: "He's supposed to do his science project next week.",
                        c: "He needs to start working on changing the due date.",
                        d: "He's been working steadily on his science project."
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "At the post office",
                        b: "In a florist shop",
                        c: "In a restaurant",
                        d: "In a hospital delivery room"
                        },
                        correctAnswer: "b"
                    },{
                        question: "",
                        answers: {
                        a: "The professor drowned the cells in a lab.",
                        b: "The lecture was long and boring.",
                        c: "The professor divided the lecture into parts.",
                        d: "The biologist tried to sell the results of the experiment."
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "She needs to get a driver's license.",
                        b: "Two pieces of identification are necessary.",
                        c: "The man should check to see if he needs credit.",
                        d: "A credit card can be used to get a driver's license."
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Housing within his budget is hard to locate.",
                        b: "It's hard to find his house in New York.",
                        c: "He can't afford to move his house to New York.",
                        d: "Housing in New York is unavailable."
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The boss was working on the reports.",
                        b: "He would have to finish the reports before the end of next month.",
                        c: "He was directed to stay late and finish some work.",
                        d: "He could finish the reports at home."
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The boisterous students made the teacher mad.",
                        b: "The teacher angered the students with the exam results.",
                        c: "The students were angry that the teacher was around.",
                        d: "The angered students complained to the teacher."
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The prices are reasonable.",
                        b: "The store is too far out of town.",
                        c: "He would like the woman to repeat what she said.",
                        d: "He agrees with the woman."
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "It's rained unusually hard this year.",
                        b: "There hasn't been any rain for many years.",
                        c: "It's been many years since it rained.",
                        d: "He doesn't like rain."
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "He needs to do a better job writing questions.",
                        b: "He certainly must make his writing better.",
                        c: "Without the questions, he cannot write the answers.",
                        d: "He needs to understand the written questions better."
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The agent was standing in line with his passport. ",
                        b: "The line to get new passports is very long.",
                        c: "The woman must wait her turn to get her passport checked. ",
                        d: "He can check her passport instead of the agent. "
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "He couldn't finish closing the library book.",
                        b: "He hadn't finished the library assignment, but he was close. ",
                        c: "He was working on the assignment when the library closed. ",
                        d: "His homework was incomplete because the library wasn't open. "
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "All the lawyer's preparation did no good.",
                        b: "The lawyer prepared nothing for the case. ",
                        c: "It wasn't work for the lawyer to prepare for the case. ",
                        d: "The lawyer didn't work to prepare for the case. "
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The history class begins next week. ",
                        b: "He thinks the papers should be turned in next week.",
                        c: "He has already done the paper for next week.",
                        d: "The papers are not due next week. "
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "He's not really happy. ",
                        b: "The contractor's work was satisfactory.",
                        c: "He would rather work with the contractor himself.",
                        d: "He was already contacted about the work. "
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The man should try another type of paper.",
                        b: "The man should locate a typist tomorrow morning.",
                        c: "The man should make a tape in the morning. ",
                        d: "The man should complete the paper without help. "
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "She'd like some pie.",
                        b: "It's easy to buy it. ",
                        c: "The task the man's working on isn't difficult. ",
                        d: "It's easier to prepare pie than do what the man is doing."
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "He reported that the time for the budget meeting had been set. ",
                        b: "He is always late in submitting his accounting figure",
                        c: "He never manages to budget his time well. ",
                        d: "He is never too late in turning in his reports. "
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The repairs that the mechanic had indicated were already made.",
                        b: "The car is going to need a lot of repairs.",
                        c: "Buying a new car would be quite expensive.",
                        d: "The mechanic extended the repair warranty."
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Betty wrote the letter as directed.",
                        b: "The directions were given to Betty in a letter.",
                        c: "Betty will follow the instructions later.",
                        d: "Betty worked exactly as instructed."
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Walter had a lack of success with his business.",
                        b: "Walter failed in business.",
                        c: "Walter's new company is doing rather well. ",
                        d: "Walter hoped to succeed in business."
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "He should put the organ in the closet. ",
                        b: "The closet has already been organized. ",
                        c: "He needs to rearrange the closet.",
                        d: "He wishes the closet were closer."
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "She didn't do the work.",
                        b: "She gave the assignment her best effort.",
                        c: "She finished the assignment even though it was difficult.",
                        d: "She gave the man a signal. "
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "She said some terrible things.",
                        b: "She didn't say anything nice.",
                        c: "She didn't have any nice things.",
                        d: "She said really wonderful things."
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "New employees are rarely initiated into the company.",
                        b: "New workers don't generally undertake actions on their own.",
                        c: "New employees are initially rated. ",
                        d: "It's rare for employees to make new suggestions. "
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "The woman is more than a week late.",
                        b: "The children would have wrecked the house later. ",
                        c: "The woman was so late that she was a wreck. ",
                        d: "He's glad that she was not any later."
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "He had not gone to the store.",
                        b: "He was still at the market.",
                        c: "He was going to take care of the shopping. ",
                        d: "He always went to the market."
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "She's a senior.",
                        b: "She's a junior. ",
                        c: "She's a transfer student. ",
                        d: "She's a graduate student. "
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "How to transfer to a junior college ",
                        b: "How to find his way around campus ",
                        c: "What courses are required for a literature major",
                        d: "Who won the campus election"
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Three",
                        b: "Five",
                        c: "Eight",
                        d: "Ten"
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "American literature",
                        b: "World literature",
                        c: "Literary analysis",
                        d: "Surveying"
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "In a book",
                        b: "From a television program",
                        c: "During a trip that she took",
                        d: "From a lecture "
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "To communicate with other dolphins",
                        b: "To recognize objects in the water",
                        c: "To learn human language",
                        d: "To express fear"
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Five",
                        b: "Fifteen",
                        c: "Fifty",
                        d: "Five hundred"
                        },
                        correctAnswer: "c"
                    }, 
                    {
                        question: "",
                        answers: {
                        a: "It is limited. ",
                        b: "It is greater than human intelligence.",
                        c: "It is less than previously thought.",
                        d: "We are beginning to learn how much they have."
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "To protect its members",
                        b: "To save the natural environment",
                        c: "To honor the memory of John Muir",
                        d: "To improve San Francisco's natural beauty"
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "For less than a year ",
                        b: "Only for a decade",
                        c: "For more than a century",
                        d: "For at least two centuries"
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "San Francisco",
                        b: "All fifty states",
                        c: "The Sierra Nevadas",
                        d: "The eastern United States"
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "All over the world",
                        b: "In the entire United States",
                        c: "Only in California",
                        d: "Only in the Sierra Nevadas"
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Students signing up for athletic teams",
                        b: "Students going on a tour of a university campus",
                        c: "Students playing various sports",
                        d: "Students attending a university dedication ceremony"
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Membership on an athletic team",
                        b: "Enrollment in an exercise class",
                        c: "A valid student identification card",
                        d: "Permission from_a faculty member"
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "To the tennis courts",
                        b: "To the arena",
                        c: "To the gymnasium",
                        d: "To the Athletic Department office"
                        },
                        correctAnswer: "d"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Go to the Art Center",
                        b: "Sign up for sports classes",
                        c: "Visit the exercise room",
                        d: "Watch a football game"
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Science",
                        b: "Art",
                        c: "Literature",
                        d: "Music"
                        },
                        correctAnswer: "c"
                    },
                    {
                        question: "",
                        answers: {
                        a: "They are completely different.",
                        b: "They are somewhat similar but have an essential difference.",
                        c: "They are exactly the same in all respects.",
                        d: "They are unrelated."
                        },
                        correctAnswer: "b"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Objective",
                        b: "Idealistic",
                        c: "Philosophical",
                        d: "Environmental"
                        },
                        correctAnswer: "a"
                    },
                    {
                        question: "",
                        answers: {
                        a: "Heredity",
                        b: "Environment",
                        c: "Idealism",
                        d: "Natural laws "
                        },
                        correctAnswer: "c"
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