import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className='flex justify-center'>
            <div>
                <div className='center'>
                    <div className='form pa5 br3 shadow-5'>
                        <input className='f4 pa2 mb3 w-70 center' type ='text ' onChange={onInputChange}/>
                        <button className='w-25 grow f4 link ph4 pv2 dib white ba b--white bg-pink'
                        onClick={onButtonSubmit}
                        >Detect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;