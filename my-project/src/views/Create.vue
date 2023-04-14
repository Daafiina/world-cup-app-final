<template>
    <TeamForm :team="team" @form-submitted="createPost"/>
</template>

<script>
import TeamForm from '../components/TeamForm.vue'
import {reactive} from 'vue'
import { useRouter } from 'vue-router'

export default{
    components:{
        TeamForm,
    },

    setup(){
        const api_url='http://localhost:4000/team/create-team'
        const router = useRouter()

        const team = reactive({
        TeamName:'',
        Club:'',
        PlayerName:'',
        Permbajtja:'',
        rating:'',
      })

      async function createPost() {
        try {
          const response = await fetch(api_url, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              TeamName: team.TeamName,
              Club: team.Club,
              PlayerName: team.PlayerName,
              Permbajtja: team.Permbajtja,
              rating: team.rating
            }),
          })
        
          const json = await response.json()
          router.push({
            name: 'home',
          })
        } catch (error) {
          console.log(error)
        }
      }
      return {
        team,
        createPost,
      }
    },
}
</script>