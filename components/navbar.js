import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter, faTwitch, faDiscord, faKeybase} from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <nav className='flex p-2'>
      <Link href='/'>
        <a className='inline-block py-2 px-3 hover:bg-rose-400 text-sm text-white rounded-md'>Home</a>
      </Link>
      <Link href='/skills'>
        <a className='inline-block py-2 px-3 hover:bg-rose-400 text-sm text-white rounded-md ml-2'>Skills</a>
      </Link>

      <div className='flex-grow'>
        {/* Nothing uwu */}
      </div>

      <div>
        <a className='inline-block py-2 px-3 hover:bg-rose-400 text-sm text-white rounded-md mr-2'
           href='https://github.com/LizAinslie'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className='inline-block py-2 px-3 hover:bg-rose-400 text-sm text-white rounded-md mr-2'
           href='https://twitter.com/LizzyReborn'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className='inline-block py-2 px-3 hover:bg-rose-400 text-sm text-white rounded-md mr-2'
           href='https://www.twitch.tv/lizainslie'>
          <FontAwesomeIcon icon={faTwitch} />
        </a>
        <a className='inline-block py-2 px-3 hover:bg-rose-400 text-sm text-white rounded-md mr-2'
           href='https://discord.gg/hKd9eQTQmZ'>
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a className='inline-block py-2 px-3 hover:bg-rose-400 text-sm text-white rounded-md'
           href='https://keybase.io/lizainslie'>
          <FontAwesomeIcon icon={faKeybase} />
        </a>
      </div>
    </nav>
  );
}