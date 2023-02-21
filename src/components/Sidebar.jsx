import React from 'react';
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
  MdExpandMore,
} from 'react-icons/md';
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb';
import { FaRegCompass } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { GiFilmStrip } from 'react-icons/gi';
import { AiOutlineFire } from 'react-icons/ai';
import { AiOutlineBulb } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTrophy } from 'react-icons/ai';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi';
import { BsBroadcast } from 'react-icons/bs';
import { RiNewspaperLine } from 'react-icons/ri';
import { GiHanger } from 'react-icons/gi';
import { SiYoutubestudio } from 'react-icons/si';
import { SiYoutubemusic } from 'react-icons/si';
import { TiSocialYoutube } from 'react-icons/ti';

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: 'Home',
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: 'Shorts',
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: 'Subscriptions',
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: 'Library',
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: 'History',
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: 'Your Videos',
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: 'Watch Later',
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: 'Liked Videos',
    },
    {
      icon: <MdExpandMore className="text-xl" />,
      name: 'Show more',
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: 'Music',
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: 'Sport',
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: 'Gaming',
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: 'Films',
    },
    {
      icon: <MdExpandMore className="text-xl" />,
      name: 'Show 250 more',
    },
  ];

  const explore = [
    {
      icon: <AiOutlineFire className="text-xl" />,
      name: 'Trending',
    },
    {
      icon: <RiShoppingBag3Fill className="text-xl" />,
      name: 'Shopping',
    },
    {
      icon: <TbMusic className="text-xl" />,
      name: 'Music',
    },
    {
      icon: <BiMoviePlay className="text-xl" />,
      name: 'Movies',
    },
    {
      icon: <BsBroadcast className="text-xl" />,
      name: 'Live',
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: 'Gaming',
    },
    {
      icon: <RiNewspaperLine className="text-xl" />,
      name: 'News',
    },
    {
      icon: <AiOutlineTrophy className="text-xl" />,
      name: 'Sports',
    },
    {
      icon: <AiOutlineBulb className="text-xl" />,
      name: 'Learning',
    },
    {
      icon: <GiHanger className="text-xl" />,
      name: 'Fashion & Beauty',
    },
  ];

  const moreFromYouTube = [
    {
      icon: <AiFillYoutube className="text-xl" />,
      name: 'YouTube Premium',
    },
    {
      icon: <SiYoutubestudio className="text-xl" />,
      name: 'Creator Studio',
    },
    {
      icon: <SiYoutubemusic className="text-xl" />,
      name: 'YouTube Music',
    },
    {
      icon: <FaYoutube className="text-xl" />,
      name: 'YouTube Kids',
    },
    {
      icon: <TiSocialYoutube className="text-xl" />,
      name: 'YouTube TV',
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: 'Settings',
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: 'Report history',
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: 'Help',
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: 'Send feedback',
    },
  ];

  const textLinks = [
    [
      'About',
      'Press',
      'Copyright',
      'Contact us',
      'Creators',
      'Advertise',
      'Developers',
    ],
    [
      'Terms',
      'Privacy',
      'Policy & Safety',
      'How YouTube works',
      'Test new features',
    ],
  ];

  return (
    <div className="w-2/12 bg-[#0F0F0F] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-[#3F3F3F] pl-2">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#3F3F3F] rounded-xl ${
                name === 'Home' ? 'bg-[#3F3F3F] rounded-xl' : ''
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-[#3F3F3F] pl-2">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#3F3F3F] rounded-xl ${
                name === 'Home' ? 'bg-[#3F3F3F] rounded-xl' : ''
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-[#3F3F3F] pl-2">
        <li className="pl-6 pt-3">Subscriptions</li>
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#3F3F3F] rounded-xl ${
                name === 'Home' ? 'bg-[#3F3F3F] rounded-xl' : ''
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-[#3F3F3F] pl-2">
        <li className="pl-6 pt-3">Explore</li>
        {explore.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#3F3F3F] rounded-xl ${
                name === 'Home' ? 'bg-[#3F3F3F] rounded-xl' : ''
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-[#3F3F3F] pl-2">
        <li className="pl-6 pt-3">More from YouTube</li>
        {moreFromYouTube.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#3F3F3F] rounded-xl ${
                name === 'Home' ? 'bg-[#3F3F3F] rounded-xl' : ''
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-[#3F3F3F] pl-2">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#3F3F3F] rounded-xl ${
                name === 'Home' ? 'bg-[#3F3F3F] rounded-xl' : ''
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">
        &copy; 2023 Rajnish Kumar Pandey
      </span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for learning purpose only
      </p>
    </div>
  );
};

export default Sidebar;
