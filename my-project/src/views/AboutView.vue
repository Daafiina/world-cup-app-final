<template>
    <main>

        <header>
       
        <h1 className="h1shi">About Us</h1>
    </header>
    <!--================== Header Section Ends Here -->


    <!--================== Home Section Starts from Here ==================-->
    <section id="home">
        <div className="home-left">
            <img src="https://images.pexels.com/photos/15348246/pexels-photo-15348246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style="width:130%;">
        </div>
        <div className="home-right">
            <h2 className="home-heading" style="font-size:40px; font-weight: 600;"> Get the latest news of world cup here </h2>
            <p className="home-para" style="font-size:20px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam blanditiis
                quas assumenda nam error vel dolores suscipit ad, sapiente deleniti ipsum, obcaecati perspiciatis.</p>
            <a href="" className="btn"> Our Work</a>
        </div>
    </section>
    <!--================== Home Section Ends Here -->

    <!--================== Workflow Section Starts from Here ==================-->
    <section id="workFlow">
        <h2 className="heading"> Buy tickets and shirts here </h2>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi sint. <br>Ipsam molestias
            nemovel laboriosam consequatur, perferendis<br> minima soluta? Natus necessitatibus autem suscipit!</p>
        <div className="num-container">
            <div className="num-item"><img src="https://cdn-icons-png.flaticon.com/512/2673/2673061.png" className="fotoCust">
<span>27,882 <br>Customers</span></div>
            <div className="num-item"><img src="https://cdn-icons-png.flaticon.com/512/9358/9358502.png" alt="" style="width:61px;margin-left:66px"><span>90% <br>satisfied customers</span></div>
            <div className="num-item"><img src="https://cdn-icons-png.flaticon.com/512/9031/9031828.png" style="width:61px;margin-left:30px"><span>70,592 <br>tickets sold</span></div>
        </div>
    </section>
    <!--================== Workflow Section Ends Here -->


    <!--================== Goal Section Starts from Here ==================-->
    <section id="goal">
        <div className="goal-left">
            <h2>Our Goal</h2>
            <p>Lorem isum dolor sit amet consectetur adipisicing elit. Labore omnis obcaecati incidunt asperiores,
                mollitia quibusdam velit at itaque sunt, culpa in pariatur quas, temporibus repellendus vitae! Vitae,
                illum asperiores.</p>
            <ul>
                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, atque!</li>
                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, atque!</li>
                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, atque!</li>
            </ul>
            <a href="" className="btn2"> Contact Us</a>
        </div>
        <div className="goal-right">
            <img src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
        </div>
    </section>
    <!--================== Goal Section Ends Here -->

    <!--================== Our Team Section Starts from Here ==================-->
    <section id="our-Team">
        <h2>Our Team</h2>
        <div className="teamContainer">
            <div className="team-item">
                 <img src="https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg" alt=""> 
                <h5 className="member-name">Dafina Aliji</h5>
                <span className="role">Developer</span>
            </div>
            <div className="team-item">
                 <img src="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg" alt=""> 
                <h5 className="member-name">Bleart Merovci</h5>
                <span className="role">Journal</span>
            </div>
            <div className="team-item">
                <img src="https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg" alt=""> 
                <h5 className="member-name">Mirjeta Rexhepi</h5>
                <span className="role">Journal</span>
            </div>
            <div className="team-item">
              <img src="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg" alt=""> 
                <h5 className="member-name">Jetmir Demiri</h5>
                <span className="role">Developer</span>
            </div>
           
        </div>
    </section>
    <!--================== Our Team Section Ends Here -->

    <!--================== Footer Starts from Here ==================-->

    <!--================== Footer Ends Here -->
    </main>
</template>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

header {
    height: 300px;
    position: relative;
}

header::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://media.istockphoto.com/id/698848166/photo/confederations-cup-golden-trophy-in-the-form-of-the-globe-2017-3d-render.jpg?s=612x612&w=0&k=20&c=wa-h1Qu93VNhEDl5vQsHgSpXrPUnFLGkvBFbYIAhCNg=); 
    background-position: center;
    background-size: contain;
    opacity: 0.8;
    z-index: -1;
    margin-top: -6REM;
}

header::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    background-size: cover;
    background-color: black;
    background-position: bottom;
    margin-top: -6REM;
}

.navbar {
    color: #fff;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
}

.navbar .responsive {
    display: none;
}

.navbar ul li {
    padding: 8px 12px;
}

.navbar ul li a {
    z-index: 2;
    color: #fff;
    position: relative;
    text-decoration: none;
}

#hamBurger {
    display: none;
}

.button {
    padding: 7px 10px;
    color: #fff;
    animation: none;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    background-color: rgb(32, 154, 202);
}

#home {
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.home-left {
    height: 300px;
    position: relative;
}

.home-left img {
    height: 140%;
    border-radius: 10px;
}

.home-right {
    width: 50%;
}

.home-heading {
    font-size: 2rem;
    margin-bottom: 10px;
}

.home-para {
    margin-bottom: 20px;
}

.btn {
    text-decoration: none;
    color: white;
    font-weight: bold;
    position: relative;
    background-color: #1f2937;
    padding:5px;
    font-weight: 300;
}
a.btn2 {
    margin-right: 38REM;
    background-color: #1f2937;
    text-decoration: none;
    color: white;
    font-family: Rubik;
    padding: 12px;
    border-radius: 3px;
}
.btn:hover::after {
    content: '';
    height: 4px;
    position: absolute;
    background-color: aqua;
    left: 0;
    bottom: -10px;
    animation: width;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    border-radius: 5px;
}

@keyframes width {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

#workFlow {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 4rem;
    background-color: rgb(228, 227, 227);
    padding-top: 50px;
    padding-bottom:50px;
}

.heading {
    margin: 1rem auto;
    text-align: center;
}

.para {
    margin: 1rem auto;
}

img.fotoCust {
    width: 52px;
    margin-left: 33px;
    margin-bottom: 10px;
}
.num-container {
    width: 70%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.num-item {
    font-size: 1.5rem;
    line-height: 1.4rem;
    color: rgb(43, 126, 199);
}

/* Our Goal */
#goal {
    width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
}

.goal-left {
    width: 60%;
    line-height: 2rem;
}

.goal-left h2 {
    font-size: 2.4rem;
}

.goal-left p {
    line-height: 1.5rem;
    margin: 1rem 0;
}

.goal-left ul {
    list-style: none;
    margin-bottom: 1rem;
}

.goal-left ul li::before {
    line-height: 1.5rem;
    content: '✓';
    color: red;
}

.goal-right {
    position: relative;
    width: 35%;
}

.goal-right img {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    filter: drop-shadow(3px 4px 5px black);
    transition: all 0.2s linear;
}

.goal-right img:hover {
    transform: translateY(-5px);
    filter: drop-shadow(5px 6px 7px black);
}

/* Our Team */
#our-Team[data-v-4cebd208] {
    /* width: 80%; */
    margin: 4rem auto 1rem;
    background-color: #e4e3e3;
    padding-top: 30px;
    padding-bottom: 30px;
}

#our-Team h2 {
    text-align: center;
    margin: 1rem auto 4rem;
    position: relative;
}

#our-Team h2::after {
    content: '';
    height: 4px;
    margin: 0 auto;
    text-align: center;
    width: 15%;
    background-color: aqua;
    position: absolute;
    left: 50%;
    bottom: -10px;
    border-radius: 5px;
    transform: translate(-50%);
}

.teamContainer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.team-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
}

.team-item h5 {
    margin-top: 1rem;
    font-size: 1.1rem;
}

.team-item span {
    margin-top: .4rem;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(7, 176, 176);
}

.team-item img {
    width: 80px;
}

footer {
    padding: 1rem 0;
    text-align: center;
}

@media screen and (max-width: 784px) {
    #list {
        display: none;
    }

    #hamBurger {
        cursor: pointer;
        display: block;
        z-index: 20;
        font-size: 2rem;
    }

    .navbar .responsive {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0%;
        left: 100%;
        padding: 2rem 0;
        z-index: 2;
        height: 100vh;
        background-color: rgb(24, 23, 24);
        width: 100%;
        transition: all 0.5s linear;
        opacity: 0.9;
    }

    .navbar ul li {
        margin: 0.4rem 0;
    }

    .responsive.active {
        left: 0%;
    }

    .goal-right {
        width: 100%;
        margin: 0 auto 2rem;
    }

    .goal-left {
        width: 100%;
        text-align: center;
    }

    #goal {
        flex-direction: column-reverse;
    }
}

@media screen and (max-width: 633px) {
    #home {
        flex-direction: column;
    }

    .home-left {
        width: 100%;
        height: auto;
    }

    .home-left img {
        width: 100%;
    }

    .home-right {
        margin-top: 2rem;
        width: 100%;
    }

    .para {
        width: 90%;
    }

    .num-container {
        flex-direction: column;
    }

    .num-item {
        margin: 1rem;
    }

    .teamContainer {
        justify-content: center;
    }
}
header[data-v-4cebd208] {
    height: 460px;
    position: relative;
}
h1.h1shi {
    color: white;
    margin-top: 7%;
    font-size: 5REM;
    padding-top: 5REM;

}

.goal-left h2[data-v-4cebd208] {
    font-size: 2.4rem;
    text-align: left;
}
.goal-left p[data-v-4cebd208] {
    line-height: 1.5rem;
    margin: 1rem 0;
    text-align: left;
}
.goal-left ul[data-v-4cebd208] {
    list-style: none;
    margin-bottom: 1rem;
    text-align: left;
}
#goal[data-v-4cebd208] {
    width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 10%;
}
#workFlow[data-v-4cebd208] {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 7%;
}
</style>