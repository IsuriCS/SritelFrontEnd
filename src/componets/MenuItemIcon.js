export default function MenuItemIcon(props) {
	var Icon = props.icon;
	Icon.props.sx.fill = props.color;
	return Icon;
}
