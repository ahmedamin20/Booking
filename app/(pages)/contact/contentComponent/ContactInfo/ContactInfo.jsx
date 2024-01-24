import Image from 'next/image';
import style from './ContactInfo.module.css';

export default function ContactInfo() {
    const info = [
        {
            icon: 'icons/user-solid.svg',
            title: 'Name',
            mail: 'Mahmoud Bahaa',
        },
        {
            title: 'Email',
            icon: 'icons/envelope-solid.svg',
            mail: 'mahmoudbahaa755@gmail.com',
        },
        {
            icon: 'icons/phone-solid.svg',
            title: 'Phone',
            mail: '+0201010623847',
        },
        {
            icon: 'icons/location-dot-solid.svg',
            title: 'Address',
            mail: 'Cairo, Egypt',
        },
    ];
    const w_h=35
    return (
        <div className={`container ${style['contact-info']}`}>
            <div className={style['info-title']}>Contact Info
                <p className='small'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
            </div>
            <div className={style['info-details']}>
                {info.map((item, index) => (
                    <div key={index} className={style['info-icon']}>
                        <img className={style.icon} src={item.icon} width={w_h} height={w_h} alt={item.title} />
                        <div>
                            <p className='purple f-bold'>{item.title}</p>
                            <p>{item.mail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
