const prefixImage = '/images'
export type NewContent = {
  id:number
  title:string
  description:string
  srcHeader:string
  srcContent:string[]
}

export const content:NewContent[] = [
  {
    id: 1,
    srcHeader: `${prefixImage}/MenuDuckWithLetter-1.png`,
    title: `2022.06.10 (Fri)`,
    srcContent: [`${prefixImage}/S__23846944.jpg`,`${prefixImage}/S__23846946.jpg`],
    description: `ワラガモ7年誕生祭BAKIBAKIさんによるライブペインティングインを1 F の壁にて行います！こにらはYouTube とインスタライブ配信も行います。`,
  },
  {
    id: 2,
    srcHeader: `${prefixImage}/MenuDuckWithLetter-1.png`,
    title: `最新情報　Coming Soon`,
    srcContent: [],
    description: ``,
  },
  {
    id: 3,
    srcHeader: `${prefixImage}/MenuDuckWithLetter-1.png`,
    title: `最新情報　Coming Soon`,
    srcContent: [],
    description: ``,
  }
]