<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Assignment Results</h3>
        </div>
        <div class="col text-right">
          <!-- <a href="#!" class="btn btn-sm btn-primary">See all</a> -->
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Assignment</th>
          <th>Score</th>
          <th>Your Answer</th>
          <!-- <th>Bounce rate</th> -->
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.type}}
          </th>
          <td>
            {{row.score}}
            {{row.type == 'listening' ? '/ 50' : ''}}
            {{row.type == 'structure' ? '/ 40' : ''}}
            {{row.type == 'written expressions' ? '/ 20' : ''}}
          </td>
          <td>
            {{row.user_answer}}
          </td>
          <!-- <td>
            <i class="fas fa-arrow-up text-success mr-3"
               :class="row.bounceRateDirection === 'up' ? 'text-success': 'text-danger'">
            </i>
            {{row.bounceRate}}
          </td> -->
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'assignment-results-table',
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
            if (localStorage.token) {
                this.token = localStorage.token;
            }
            this.getAssignmentResults()
        },
        methods: {
            getAssignmentResults() {
                this.$http({
                    url: 'assignment/get-score',
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + this.token
                    },
                    data: {
                        'token': this.token
                    }
                })
                .then((res) => {
                    this.tableData = res.data
                },(err) => console.log(err)
                )
            }
        },
  }
</script>
<style>
</style>
