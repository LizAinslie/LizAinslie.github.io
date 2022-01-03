import Head from 'next/head';
import Navbar from '../components/navbar';
import SkillCard from "../components/skill_card";
import DartIcon from "../components/icons/dart";
import KotlinIcon from "../components/icons/kotlin";
import LessIcon from "../components/icons/less";
import NextIcon from "../components/icons/next";
import PythonIcon from "../components/icons/python";
import QtIcon from "../components/icons/qt";

import Footer from "../components/footer";
import QuasarIcon from "../components/icons/quasar";
import {ReactIcon} from "../components/icons/react";
import PrettierIcon from "../components/icons/prettier";
import PugIcon from "../components/icons/pug";
import NodeIcon from "../components/icons/node";
import JavaIcon from "../components/icons/java";
import JavascriptIcon from "../components/icons/javascript";
import HtmlIcon from "../components/icons/html";
import GradleIcon from "../components/icons/gradle";
import GulpIcon from "../components/icons/gulp";
import GolangIcon from "../components/icons/golang";
import GitIcon from "../components/icons/git";
import BootstrapIcon from "../components/icons/bootstrap";
import CIcon from "../components/icons/c";
import CppIcon from "../components/icons/cpp";
import CloudflareIcon from "../components/icons/cloudflare";
import CmakeIcon from "../components/icons/cmake";
import CssIcon from "../components/icons/css";
import DjangoIcon from "../components/icons/django";
import ElectronIcon from "../components/icons/electron";
import EslintIcon from "../components/icons/eslint";
import ExpressIcon from "../components/icons/express";
import FlutterIcon from "../components/icons/flutter";
import FirebaseIcon from "../components/icons/firebase";
import NginxIcon from "../components/icons/nginx";
import RubyIcon from "../components/icons/ruby";
import SassIcon from "../components/icons/sass";
import StripeIcon from "../components/icons/stripe";
import TailwindcssIcon from "../components/icons/tailwindcss";
import TypescriptIcon from "../components/icons/typescript";
import VueIcon from "../components/icons/vue";
import WebpackIcon from "../components/icons/webpack";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Liz Ainslie - Skills</title>
      </Head>

      <header className='bg-rose-500 flex flex-col text-white'>
        <Navbar />

        <div className='flex flex-grow items-center py-32'>
          <section className='flex mx-auto h-64'>
            <article className='p-8 h-full'>
              <h1 className='text-7xl mb-4 text-center'>My Skills</h1>
              <p className='text-lg text-center'>Stuff I know and stuff I&apos;m learning.</p>
            </article>
          </section>
        </div>
      </header>

      <main className='container mx-auto py-16'>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          <SkillCard name='Dart' percent={30} description='Language' color='#0175C2' link='https://dart.dev' icon={<DartIcon />} />
          <SkillCard name='Kotlin' percent={90} description='Language' color='#7F52FF' link='https://kotlinlang.org' icon={<KotlinIcon />} />
          <SkillCard name='Less' percent={60} description='CSS Preprocessor' color='#1D365D' link='https://lesscss.org' icon={<LessIcon />} />
          <SkillCard name='Next.js' percent={40} description='JS Framework' color='#000000' link='https://nextjs.org' icon={<NextIcon />} />
          <SkillCard name='Python' percent={75} description='Language' color='#3776AB' link='https://www.python.org' icon={<PythonIcon />} />
          <SkillCard name='Qt' percent={25} description='UI Framework' color='#41CD52' link='https://www.qt.io/' icon={<QtIcon />} />
          <SkillCard name='Quasar' percent={20} description='Vue.js Toolkit' color='#1976D2' link='https://quasar.dev/' icon={<QuasarIcon />} />
          <SkillCard name='React' percent={90} description='JS Framework' color='#61DAFB' link='https://reactjs.org/' icon={<ReactIcon />} />
          <SkillCard name='Prettier' percent={70} description='Code Formatter' color='#F7B93E' link='https://prettier.io/' icon={<PrettierIcon />} />
          <SkillCard name='Pug' percent={85} description='Language' color='#A86454' link='https://pugjs.org/' icon={<PugIcon />} />
          <SkillCard name='Node.js' percent={95} description='JS Runtime' color='#339933' link='https://nodejs.org/' icon={<NodeIcon />} />
          <SkillCard name='Java' percent={95} description='Language' color='#007396' link='https://java.com/' icon={<JavaIcon />} />
          <SkillCard name='JavaScript' percent={95} description='Language' color='#F7DF1E' link='https://javascript.info/' icon={<JavascriptIcon />} />
          <SkillCard name='Ionic' percent={40} description='App Framework' color='#3880FF' link='https://ionicframework.com/' icon={<JavascriptIcon />} />
          <SkillCard name='HTML' percent={100} description='Language' color='#E34F26' link='https://en.wikipedia.org/wiki/HTML5' icon={<HtmlIcon />} />
          <SkillCard name='Gulp' percent={70} description='Build Tool' color='#CF4647' link='https://gulpjs.org/' icon={<GulpIcon />} />
          <SkillCard name='Gradle' percent={65} description='Build Tool' color='#02303A' link='https://gradle.org/' icon={<GradleIcon />} />
          <SkillCard name='Golang' percent={35} description='Language' color='#00ADD8' link='https://golang.org/' icon={<GolangIcon />} />
          <SkillCard name='Git' percent={65} description='VCS Tool' color='#F05032' link='https://git-scm.com/' icon={<GitIcon />} />
          <SkillCard name='Bootstrap' percent={75} description='UI Framework' color='#7952B3' link='https://getbootstrap.com/' icon={<BootstrapIcon />} />
          <SkillCard name='C' percent={45} description='Language' color='#A8B9CC' link='https://en.cppreference.com/w/c' icon={<CIcon />} />
          <SkillCard name='C++' percent={60} description='Language' color='#00599C' link='https://en.cppreference.com/w/cpp' icon={<CppIcon />} />
          <SkillCard name='Cloudflare' percent={40} description='DNS Provider' color='#F38020' link='https://cloudflare.com/' icon={<CloudflareIcon />} />
          <SkillCard name='CMake' percent={70} description='Build Tool' color='#064F8C' link='https://cmake.org/' icon={<CmakeIcon />} />
          <SkillCard name='CSS' percent={90} description='Stylesheet' color='#1572B6' link='https://en.wikipedia.org/wiki/CSS' icon={<CssIcon />} />
          <SkillCard name='Django' percent={80} description='Web Framework' color='#092E20' link='https://www.djangoproject.com/' icon={<DjangoIcon />} />
          <SkillCard name='Electron' percent={50} description='Desktop Framework' color='#47848F' link='https://www.electronjs.org/' icon={<ElectronIcon />} />
          <SkillCard name='ESLint' percent={30} description='JS Linter' color='#4B32C3' link='https://eslint.org/' icon={<EslintIcon />} />
          <SkillCard name='Express' percent={90} description='Web Framework' color='#000000' link='https://expressjs.org/' icon={<ExpressIcon />} />
          <SkillCard name='Flutter' percent={45} description='App Framework' color='#02569B' link='https://flutter.dev/' icon={<FlutterIcon />} />
          <SkillCard name='Firebase' percent={15} description='Cloud Service' color='#FFCA28' link='https://firebase.google.com/' icon={<FirebaseIcon />} />
          <SkillCard name='NGINX' percent={65} description='Web Server' color='#009639' link='https://www.nginx.com/' icon={<NginxIcon />} />
          <SkillCard name='Ruby' percent={45} description='Language' color='#CC342D' link='https://www.ruby-lang.org/' icon={<RubyIcon />} />
          <SkillCard name='Sass' percent={90} description='CSS Preprocessor' color='#CC6699' link='https://sass-lang.com/' icon={<SassIcon />} />
          <SkillCard name='Stripe' percent={30} description='Payment Handler' color='#008CDD' link='https://stripe.com/' icon={<StripeIcon />} />
          <SkillCard name='Tailwind' percent={75} description='UI Framework' color='#06B6D4' link='https://tailwindcss.com/' icon={<TailwindcssIcon />} />
          <SkillCard name='TypeScript' percent={80} description='Language' color='#3178C6' link='https://www.typescriptlang.org/' icon={<TypescriptIcon />} />
          <SkillCard name='Vue.js' percent={90} description='JS Framework' color='#4FC08D' link='https://vuejs.org/' icon={<VueIcon />} />
          <SkillCard name='Webpack' percent={85} description='JS Bundler' color='#8DD6F9' link='https://webpack.js.org/' icon={<WebpackIcon />} />
        </section>
      </main>

      <Footer />
    </>
  );
}