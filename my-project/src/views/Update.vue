<template>
    <TeamForm :team="team" :submitForm="updatePost"></TeamForm>
  </template>

<script>
import TeamForm from '@/components/TeamForm.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
export default{
    components: {
        TeamForm,
    },
    setup() {
        const router = useRouter()
        const route = useRoute()

        const API_URL = 'http://localhost:4000/team/update-team/'

        const team = ref({
            TeamName: '',
            Club: '',
            PlayerName: '',
            Pershkrimi:'',
            rating:'',
        })

        onMounted(() => {
            getPost()
        })

        
    async function getPost() {
      const { id } = route.params
      const response = await fetch(`${API_URL}/${id}`)
      const json = await response.json()
      team.value = json
    }
    async function updatePost() {
      try {
        const { id } = route.params
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
                    teamName: this.team.TeamName,
                    club: this.team.Club,
                    playerName: this.team.PlayerName,
                    permbajtja: this.team.Permbajtja,
                    Rating: this.team.reating,
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
        updatePost,
        }
    },
}
</script>