<template>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <div class="image is-2by2">
                        <img  :src="framework.imageUrl">
                    </div>
                </div>
                <div class="column is-5 is-offset-1">
                    <div class="title is-2"> {{ framework.name }} </div>
                    <p class="title is-3 has-text-muted"> {{ framework.basedLanguage }} </p>
                    <hr>
                    <br>
                    <p class="">
                        <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
                        <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
                        <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
                        <i class="fa fa-star title is-5"></i>
                        <i class="fa fa-star title is-5"></i>
                        &nbsp; &nbsp;
                        <strong>41 recensioni</strong>
                        &nbsp; &nbsp;
                    </p>
                    <br>
                    <p> {{ framework.description }} </p>
                    <br>
                    <br>
                    <p class="">
                        <a href="#">
                            <i class="fa fa-minus cart-icon"></i>
                        </a>
                        &nbsp;
                        <input type="text" name="" class="input has-text-centered" value="1" style="width:40px;">
                        &nbsp;
                        <a href="#">
                            <i class="fa fa-plus cart-icon"></i>
                        </a>
                        &nbsp; &nbsp; &nbsp;
                        <a class="button is-primary">Add to cart</a>
                    </p>
                    <br>
                </div>
            </div>
        </div>
        <div class="links">
            <nuxt-link to="/frameworks"  class="button--green">Torna ai Framework </nuxt-link>
            <nuxt-link to="/"  class="button--green">Torna alla Home Page</nuxt-link>
        </div>
    </div>
</template>


<script>
    import frameworks from '~/static/frameworks-list.json'

    export default {
        asyncData (context) {
            console.log(context.params.slug)
            console.log(frameworks[context.params.slug])
            return { slug: context.params.slug, framework: frameworks[context.params.slug] }
        },
        head () {
            return {
                title: 'Framework - ' + this.framework.name,
                meta: [
                    { hid: 'description', name: 'description', content: 'Descrizione framework' }
                ]
            }
        }

    }
</script>

<<style scoped>
    body {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    }
    .has-text-muted {
        color: #95A5A6;
    }
    .fa {
        font-size:10px;
        padding-top:3px;
        color: #95A5A6;
    }
    .panel-block-item {
        display: inline-block;
        color: #95A5A6;
        font-weight: bold;
        padding: 0 10px;
    }
    .cart-icon {
        padding-top:10px;
    }
    .framework-header {
        background-color:#fafafa;
    }

    .links
    {
        padding-top: 15px;
    }

</style>
