import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import MovieCard from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof MovieCard>

const movie =  {
  title: "The Lego Movie",
  year: "2014",
  id: "tt1490017",
  type: "movie",
  poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
}

export const Default: ComponentStory<typeof MovieCard> = () => <MovieCard movie={movie} onGetMoreInfo={() => null} />