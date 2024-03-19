'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

type Size = 'small' | 'medium' | 'large' | 'xlarge';

interface AvatarProps {
  size?: Size;
}

const sizes = {
  small: 50,
  medium: 75,
  large: 100,
  xlarge: 150,
};

const StyledImage = styled(Image)`
  border-radius: 999px;
  object-fit: cover;
`;

const Avatar = ({ size = 'medium' }: AvatarProps) => {
  const { data: session } = useSession();
  return (
    <StyledImage
      src={
        session?.user?.image ||
        `https://ui-avatars.com/api/?name=${session?.user?.name}`
      }
      alt='user image'
      width={sizes[size]}
      height={sizes[size]}
    />
  );
};

export default Avatar;
