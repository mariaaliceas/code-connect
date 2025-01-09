'use client'

import Image from "next/image"
import { Avatar } from "../Avatar"
import * as S from "./styles"

interface postProps {
    post?: any
}

export const CardPost = ({ post }: postProps) => {
    return (
        <S.CardWrapper>
            <S.AvatarWrapper>
                <Image style={{ borderRadius: "5px" }}
                    src={post.cover}
                    alt={`Capa do post de titulo: ${post.title}`}
                    width={438}
                    height={133} />
            </S.AvatarWrapper>

            <S.CardTitle>{post.title}</S.CardTitle>
            <p>{post.body}</p>
            text
            <Avatar
                name={post.author.username}
                imageSrc={post.author.avatar} />
        </S.CardWrapper>
    )
}