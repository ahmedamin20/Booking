import Image from 'next/image'


export default function Logo() {
    return (
        <div className="logo">
            <Image src={logo} alt="logo" />
        </div>
    )
}