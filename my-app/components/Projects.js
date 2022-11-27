import React from 'react';
import DAO from '../public/assets/projects/DAO.png';
import dExchange from '../public/assets/projects/Decentralized Exchange.png'
import InitialCoin from '../public/assets/projects/Initial Coin.png'
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
            projectUrl='/property'
            tech='Next JS, React Js, Hardhat, Solidity'
          />
          <ProjectItem
            title='NFT Collection'
            backgroundImg={NFTCollection}
            projectUrl='/crypto'
            tech='Next JS, React Js, Hardhat, Solidity'

          />
          <ProjectItem
            title='Initial Coin Offering (ICO)'
            backgroundImg={InitialCoin}
            projectUrl='/netflix'
            tech='Next JS, React Js, Hardhat, Solidity'

          />
          <ProjectItem
            title='Decentralized Exchange'
            backgroundImg={dExchange}
            projectUrl='/twitch'
            tech='Next JS, React Js, Hardhat, Solidity'

          />
          <ProjectItem
            title='DAO for NFT holders'
            backgroundImg={DAO}
            projectUrl='/twitch'
            tech='Next JS, React Js, Hardhat, Solidity'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;