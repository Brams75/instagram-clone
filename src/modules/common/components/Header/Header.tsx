import {
  HomeIcon,
  HomeOutlinedIcon,
  InboxOutlinedIcon,
  InboxIcon,
  AddBoxOutlinedIcon,
  AddBoxIcon,
  ExploreOutlinedIcon,
  ExploreIcon,
  FavoriteIcon,
  FavoriteBorderOutlinedIcon,
  AccountCircleIcon,
  CancelIcon,
  SearchIcon,
} from 'src/modules/common/components';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Container from './styles';
import Links from './Links';

const firstTwoLinks = [
  {
    IconOutlined: HomeOutlinedIcon,
    IconFilled: HomeIcon,
    link: '/',
    opacity: true,
  },
  {
    IconOutlined: InboxOutlinedIcon,
    IconFilled: InboxIcon,
    link: '/direct/inbox',
    opacity: true,
  },
];

const exploreLink = [
  {
    IconOutlined: ExploreOutlinedIcon,
    IconFilled: ExploreIcon,
    link: '/explore',
    opacity: true,
  },
];

export default function Header() {
  const { asPath } = useRouter();
  const [title, setTitle] = useState('');
  const [favoriteIsClicked, setFavoriteIsClicked] = useState(false);
  const [addIsClicked, setAddIsClicked] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);

  useEffect(() => {
    if (asPath === '/direct/inbox') {
      setTitle('Boîte de réception • Direct');
    }
    setTitle('Instagram');
    setFavoriteIsClicked(false);
    setAddIsClicked(false);
  }, [asPath]);

  function renderIcon({ component = '' }) {
    if (component === 'favorite') {
      return favoriteIsClicked ? (
        <FavoriteIcon
          className="icon"
          onClick={() => {
            setFavoriteIsClicked(false);
          }}
        />
      ) : (
        <FavoriteBorderOutlinedIcon
          className="icon"
          onClick={() => {
            setFavoriteIsClicked(true);
            setAddIsClicked(false);
          }}
        />
      );
    }
    return addIsClicked ? (
      <AddBoxIcon className="icon" />
    ) : (
      <AddBoxOutlinedIcon
        className="icon"
        onClick={() => {
          setAddIsClicked(true);
          setFavoriteIsClicked(false);
        }}
      />
    );
  }
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="sub-container">
        <div className="logo">
          <Link href="/" passHref>
            <a href="replace">
              <Image
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram"
                width={103}
                height={29}
              />
            </a>
          </Link>
        </div>
        <div className="search-container">
          {!isOnFocus ? <SearchIcon className="search-icon" /> : null}
          <input
            placeholder="Rechercher"
            onFocus={() => {
              setIsOnFocus(true);
            }}
            onBlur={() => {
              setIsOnFocus(false);
            }}
          />
          {isOnFocus ? <CancelIcon className="cancel-icon" /> : null}
        </div>
        <div className="icons">
          <Links links={firstTwoLinks} asPath={asPath} />
          {renderIcon({ component: '' })}
          <Links links={exploreLink} asPath={asPath} />
          {renderIcon({ component: 'favorite' })}
          <AccountCircleIcon className="icon" />
        </div>
      </div>
    </Container>
  );
}
