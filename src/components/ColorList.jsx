import ColorCard from "./ColorCard";
import { nanoid } from "nanoid";

const ColorsContainer = ({ colors }) => {
  return (
    <div id="color-list">
      {
        colors.map((color, index) => <ColorCard key={nanoid()} index={index} color={color} />)
      }
    </div>
  )
}
export default ColorsContainer;