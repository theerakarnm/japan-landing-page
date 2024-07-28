// const prefixImage = '/images'
const prefixImage = 'https://waragamo.eukron.com';
export type NewContent = {
  id: number
  title: string
  description: string
  srcHeader: string
  srcContent: string[]
  linkTo?: string
}

export const content: NewContent[] = [
  {
    id: 1,
    srcHeader: `${prefixImage}/MenuDuckWithLetter-1.png`,
    title: `最新情報`,
    srcContent: [`${prefixImage}/S__23846944.jpg`, `${prefixImage}/S__23846946.jpg`],
    description: `最新情報はインスタグラムで随時更新中`,
    linkTo: 'https://www.instagram.com/waragamo/'
  },
]