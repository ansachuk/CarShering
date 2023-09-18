import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import Backdrop from "../Backdrop/Backdrop";
import BackdropCss from "../Backdrop/Backdrop.module.scss";
import css from "./Modal.module.scss";

export default function Modal({ car, closeModal }) {
	car;
	const handlerCloseModal = useCallback(
		e => {
			e.preventDefault();
			if (e.target.classList.contains(BackdropCss.backdrop) || e.code === "Escape") {
				closeModal();
			}
		},
		[closeModal],
	);

	useEffect(() => {
		const doc = document.documentElement;
		doc.classList.add("overflowHidden");

		window.addEventListener("click", handlerCloseModal);
		window.addEventListener("keydown", handlerCloseModal);
		return () => {
			doc.classList.remove("overflowHidden");
			window.removeEventListener("click", handlerCloseModal);
			window.removeEventListener("keydown", handlerCloseModal);
		};
	}, [handlerCloseModal]);

	return (
		<Backdrop>
			<div className={css.modal}>
				Modal
				<button onClick={closeModal}>close</button>
			</div>
		</Backdrop>
	);
}

Modal.propTypes = {
	car: PropTypes.object.isRequired,
	closeModal: PropTypes.func,
};
