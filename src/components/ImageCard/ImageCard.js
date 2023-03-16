import './ImageCard.scss';

const ImageCard = ({imageUrl, children}) => {
    return (
        <div className='tech__item'>
            <img className='tech__img' src={imageUrl} alt={children}/>
            <div className='tech__content'>
                {children}
            </div>
        </div>
    );
}

export default ImageCard;