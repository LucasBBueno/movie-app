import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import ResumeCard from '.'

export default {
  title: 'ResumeCard',
  component: ResumeCard,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof ResumeCard>

const resume =  {
  title: "Spider-Man: No Way Home",
  description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  year: "2014",
  type: "movie",
  genres: ['Action', 'Adventure', 'Fantasy'],
  poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  imdbrating: "81",
  director: "John Watts",
  released: "17 Dec 2021",
  duration: "148 min"
}

export const Default: ComponentStory<typeof ResumeCard> = () => <ResumeCard resume={resume} />