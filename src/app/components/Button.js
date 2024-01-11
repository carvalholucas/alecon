import { ArrowRight } from 'lucide-react';

const Button = ({ children, color = "primary", icon, className}) => {
  const getIcon = (icon) => {
    const icons = {
      // right: <BsArrowRightShort className={`${color === "primary" ? 'fill-white' : 'fill-yellow-900'} ml-3`} size="1.6rem" />
      right: <ArrowRight color="black" size={20} className="ml-8" />
    }
    return icons[icon]
  }

  const getColor = (color) => {
    const colors = {
      primary: 'text-black bg-yellow-900',
      secondary: 'text-yellow-900 bg-white'
    }
    return colors[color]
  }

	return (
		<button className={`${className} ${getColor(color)} px-5 py-3 rounded-md flex items-center text-lg`}>
			{children}
      {getIcon(icon)}
		</button>
	);
};
 
export default Button;
