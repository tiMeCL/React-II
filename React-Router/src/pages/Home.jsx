import React from 'react';

const Home = () => {
    return (
        <div className='container mt-4 pt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Anime's Cakes</h1>
                    <p>"¡Saborea la magia del anime en cada rebanada! Pastelería inspirada en tus series favoritas.</p>
                    <div className='pasteles'>
                    <img src='./src/assets/pastel.jpg' class="img-fluid" alt='pastel'></img>

                    <img style={{width:800, padding:30, height:600}} src="./src/assets/pastel2.jpg"
                    class="img-fluid" alt="pastel 2" />
                    </div>

                </div>

            </div>
            
        </div>
    );
}

export default Home;