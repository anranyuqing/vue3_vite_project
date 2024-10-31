<!--
* @Author lixw
* @Date 2024-10-30 10:54:28
* @Description 
-->
<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'

interface Song {
  no: number
  title: string
  length: string
}

function createColumns({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> {
  return [
    {
      title: 'No',
      key: 'no',
      width:100
    },
    {
      title: 'Title',
      key: 'title',
      width:100
    },
    {
      title: 'Length',
      key: 'length',
      width:100
    },
    {
      title: 'Action',
      key: 'actions',
      width:100,
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonder', length: '4:18' },
  { no: 4, title: 'Don\'t ', length: '4:48' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },
  { no: 12, title: 'Champagn ', length: '7:27' },

]

export default defineComponent({
  setup() {
    const message = useMessage()
    return {
      data,
      columns: createColumns({
        play(row: Song) {
          message.info(`Play ${row.title}`)
        }
      }),
      pagination: false as const
    }
  }
})
</script>