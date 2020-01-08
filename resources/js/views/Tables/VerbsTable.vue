<template>
    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Base Form</th>
          <th>Present</th>
          <th>Present Participle</th>
          <th>Past</th>
          <th>Past Participle</th>
        </template>

        <template slot-scope="{row}">
          <td>
            {{row.base_form}}
          </td>
          <td>
            {{row.present}}
          </td>
          <td>
            {{row.present_participle}}
          </td>
          <td>
            {{row.past}}
          </td>
          <td>
            {{row.past_participle}}
          </td>
        </template>
      </base-table>
    </div>
</template>
<script>
  export default {
    name: 'verbs-table',
    data() {
      return {
            tableData: [
                {
                    "base_form": "walk",
                    "present": "walk(s)",
                    "present_participle": "walking",
                    "past": "walked",
                    "past_participle": "walked"
                },
                {
                    "base_form": "hear",
                    "present": "hear(s)",
                    "present_participle": "hearing",
                    "past": "heard",
                    "past_participle": "heard"
                },
                {
                    "base_form": "cook",
                    "present": "cook(s)",
                    "present_participle": "cooking",
                    "past": "cooked",
                    "past_participle": "cooked"
                },
                {
                    "base_form": "sing",
                    "present": "sing(s)",
                    "present_participle": "singing",
                    "past": "sang",
                    "past_participle": "sung"
                },
                {
                    "base_form": "come",
                    "present": "come(s)",
                    "present_participle": "coming",
                    "past": "came",
                    "past_participle": "come"
                },
                {
                    "base_form": "begin",
                    "present": "begin(s)",
                    "present_participle": "beginning",
                    "past": "began",
                    "past_participle": "begun"
                },
                
            ]
        }
    },
}
</script>
<style>
</style>
