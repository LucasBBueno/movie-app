import React from 'react'

import * as S from './styles'

type ActorProps = {
  actors: {
    name: string
    image: string
  }[]
}

const Actors = ({ 
  actors 
}: ActorProps) => {
  return (
    <S.Wrapper>
      <S.Title>
        Actors
      </S.Title>
      <S.Content>
        {actors.map(actor => (
          <S.Actor key={actor.name}>
            <img
              src={actor.image}
              alt={actor.name}
            />
            <span>
              {actor.name}
            </span>
          </S.Actor>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default Actors