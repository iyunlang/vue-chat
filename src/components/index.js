
import {IconSvg, IconFont} from './Icon'
import {ImgAvatar} from './Img'

const compList = [ 
  IconSvg,
  IconFont,
  ImgAvatar,
]

let registered = false

export function setupGlobalComponent(app) {

  if(registered) return
  compList.forEach((comp) => {
    app.component(comp.name, comp)
  })

}