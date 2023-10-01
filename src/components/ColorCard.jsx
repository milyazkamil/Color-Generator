import { toast } from 'react-toastify';

const ColorCard = ({ index, color }) => {
  const { hex, weight } = color;

  const saveColor = async () => {
    // Check if the Clipboard API is available
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`#${hex} copied!😍`, {
          position: 'top-center',
          autoClose: 3000,
        });
      } catch (error) {
        toast.error(`Oops! Failed to copy color to clipboard`);
      }
    }
  };

  return (
    <article
      onClick={saveColor}
      className="color-card p-4 rounded"
      style={{ backgroundColor: `#${hex}` }}
    >
      <span
        className="d-block mb-2"
        style={{ color: `${index > 10 ? 'white' : 'black'}` }}
      >
        {weight}%
      </span>
      <h5 style={{ color: `${index > 10 ? 'white' : 'black'}` }}>#{hex}</h5>
    </article>
  )
}
export default ColorCard;
