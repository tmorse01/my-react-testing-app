import { useState } from "react";
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";
import { Input } from "./components/input/Input";
import { Modal } from "./components/modal/Modal";
import { Dropdown } from "./components/dropdown/Dropdown";
import "./App.css";

function App() {
  // State for modal component
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<"small" | "medium" | "large">(
    "medium"
  );

  // State for dropdown component
  const [dropdownValue, setDropdownValue] = useState("");

  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Component Gallery</h1>
        <p>A showcase of reusable React components</p>
      </header>

      <section className="component-section">
        <h2>Button Component</h2>
        <div className="component-demo">
          <div className="component-item">
            <h3>Primary Button</h3>
            <Button label="Primary Button" variant="primary" />
          </div>
          <div className="component-item">
            <h3>Secondary Button</h3>
            <Button label="Secondary Button" variant="secondary" />
          </div>
          <div className="component-item">
            <h3>Danger Button</h3>
            <Button label="Danger Button" variant="danger" />
          </div>
          <div className="component-item">
            <h3>Disabled Button</h3>
            <Button label="Disabled Button" disabled={true} />
          </div>
          <div className="component-item">
            <h3>Small Button</h3>
            <Button label="Small Button" size="small" />
          </div>
          <div className="component-item">
            <h3>Large Button</h3>
            <Button label="Large Button" size="large" />
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2>Card Component</h2>
        <div className="component-demo">
          <div className="component-item">
            <h3>Basic Card</h3>
            <Card title="Card Title" />
          </div>
          <div className="component-item">
            <h3>Card with Description</h3>
            <Card
              title="Card with Description"
              description="This is a description for the card component. It can contain any text content."
            />
          </div>
          <div className="component-item">
            <h3>Interactive Card</h3>
            <Card
              title="Interactive Card"
              description="Click me to trigger the onClick handler."
              onClick={() => alert("Card clicked!")}
            />
          </div>
          <div className="component-item">
            <h3>Custom Styled Card</h3>
            <Card
              title="Custom Styled Card"
              description="This card has custom styling applied."
              className="custom-card"
            />
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2>Input Component</h2>
        <div className="component-demo">
          <div className="component-item">
            <h3>Basic Input</h3>
            <Input placeholder="Type something..." />
          </div>
          <div className="component-item">
            <h3>Input with Label</h3>
            <Input label="Username" placeholder="Enter username" />
          </div>
          <div className="component-item">
            <h3>Disabled Input</h3>
            <Input
              label="Disabled Input"
              value="Cannot edit this"
              disabled={true}
            />
          </div>
          <div className="component-item">
            <h3>Input with Error</h3>
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              error="Password must be at least 8 characters"
            />
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2>Modal Component</h2>
        <div className="component-demo">
          <div className="component-row">
            <Button
              label="Open Small Modal"
              onClick={() => {
                setModalSize("small");
                setIsModalOpen(true);
              }}
            />
            <Button
              label="Open Medium Modal"
              variant="secondary"
              onClick={() => {
                setModalSize("medium");
                setIsModalOpen(true);
              }}
            />
            <Button
              label="Open Large Modal"
              size="large"
              onClick={() => {
                setModalSize("large");
                setIsModalOpen(true);
              }}
            />
          </div>

          <Modal
            isOpen={isModalOpen}
            title={`${
              modalSize.charAt(0).toUpperCase() + modalSize.slice(1)
            } Modal Example`}
            onClose={() => setIsModalOpen(false)}
            size={modalSize}
          >
            <div className="modal-content-demo">
              <p>This is an example of a {modalSize} modal dialog.</p>
              <p>You can close this modal by:</p>
              <ul>
                <li>Clicking the X button</li>
                <li>Clicking outside the modal</li>
                <li>Pressing the ESC key</li>
              </ul>
              <Button
                label="Close Modal"
                variant="primary"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </Modal>
        </div>
      </section>

      <section className="component-section">
        <h2>Dropdown Component</h2>
        <div className="component-demo">
          <div className="component-item">
            <h3>Basic Dropdown</h3>
            <Dropdown
              options={dropdownOptions}
              value={dropdownValue}
              onChange={setDropdownValue}
              placeholder="Select an option"
            />
            {dropdownValue && <p>Selected value: {dropdownValue}</p>}
          </div>
          <div className="component-item">
            <h3>Dropdown with Label</h3>
            <Dropdown
              label="Select an item"
              options={dropdownOptions}
              value={dropdownValue}
              onChange={setDropdownValue}
            />
          </div>
          <div className="component-item">
            <h3>Disabled Dropdown</h3>
            <Dropdown
              options={dropdownOptions}
              value={dropdownValue}
              onChange={setDropdownValue}
              disabled={true}
              placeholder="Cannot select"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
