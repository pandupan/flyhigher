import { ReactNode } from "react"
import { HeadMeta } from "../meta/HeadMeta"

export const BlankLayout: React.FC<{ children?: ReactNode }> = ({
  children
}) => {
  return (
    <div>
      <HeadMeta
        title="The page you were looking for doesn't exist (404)"
        desc=""        
      />
      
      {children}
    </div>
  )
}