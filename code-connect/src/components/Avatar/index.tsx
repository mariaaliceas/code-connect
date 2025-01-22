import Image from "next/image";
import * as S from "./styles";

interface AvatarProps {
  name?: string;
  imageSrc?: string;
}

export const Avatar = ({ name, imageSrc }: AvatarProps) => {
  return (
    <S.AvatarWrapper>
      <Image
        src={imageSrc!}
        alt={`Avatar do (a) ${name}`}
        width={32}
        height={32}
      />
      <div>@{name}</div>
    </S.AvatarWrapper>
  );
};
