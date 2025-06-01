import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	const scrollingIframe = () => {
		const iframes = findAllElementsDeep(document, "#sn-chat-iframe");
		if (iframes.length === 0) return;
		const iframe = iframes[iframes.length - 1]; // 🧠 หยิบตัวท้ายสุด
		const tryScroll = setInterval(() => {
			try {
				const doc = iframe.contentWindow?.document;
				if (!doc || doc.readyState !== "complete") return;
				const chatbox = doc.querySelector("#chatbox");
				if (chatbox && chatbox.scrollHeight > 0) {
					chatbox.scrollTop = chatbox.scrollHeight;
					updateState({ scrolled: true });
					clearInterval(tryScroll);
				}
			} catch (e) {
				console.warn(`⚠️ ${e.message}`);
				clearInterval(tryScroll);
			}
		}, 200);
	};

	const findAllElementsDeep = (
		root = document,
		selector = "#sn-chat-iframe",
	) => {
		if (!root) return [];
		let found = Array.from(root.querySelectorAll(selector));
		let allElements = root.querySelectorAll("*");
		for (const el of allElements) {
			if (el.shadowRoot) {
				found.push(...findAllElementsDeep(el.shadowRoot, selector));
			}
		}
		return found;
	};

	const toggleModal = () => {
		updateState({ showModal: !state.showModal });
		if (!state.scrolled) scrollingIframe();
	};

	window.addEventListener("keydown", (event) => {
		if (event.shiftKey && event.key.toLowerCase() === "c") {
			updateState({ showModal: !state.showModal });
		}

		if (event.key === "Escape") {
			updateState({ showModal: false });
		}
	});

	return (
		<div>
			<div
				tabIndex={-1}
				id="sn-chat-icon"
				title="Chat AI Agent (Shift+C)"
				onclick={toggleModal}
			>
				💬
			</div>

			<div
				id="sn-chat-modal"
				className={state.showModal ? "visible" : "hidden"}
			>
				<iframe
					id="sn-chat-iframe"
					src="/chat_ui.do"
					title="Chat AI Agent"
					scrolling="no"
				/>
			</div>
		</div>
	);
};

createCustomElement("mfec3-sn-chat-icon", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		showModal: false,
		scrolled: false,
	},
	styles,
});
