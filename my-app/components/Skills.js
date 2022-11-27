import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Hardhat from '../public/assets/skills/hardhat.png'
import Solidity from '../public/assets/skills/solidity.png'
import TypeScript from '../public/assets/skills/typescript.png'
import Ethereum from '../public/assets/skills/ethereum.png'
import Node from '../public/assets/skills/node.png'
import SubSkills from './SubSkills';

const Skills = () => {

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
         <SubSkills skill={Html} skillName='HTML' />
         <SubSkills skill={Css} skillName='CSS' />
         <SubSkills skill={Tailwind} skillName='TAILWINDCSS' />
         <SubSkills skill={Javascript} skillName='JAVASCRIPT' />
         <SubSkills skill={TypeScript} skillName='TYPESCRIPT' />
         <SubSkills skill={Node} skillName='NODEJS' />
         <SubSkills skill={ReactImg} skillName='REACTJS' />
         <SubSkills skill={NextJS} skillName='NEXTJS' />
         <SubSkills skill={Github} skillName='GIT & GITHUB' />
         <SubSkills skill={Solidity} skillName='SOLIDITY' />
         <SubSkills skill={Hardhat} skillName='HARDHAT' />
         <SubSkills skill={Ethereum } skillName='SMART CONTRACT & BLOCKCHAIN' />
        </div>
      </div>
    </div>
  );
};

export default Skills;