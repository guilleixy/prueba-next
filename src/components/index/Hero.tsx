import Image from 'next/image'

export default function Hero() {
    return(
        <Image 
            src="/hero_prueba.jpg" 
            alt="Hero Image" 
            width={384}
            height={216}
        />
    )
}