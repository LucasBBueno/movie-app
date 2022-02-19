import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import PhotoPlaceholder from '../../../../assets/photo-placeholder.png'

import Actors from '.'

export default {
  title: 'Actors',
  component: Actors,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Actors>

const actors = [
  {
    name: 'Tom Holland',
    image: PhotoPlaceholder
  },
  {
    name: 'Zendaya',
    image: PhotoPlaceholder
  },
  {
    name: 'Jacob Batalon',
    image: PhotoPlaceholder
  }
]

export const Default: ComponentStory<typeof Actors> = () => <Actors actors={actors} />