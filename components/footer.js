import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faKeybase, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className='flex flex-col items-center bg-slate-100 py-8 text-slate-500'>
      <section className='flex items-center p-2 text-lg'>
        <a className='inline-block m-2 hover:text-rose-500' href='https://github.com/LizAinslie'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className='inline-block m-2 hover:text-rose-500' href='https://twitter.com/LizzyReborn'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className='inline-block m-2 hover:text-rose-500' href='https://www.twitch.tv/lizainslie'>
          <FontAwesomeIcon icon={faTwitch} />
        </a>
        <a className='inline-block m-2 hover:text-rose-500' href='https://discord.gg/hKd9eQTQmZ'>
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a className='inline-block m-2 hover:text-rose-500' href='https://keybase.io/lizainslie'>
          <FontAwesomeIcon icon={faKeybase} />
        </a>
      </section>
      <p className='text-lg'>&copy; {new Date().getFullYear()} Liz Ainslie, All rights reserved.</p>
    </footer>
  );
}