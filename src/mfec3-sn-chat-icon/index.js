import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	const toggleModal = () => {
		updateState({ showModal: !state.showModal });
	};

	return (
		<div>
			<div
				id="sn-chat-icon"
				title="Chat AI Agent (Shift+C)"
				onclick={toggleModal}
			>
				💬
			</div>

			{state.showModal && (
				<div id="sn-chat-modal">
					<iframe src="/chat_ui.do" title="Chat AI Agent" scrolling="no" />
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
});
