<template>
    <div class="bg-white">
    
    <div class="container">
      <div class="d-flex justify-content-between align-items-center py-4">
        <div>
          <a href="#" class="d-inline-block text-dark">
            <span class="text-muted">Number of products  </span>
            <strong>{{ this.numberOfProducts }}</strong>
          </a>
        </div>
        
      </div>
    </div>
    <hr class="m-0">
    
    </div>
    
    <section id="about-section" class="pt-5 pb-5">
      <div class="container wrapabout">
    
            <div class="container-fluid">
                <div class="container text-center">
                    <h1>Our Products.</h1>
                </div>
                <div class="container">
                    <h2 class="h5 mb-5 text-center">You may also like these products</h2>
                    <div class="row">
                        <div class="col-lg-3" v-for="product in this.products" :key="product._id">
                            <div class="card text-center mb-3">
                                <div class="py-5 px-4">
                                    <img :src="`/upload/${product.image.filename}`" alt="" class="img-fluid mb-4" />
                                    <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">{{product.title}}</a></h3>
                                    <span class="text-success">${{product.price}}</span>
                                    <p>{{ product.category }}</p>
                                    <p>{{ product.size }}</p>
                                    <p>{{ product.description }}</p>
                                </div>
                                <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                                    <span class="d-block">10%</span>
                                    <span class="d-block">OFF</span>
                                </div>
                            </div>
                        </div>   
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    import { mapState, mapGetters } from 'vuex';
    
    export default {
       
    
        computed : {
        //   ...mapState(['products']),
          ...mapState('productModule', ['products']),
          ...mapGetters('productModule', ['numberOfProducts'])
        },
        created() {
          this.$store.dispatch('productModule/getProducts');
        },
    }
</script>

<style>
.text-center {
    text-align: center !important;
}
.mb-5 {
    margin-bottom: 3rem !important;
}
.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
}
.text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
}
a {
    color: #5465ff;
    text-decoration: none;
}
body {
    background: #eee;
}
.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
}
.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.5rem 1.5rem;
}
</style>