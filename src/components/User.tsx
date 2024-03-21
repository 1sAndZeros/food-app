'use client'
import Avatar from "./Avatar";
import { useSession } from 'next-auth/react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    & p {
        text-transform: uppercase;
        font-size: .7rem;
    }
`

export default function User() {
    const { data: session } = useSession();
    if (!session) {
        return
    }
    return (
        <StyledDiv>
            <p>{session?.user?.name}</p>
            <Avatar size='small'  />
        </StyledDiv>
    )
}