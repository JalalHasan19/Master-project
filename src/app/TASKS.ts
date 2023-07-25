export interface itemInterface {
  id?: number,
  text: string,
  day: string,
  reminder: boolean,
}

export const Items: itemInterface[] = [
  {
    id: 1,
    text: 'This is an Item',
    day: '27th July, 2023',
    reminder: true
  },
  {
    id: 2,
    text: 'This is an Item',
    day: '27th August, 2023',
    reminder: false
  },
  {
    id: 3,
    text: 'This is an Item',
    day: '27th May, 2023',
    reminder: true
  },
  {
    id: 4,
    text: 'This is an Item',
    day: '27th September, 2023',
    reminder: true
  },
]
