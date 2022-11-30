import React from 'react';
import NFTCollection from '../public/assets/projects/NFT Collection.png'
import Whitelist from '../public/assets/projects/Whitelist.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Whitelist dApp for NFT Collection'
            backgroundImg={Whitelist}
            projectUrl='/whitelist'
            tech='Next JS, React Js, Hardhat, Solidity'
          />
          <ProjectItem
            title='NFT Collection'
            backgroundImg={NFTCollection}
            projectUrl='/nftcollection'
            tech='Next JS, React Js, Hardhat, Solidity'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;