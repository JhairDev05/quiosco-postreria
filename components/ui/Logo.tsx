import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex justify-center mt-5">
            <div className="relative w-40 h-40">
                <Image sizes="(max-width: 768px) 50px" fill alt="Logotipo La heladera" src='/LaHeladera1.png'/>
            </div>

        </div>
    )
}