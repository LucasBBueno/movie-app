import React from 'react'

import { ComponentStory, ComponentMeta} from '@storybook/react'

import SearchArea from '.'

export default {
  title: 'SearchArea',
  component: SearchArea,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SearchArea>

export const Default: ComponentStory<typeof SearchArea> = () => <SearchArea onSearch={() => null} />