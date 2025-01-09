import Image from "next/image"

interface AvatarProps {
    name?: string,
    imageSrc?: string
}

export const Avatar = ({ name, imageSrc }: AvatarProps) => {
    return (
        <div>
            <Image src={imageSrc!} alt={`Avatar do (a) ${name}`} width={32} height={32} />
            @{name}
        </div>
    )
}