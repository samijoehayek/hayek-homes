import Image from 'next/image'
import Link from 'next/link'

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: '/icons/instagram.svg',
      url: 'https://instagram.com/'
    },
    {
      name: 'Facebook',
      icon: '/icons/Facebook.svg',
      url: 'https://facebook.com/'
    },
    {
      name: 'LinkedIn',
      icon: '/icons/Linkedin.svg',
      url: 'https://linkedin.com/'
    },
    {
        name: 'Twitter',
        icon: '/icons/Twitter.svg',
        url: 'https://twitter.com/'
    }
  ]

  return (
    <div className="flex items-center space-x-8">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#313131] transition-opacity hover:opacity-80"
        >
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </Link>
      ))}
    </div>
  )
}

export default SocialIcons