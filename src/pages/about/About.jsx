import React from 'react';
import './About.css';
import aboutImg from '../../assets/about.jpg';
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />

      <section className='about'>
        <div className='container'>
          <div className='section-title'>
            <h2>About</h2>
          </div>

          <div className='about-content grid'>
            <div className='about-img'>
              <img src={aboutImg} alt='about-img' />
            </div>
            <div className='about-text'>
              <h2 className='about-title fs-26 ls-1'>About BookSpot</h2>
              <p className='fs-17'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                perspiciatis eligendi est incidunt omnis, fugiat voluptatibus
                maxime. Aspernatur est ullam, quam deleniti excepturi provident
                vitae, fugit, debitis optio tempore quis. Aperiam consequuntur
                quas autem tempore vel vitae ad nihil sit aliquam eum aut ipsum
                esse alias velit laboriosam, eos tempora adipisci doloremque
                consectetur architecto dolor? Fugit, pariatur vel. Nam, esse?
                Eum id unde maiores, earum fuga molestias, in tempore repellat
                recusandae natus voluptatibus omnis adipisci inventore optio
                illo itaque nihil cupiditate perferendis numquam quos maxime?
                Ullam quos asperiores omnis excepturi.
              </p>
              <p className='fs-17'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi eveniet voluptas cum cumque minus veritatis voluptate,
                laudantium soluta error ipsa sint commodi vero expedita
                similique, illo eligendi quam autem. Quaerat. Debitis ab tempora
                culpa sit! Ex libero quod laboriosam eveniet nesciunt nisi
                placeat, dolore consequuntur ad nihil ipsum. Animi iusto
                voluptatibus quibusdam illum consectetur labore fuga repudiandae
                pariatur expedita veritatis! Quasi velit natus, eum inventore,
                provident laboriosam commodi molestiae fuga culpa est ullam et
                possimus, animi hic quod similique nam. Omnis dolor saepe
                inventore quos quia ad magni? Voluptas, dolor?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
