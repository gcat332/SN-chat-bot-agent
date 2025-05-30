# 🧩 sn-chat-icon

> 💬 Add a chat icon to Workspace UI that opens a custom chat interface inside an iframe.

---

## 🚀 Overview

`sn-chat-icon` is a custom UI component designed for **ServiceNow Workspace (Next Experience UI)**, specifically tested on **Yokohama** version.

It injects a floating chat icon on the bottom-right corner of the screen, which, when clicked, opens a styled modal containing an iframe that loads a custom `UI Page` (typically a chat app or virtual agent interface).

---

## 📦 Requirements

- **ServiceNow CLI (SNC CLI)**
- **UI Component Extension**  
  _Install via:_

  ```bash
  snc extension add ui-component
  ```

- **A working ServiceNow instance**
- **Now Experience Framework (Yokohama-compatible)**

---

## 🧱 Module Contents

| File / Folder         | Description                                |
|-----------------------|--------------------------------------------|
| `index.js`            | Main UI component logic                    |
| `styles.scss`         | Styles for icon & modal                    |
| `now-ui.json`         | UI Builder metadata                        |
| `README.md`           | You’re reading it right now 😸             |

---

## 🧠 Related Application Components

These are **not included** in the `main` branch.  
👉 Please **switch to the `demo2` branch** and **import them using ServiceNow Studio**:

- 🧾 `UI Page` – e.g., `chat_ui.do`
- 📜 `UI Script` – frontend utility for chat behaviors (optional)
- 🔧 `Script Include` – backend logic for chat system (optional)

> **Note:** These are required for the iframe to function correctly.

---

## 🛠 How to Deploy

1. **Clone this repo**

   ```bash
   git clone https://github.com/your-org/sn-chat-icon.git
   cd sn-chat-icon
   ```

2. **Deploy using SNC CLI**

   ```bash
   snc deploy
   ```

3. ✅ Done! Open your Workspace UI and test the icon.

---

## 🔐 Application Scope

- **Scope Name**: `x_mfec3_mfec_ai_0`
- **Component Tag**: `mfec3-sn-chat-icon`
- **Supported Types**: `global.core`, `global.landing-page`

---

## 📸 Preview

_(Add screenshots or a demo GIF here to show what the chat icon looks like and how it works!)_

---

## ✨ Features

- Floating chat icon at bottom-right
- Styled modal iframe popup
- Responsive design for mobile
- Close with ❌ button or `ESC` key
- Auto-scroll iframe chat to bottom
- Avoids duplicate injection
- Only displays in **Next Experience UI (Polaris)** and when the UI Menu bar is present

---

## 🐞 Known Limitations

- Not automatically included in Update Sets — make sure to track component files manually.
- May require **git-based deployment** for full control.
- Does not work in UI16 or non-Polaris experiences.

---

## 💬 Questions?

Ping **แมวไทย** 🐈 or open an issue on GitHub.  
PRs welcome, bugs feared, icons loved.

---
