import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='leftFrame'>
                    <div className='logo'>Takaria</div>
                    <section className='redes'>
                    <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64">
                    <path fill="#060000" fill-rule="evenodd" d="M35,50.618L29,51.5V37h-4v-5.029h4c0,0,0-2.572,0-5.226	c0-1.524,0.605-2.985,1.683-4.062C31.76,21.605,33.221,21,34.745,21H39v4c0,0-0.827,0-1.73,0C36.016,25,35,26.016,35,27.27V32	l6-0.029L39,37h-4V50.618z" clip-rule="evenodd"></path><path fill="#060000" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,14	c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z"></path>
                    </svg>
                    </figure>
                    <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 32 32">
                    <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                    </svg>
                    </figure>
                    <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="40" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 30.693359 14.058594 C 27.093054 14.058594 24.152344 16.998175 24.152344 20.597656 C 24.152344 20.622956 24.159856 20.646615 24.160156 20.671875 C 20.346071 20.164308 16.972078 18.281343 14.654297 15.439453 A 1.0001 1.0001 0 0 0 13.015625 15.568359 C 12.452734 16.536013 12.130859 17.663768 12.130859 18.857422 C 12.130859 19.919597 12.426761 20.906321 12.878906 21.796875 A 1.0001 1.0001 0 0 0 12.085938 22.773438 L 12.085938 22.84375 C 12.085938 24.777783 12.990963 26.452789 14.332031 27.652344 A 1.0001 1.0001 0 0 0 14.072266 28.677734 C 14.630704 30.41466 15.93241 31.774479 17.5625 32.541016 C 16.258408 33.150994 14.861087 33.587891 13.320312 33.587891 C 12.909515 33.587891 12.510187 33.564538 12.119141 33.517578 A 1.0001 1.0001 0 0 0 11.460938 35.353516 C 14.065405 37.024617 17.166795 38 20.490234 38 C 25.860882 38 30.105907 35.743874 32.943359 32.525391 C 35.780812 29.306907 37.253906 25.153083 37.253906 21.240234 C 37.253906 21.122724 37.248494 21.01029 37.246094 20.894531 C 38.219933 20.11274 39.135827 19.250444 39.830078 18.210938 A 1.0001 1.0001 0 0 0 38.705078 16.699219 C 38.866705 16.38464 39.095491 16.111528 39.205078 15.769531 A 1.0001 1.0001 0 0 0 37.744141 14.603516 C 36.869551 15.121731 35.886845 15.463383 34.869141 15.701172 C 33.725772 14.727018 32.30529 14.058594 30.693359 14.058594 z M 30.693359 16.058594 C 32.005547 16.058594 33.178321 16.606981 34.005859 17.490234 A 1.0001 1.0001 0 0 0 34.927734 17.789062 C 35.079649 17.759183 35.201682 17.662443 35.351562 17.626953 C 35.332963 17.638463 35.321514 17.658672 35.302734 17.669922 A 1.0001 1.0001 0 0 0 35.832031 19.527344 C 35.763341 19.579724 35.722335 19.662323 35.652344 19.712891 A 1.0001 1.0001 0 0 0 35.238281 20.566406 C 35.247781 20.79066 35.253906 21.015832 35.253906 21.240234 C 35.253906 24.645385 33.939657 28.371609 31.443359 31.203125 C 28.947059 34.03464 25.308587 36 20.490234 36 C 18.837046 36 17.2817 35.669687 15.800781 35.167969 C 17.643043 34.77762 19.387244 34.125203 20.816406 33.003906 A 1.0001 1.0001 0 0 0 20.21875 31.21875 C 18.803099 31.19304 17.712807 30.392345 16.898438 29.359375 C 17.197615 29.320665 17.507049 29.319275 17.792969 29.240234 A 1.0001 1.0001 0 0 0 17.724609 27.294922 C 16.073199 26.96164 14.784996 25.723029 14.3125 24.121094 C 14.7378 24.223448 15.110445 24.452375 15.5625 24.466797 A 1.0001 1.0001 0 0 0 16.150391 22.636719 C 14.930654 21.821102 14.130859 20.439709 14.130859 18.857422 C 14.130859 18.530423 14.306329 18.270522 14.371094 17.964844 C 17.211591 20.776703 20.99183 22.6429 25.248047 22.857422 A 1.0001 1.0001 0 0 0 26.271484 21.628906 C 26.193654 21.29976 26.152344 20.956387 26.152344 20.597656 C 26.152344 18.079138 28.173664 16.058594 30.693359 16.058594 z"></path>
                    </svg>
                    </figure>
                    </section>
                    <p className='copyright'>©2023 all Right Reserved Term of use Takaria</p>
                </div>
                <div className='middleFrame1'>
                    <section className='blank'></section>
                </div>
                <div className='middleFrame2'>
                    <section className='informacion'>
                        <h4>Information</h4>
                        <ul className='informacionLista'>
                            <li>Sobre nosotros</li>
                            <li>Productos</li>
                            <li>Blog</li>
                        </ul>
                        </section>
                </div>
                <div className='rightFrame'>               
                    
                    <section className='contacto'>
                    <h4>Contacto</h4>
                    <ul className='contactoLista'>
                        <li>Formulario de contacto</li>
                        <li>WhatsApp</li>
                        <li>Redes sociales</li>
                    </ul>
                    </section>
                </div>
            
            </div>
            <style jsx>{`
            .footer {
                display: flex;
                border: 1px solid #000;
                background: #C1DCDC;
                height: 400px;
                justify-content: space-around;
                align-items: baseline;
            }
            .leftFrame {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .middleFrame1 {
                display: flex;
                flex-direction: columm;
                align-items: flex-start;
            }

            .middleFrame2 {
                display: flex;
                flex-direction: columm;
                align-items: flex-start;
            }
            .logo {
                display: flex;
                color: #000;
                font-family: Poppins;
                font-size: 32px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            .redes {
                display: flex;
                align-items: center;
            }

            .blank {
                display: flex;
            }
             
            h4 {
               margin: -10px; 
            }
            .informacion
            {
                display: flex;
                align-items: center;
                flex-direction: column;
                color: var(--color-2, #1E1E1E);
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .informacionLista{
                display: flex;
                flex-direction: column;
                color: rgba(30, 30, 30, 0.50);
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            .contacto {
                display: flex;
                display: flex;
                align-items: center;
                flex-direction: column;
                color: var(--color-2, #1E1E1E);
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .contactoLista{
                display: flex;
                flex-direction: column;
                color: var(--color-4, rgba(30, 30, 30, 0.50));
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            .copyright {
                display: flex;
                color: var(--color-4, rgba(30, 30, 30, 0.50));
                font-family: Poppins;
                font-size: 15px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            `}
            </style>
        </>
    )
}

export default Footer