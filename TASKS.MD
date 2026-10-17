# Today's Goal
Today I will be refactoring my GameScreen function. I will be moving and splitting up its functionality into multiple components.

## Tasks

1. Implementing GameHeader
- [x] Create GameHeader.jsx 
- [x] Make it a default-exported React component
- [x] Pass the selected difficulty into it through props.
- [x] Preserve the existing markup and dynamic difficulty label.
- [x] Import and render GameHeader inside GameScreen, replacing the original header markup.

2. Implementing GameScene
- [x] Create GameScene.jsx 
- [x] Make it a default-exported React component.
- [x] Pass the selected difficulty into it through props.
- [x] Preserve the existing markup.
- [x] Import and render GameScene inside GameScreen, replacing the original header markup.

3. Implementing a target list beside game screen
- [x] Create TargetList.jsx
- [x] Past In Targets via props from GameScreen or imports (how to format my targets for easy, medium, and hard).
- [x] Render a heading such as "Find these characters" and a list of target characters.
- [x] Keep the character data separate from the JSX if that fits your existing project structure.
- [x] Render TargetList inside GameScreen, alongside GameHeader and GameScene.