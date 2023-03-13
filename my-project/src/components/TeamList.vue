<template>
    <div class="container">
    <div v-for="team in team" :key="team._id" class="card my-5">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                    <p class="TeamName is-4">{{team.TeamName}}</p>
                    <p class="Club is-4">{{team.Club}}</p>
                    <p class="PlayerName is-4">{{team.PlayerName}}</p>
                    </div>
                </div>
                </div>
                <div class="Permbajtja">
                    {{ team.Permbajtja }}
                    <p />
                <strong>rating: {{ team.rating }}</strong>
                </div>
    
                <div class="card">
                <footer class="card-footer">
                    <button 
                    @click="editPost(team._id)"
                    class="card-footer-item button is-warning"
                    >
                        Edit
                    </button>
                    <button 
                    @click.prevent="removePost(team._id)"
                    class="card-footer-item button is-danger">Delete</button>
                </footer>
            </div>
            </div>
            
        </div>
    </template>
    
      
    <script>
    
    import { ref,onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    export default{
        setup(){
            const router = useRouter()
            const team=ref([])
    
            const API_URL='http://localhost:4000/team'
    
    
                onMounted(() => {
                    getPosts()
                })
    
               async function getPosts() {
                    try {
                    const response = await fetch(API_URL)
                    const json = await response.json()
                    team.value = json
                    }catch (error) {
                    console.log(error)
                    }
                }
    
                const api='http://localhost:4000/team/delete-team'
    
                async function removePost(_id) {
                const response = await fetch(`${api}/${_id}`,
                {
                method: 'DELETE',
                })
                getPosts()
                }
    
                async function editPost(_id) {
                    router.push({
                    name: 'Update',
                        params: {
                        id: _id,
                        },
                    })
                }
    
    
                return{
                    team,
                    removePost,
                    editPost,
                }
    
        },
    }
    </script>