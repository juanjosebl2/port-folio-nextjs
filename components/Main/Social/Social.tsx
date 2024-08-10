import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { SocialProps } from "./Social.types";
import Link from "next/link";

const socials = [
    {
        icon: <FaGithub />,
        path: ""
    },
    {
        icon: <FaLinkedinIn />,
        path: ""
    },
    {
        icon: <FaYoutube />,
        path: ""
    },
    {
        icon: <FaTwitter />,
        path: ""
    },
]

export function Social( props: SocialProps ) {
    const { containerStyle, iconStyles } = props;

  return (
    <div className={containerStyle}>
        {socials.map((item) => (
            <Link key={item.path} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        ))}

    </div>
  )
}
