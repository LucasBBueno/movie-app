import React from 'react'

import { ComponentStory, ComponentMeta} from '@storybook/react'

import Carousel from '.'

export default {
  title: 'Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Carousel>

export const Default: ComponentStory<typeof Carousel> = () => <Carousel onNavigate={() => null} />