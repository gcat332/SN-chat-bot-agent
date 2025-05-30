import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	const toggleModal = () => {
		updateState({ showModal: !state.showModal });
	};

	return (
		<div>
			<div id="sn-chat-icon" title="Open Chat" onclick={toggleModal}>
				💬
			</div>

			{state.showModal && (
				<div id="sn-chat-modal">
					<div className="sn-close-btn" onclick={toggleModal}>
						✖
					</div>
					<iframe src="/chat_ui.do" title="Chat UI" />
				</div>
			)}
		</div>
	);
};

createCustomElement("mfec3-sn-chat-icon", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		showModal: false,
	},
	styles,
	connectedCallback(element, stateManager) {
		const onKeyDown = (e) => {
			if (e.key === "Escape" || e.key === "Esc") {
				stateManager.updateState({ showModal: false });
			}
		};

		// Attach to document keydown
		document.addEventListener("keydown", onKeyDown);

		// Save listener ref so we can remove it later
		element._onKeyDown = onKeyDown;
	},

	disconnectedCallback(element) {
		if (element._onKeyDown) {
			document.removeEventListener("keydown", element._onKeyDown);
		}
	},
});
