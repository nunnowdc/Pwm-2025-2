
// import Image from "next/image"; 
// import styles from "./page.module.css";

    function ExemploApostilaHTML() {
        return (
            <div>
            <h1> Programação Web Mobile 25.2 </h1>
            <br />
            <hr></hr>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolor eligendi rem cumque perferendis ratione sint hic reprehenderit cum. Tempora dolores commodi illum eaque mollitia error pariatur cum reprehenderit at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam voluptatem culpa aspernatur delectus, iure sint magni adipisci enim. Maiores hic nobis quibusdam magnam officiis molestias nam atque obcaecati esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi, rerum unde eum id sequi esse ut nemo sit a laboriosam aspernatur debitis eaque iste, repellat non! Iusto, ea quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam neque delectus obcaecati, maxime excepturi odit animi iure laboriosam hic sequi in facere modi, commodi sed! Recusandae totam placeat maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat esse, facilis, veniam laudantium, amet iste quam rem ullam perferendis laborum? Autem eligendi eos voluptas doloremque similique odio? Aut, sint?</p>     
            <br />

            <a href="https://www.google.com/?hl=pt_BR"> 
                <img src="/Assets/images/image03_grd.png" alt="Penguin image" width="300" height="200" />
            </a>
            <img src="/Assets/images/pic_trulli.jpg" alt="Pic trulli image" width="300" height="200" />

            <br></br>

            <audio controls>
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg" />
            </audio>

            <p> H<sub>2</sub>O</p>
            <p>30<sup>3</sup></p>
            <p>Html <mak>Marked</mak> formatting</p>
            <p>Html <del>delete</del> formatting</p>
            <p>Html <insert>insert</insert> formatting</p>

            <br></br>

            <label htmlFor="pokemon">Escolha um jogo: </label>
            <select name="Pokemon Games" id="games" multiple>
                <optgroup lable="Gen 1">
                <option value="fire red">Fire red</option>
                </optgroup>
                <option value="diamond and pearl">Diamond and pearl</option>
                <option value="emerald">Emerald</option>
            </select>

            <br></br>

            <fieldset>
                <legend>Login</legend>
                <form target="_blank" method="get">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email" name="email" required></input><br/>
                <lable htmlFor="senha">Password:</lable>
                <input type="password" placeholder="Password" name="senha" minLength="8" required></input><br/>
                <input type="submit" ></input>
                </form>
            </fieldset>

            </div>
        );
    }
