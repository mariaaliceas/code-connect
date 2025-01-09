import Image from "next/image"
import { Avatar } from "../Avatar"
import { AnyMxRecord } from "node:dns"

interface postProps {
    post?: any
}

export const CardPost = ({ post }: postProps) => {
    return (
        <article>
            <header>
                <figure>
                    <Image
                        src={post.cover}
                        alt={`Capa do post de titulo: ${post.title}`}
                        width={438}
                        height={133} />

                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                text
            </section>
            <footer>
                <Avatar
                    name={post.author.username}
                    imageSrc={post.author.avatar} />
            </footer>
        </article>
    )
}