# React Component Repo

This repo is intended to be used as a submodule of a main project repo. Currently it is included as a submodule of the bedtime-checklist-app repo, which is private.

This way, I can share my component learnings here publicly, while keeping my actual project repo private.

## Components

### Banner

A banner component that displays a message with an action button and an integrated dialog.

**Props:**

- `message` (string) - The message text to display in the banner

**Features:**

- Displays a customizable message
- Includes a ReactButton component with gradient styling
- Contains an integrated ReactDialog that can be triggered
- Dialog includes a close button and custom content area

**Usage:**

```jsx
import ReactBanner from "./banner/banner.js";

<ReactBanner message="Welcome to our site!" />;
```

**Example:**

```jsx
function App() {
  return <ReactBanner message="Special offer available now!" />;
}
```

### Button

A reusable button component with click state tracking and customizable styling.

**Props:**

- `customClass` (array, default: []) - Array of CSS class names to apply
- `onSelect` (function) - Callback function triggered on button click
- `children` (node) - Button content/text
- `...props` - Any additional HTML button attributes

**Features:**

- Tracks click state with `isClicked` boolean
- Applies 'clicked' class after first click
- Base classes: 'react-button', 'test-class'
- Spreads additional props to underlying button element

**Usage:**

```jsx
import ReactButton from "./button/button.js";

<ReactButton
  customClass={["btn", "btn-primary"]}
  onSelect={() => console.log("Clicked!")}
>
  Click Me
</ReactButton>;
```

### Dialog

A dialog (modal) component with an integrated button to open it.

**Props:**

- `children` (node) - Content to display inside the dialog
- `...props` - Any additional HTML dialog attributes (including id)

**Features:**

- Uses native HTML `<dialog>` element
- Includes a ReactButton to trigger dialog display
- Opens dialog using `showModal()` method
- Requires an `id` prop to function properly

**Usage:**

```jsx
import ReactDialog from "./dialog/dialog.js";

<ReactDialog id="my-dialog">
  <div
    className="close"
    onClick={() => document.getElementById("my-dialog").close()}
  >
    X
  </div>
  <h2>Dialog Title</h2>
  <p>Dialog content here</p>
</ReactDialog>;
```

### Nav

A responsive navigation bar with authentication state awareness.

**Props:**

- `customClass` (array, default: []) - Array of CSS class names to apply
- `items` (array, default: []) - Array of navigation items with `name` and `link` properties

**Features:**

- Checks localStorage for login state
- Conditionally renders Sign In/Sign Up or Sign Out links
- Responsive Bootstrap-based design with collapsible menu
- Includes search form
- Updates on component mount using useEffect

**Usage:**

```jsx
import ReactNav from "./nav/nav.js";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
];

<ReactNav customClass={["navbar", "navbar-expand-lg"]} items={navItems} />;
```

### Checklist List

A component that renders a list of checklists using ChecklistRow components.

**Props:**

- `customClass` (array) - Array of CSS class names to apply
- `checklists` (array) - Array of checklist objects with id, title, description, and items
- `children` (node) - Child content (not currently used in render)

**Features:**

- Maps through checklists array to render multiple ChecklistRow components
- Handles parsing of items whether they're arrays or JSON strings
- Automatically provides unique keys based on checklist.id

**Usage:**

```jsx
import ReactChecklistRowList from "./checklist-list/checklist-list.js";

const checklists = [
  {
    id: 1,
    title: "Morning Routine",
    description: "Tasks to do",
    items: ["Brush teeth", "Make bed"],
  },
];

<ReactChecklistRowList checklists={checklists} />;
```

### Checklist Row

A component that displays an individual checklist with delete and activate actions.

**Props:**

- `items` (array) - Array of checklist item strings
- `checklist` (object) - Checklist object with id, title, and description

**Features:**

- Toggles visibility with `isHidden` state
- Displays checklist title, description, and items list
- Includes Delete button that hides the row and calls handleDelete
- Includes Activate button that calls handleActivate
- Applies 'hidden' class when deleted

**Usage:**

```jsx
import ReactChecklistRow from "./checklist-row/checklist-row.js";

const checklist = { id: 1, title: "Bedtime", description: "Evening tasks" };
const items = ["Read book", "Brush teeth"];

<ReactChecklistRow checklist={checklist} items={items} />;
```
