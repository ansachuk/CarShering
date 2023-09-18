import PropTypes from "prop-types";

export default function Container({ children }) {
	return <div>{children}</div>;
}

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
