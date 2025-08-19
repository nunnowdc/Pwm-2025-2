// import Image from "next/image"; 
// import styles from "./page.module.css";

export default function Home() {
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

      <table border="1">
        <thead>
            <th>Country Name</th>
            <th>Country Flag</th>
            <th>GDP (Millions of USD)</th>
        </thead>
        <tr>
            <td>USA</td>
            <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="Image not founded" width="200" height="100" /></td>
            <td>18,561,930</td>
        </tr>
        <tr>
            <td>India</td>
            <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png" alt="Image not founded" width="200" height="100" /></td>
            <td>2,250,990</td>
        </tr>
        <tr>
            <td>United Kingdom</td>
            <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="Image not founded" width="200" height="100" /></td>
            <td>2,649,890</td>
        </tr>
        <tr>
            <td colSpan={3}>End</td>
        </tr>
      </table>

      <br></br>

    </div>
  );
}
