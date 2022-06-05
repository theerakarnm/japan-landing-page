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
    title: `What new header`,
    srcContent: [`${prefixImage}/something`],
    description: `loremp ipsum dolor sit amet, consectetur adipiscing elit1.`,
  },
  {
    id: 2,
    srcHeader: `${prefixImage}/MenuDuckWithLetter-1.png`,
    title: `Test Test TEs`,
    srcContent: [`${prefixImage}/something`],
    description: `loremp ipsum dolor sit amet, consectetur adipiscing elit2.`,
  },
  {
    id: 3,
    srcHeader: `${prefixImage}/MenuDuckWithLetter-1.png`,
    title: `Section 3 What new Title`,
    srcContent: [`${prefixImage}/something`],
    description: `loremp ipsum dolor sit amet, consectetur adipiscing elit3.`,
  }
]