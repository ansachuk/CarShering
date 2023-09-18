import css from "./Backdrop.module.scss";
import PropTypes from "prop-types";

export default function Backdrop({ children }) {
	return <div className={css.backdrop}>{children}</div>;
}

Backdrop.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
