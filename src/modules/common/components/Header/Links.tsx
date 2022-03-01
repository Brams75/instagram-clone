import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Link from 'next/link';

interface LinkProps {
  IconOutlined: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  IconFilled: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  link: string;
  opacity: boolean;
}

interface LinksProps {
  links: LinkProps[];
  asPath: string;
}

export default function Links({ links, asPath }: LinksProps) {
  return (
    <>
      {links.map(({
        IconOutlined, IconFilled, link, opacity,
      }) => (
        <Link href={link} passHref>
          <a href="replace" className={opacity ? 'opacity icon' : 'icon'}>
            {link !== asPath ? <IconOutlined /> : <IconFilled />}
          </a>
        </Link>
      ))}
    </>
  );
}
