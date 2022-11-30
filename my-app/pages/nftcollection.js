import Image from 'next/image';
import React from 'react';
import NFTCollectionImg from '../public/assets/projects/NFT Collection.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const NFTCollection = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={NFTCollectionImg}
            alt='/'
          />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>NFT Collection App</h2>
          <h3>Next JS / React Js / Hardhat / Solidity</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <div>
            <p>Build an NFT Collection</p>
            <p>NFTs are examples of Non-Fungible Tokens where each token is different from a different token.</p>
            <ul>
              <li>There are 20 Binna Dev NFTs, and each one of them is unique.</li>
              <li>Users are only allowed to create one NFT per transaction.</li>
              <li> Whitelisted users have a 5-minute presale period before the actual sale, where they are guaranteed 1 NFT per transaction.</li>
              <li>There is a website for interacting with the contract.</li>
            </ul>
            <p> Contract Address: 0xF39897B8C16ca2FB10D3b80e87b674eE341deB83</p>
          </div>
          <Link
            href='https://github.com/obinnafranklinduru/NFT-Collection'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
          <Link
            href='https://nft-collection-tau-three.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </Link>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Js 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hardhat
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Solidity
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default NFTCollection;