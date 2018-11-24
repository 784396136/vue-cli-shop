<template>
    <div>
        <header class="page-header">
            <h4>CAST商城</h4>
        </header>
        
        <div class="contaniner fixed-contb">
            <el-carousel indicator-position:none>
                <el-carousel-item v-for="(img,index) in imgList" :key="index">
                <img :src="img.url" alt="" width="100%" height="100%">
                </el-carousel-item>
            </el-carousel>
            <section class="shop">
                <h3>
                    <a href="#">
                        服装
                        <span><img src="../../assets/images/right.png"/></span>
                    </a>
                </h3>
                <dl>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-ph01.png"/>
                            <b>男装</b>
                        </a>
                    </dd>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-ph02.png"/>
                            <b>女装</b>
                        </a>
                    </dd>
                </dl>
            </section>
            
            <section class="shop">
                <h3>
                    <a href="list.html">
                        食品
                        <span><img src="../../assets/images/right.png"/></span>
                    </a>
                </h3>
                <dl>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-03.png"/>
                            <b>切糕</b>
                        </a>
                    </dd>
                    <dd>
                        <a href="list.html">
                            <img src="../../assets/images/index-ph04.png"/>
                            <b>酥饼</b>
                        </a>
                    </dd>
                </dl>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgList:[
                {url:require('../../assets/images/d4baab6b75a05da3b3e85caa48f72745eacd3ea4.jpg')},
                {url:require('../../assets/images/c4d519a02efbfcfffaa0b8a1db976351d96db569.jpg')},
                {url:require('../../assets/images/dd48ddc5479fa96c8209b25483a2c969b22320fc.jpg')},
                {url:require('../../assets/images/b0c0435bb46cc1ba729edbc66979dfa45c3cc292.jpg')},
            ]
        }
    },
    methods:{

    },
    created() {
        this.axios.get('http://localhost:8080/api/test').then((res)=>{
            console.log(res)
        })
    },
}
</script>
