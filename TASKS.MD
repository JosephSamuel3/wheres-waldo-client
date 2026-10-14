# Where's Waldo — Main Menu Implementation Plan

## Goal

Build the first version of the main menu using React. Players should be able to select a difficulty, preview the associated image, and start a game.

## 1. Tasks for This Session

- [x] Create a `MainMenu` component.
- [x] Display the game title and a short instruction.
- [x] Add three difficulty options: Easy, Medium, and Hard.
- [x] Associate one image with each difficulty.
- [x] Allow the player to select a difficulty.
- [x] Visually indicate the selected difficulty.
- [x] Display a preview of the selected image.
- [x] Add a Start button.
- [x] Verify that the layout works in the browser.

## 2. Component Responsibilities

### `App`

- Initially render `MainMenu`.
- Later, manage the transition between the main menu and `GameScreen`.
- Keep application-level responsibilities separate from menu-specific logic.

### `MainMenu`

- Display the title, instructions, difficulty options, image preview, and Start button.
- Track the selected difficulty using React state.
- Update the selected styling and image preview when the difficulty changes.
- Handle the Start button interaction.

### Difficulty Data

Keep the difficulty configuration organized. If separating it into a data file improves readability, create `src/data/difficulties.js`.

Each difficulty should eventually contain:
- A stable ID.
- A display name.
- An image source.
- A reference to its game configuration or targets.

## 3. Proposed User Flow

1. The player opens the application.
2. The main menu appears.
3. Easy is selected by default.
4. The player chooses Easy, Medium, or Hard.
5. The selected difficulty is visually highlighted.
6. The corresponding image preview updates.
7. The player clicks Start.
8. The application will eventually transition to `GameScreen`.

## 4. State and Interaction Decisions

- [x] Store the selected difficulty in React state.
- [x] Use stable IDs such as `"easy"`, `"medium"`, and `"hard"`.
- [x] Changing difficulty must not start the game.
- [x] The timer will begin only when the game actually starts.
- [x] If `GameScreen` is not implemented yet, make the Start button's temporary behavior clear rather than pretending a game has started.

## 5. Layout and Accessibility

- [x] Make the game title prominent.
- [x] Make difficulty options easy to distinguish.
- [x] Clearly indicate the selected difficulty.
- [x] Ensure the image preview corresponds to the selected difficulty.
- [x] Make the Start button easy to find.
- [x] Ensure the layout works on narrower screens.
- [x] Use semantic HTML and accessible labels.
- [x] Provide meaningful alternative text for images.

## 6. Out of Scope

Do not implement these features during this session:

- Login or sign-up.
- Multiple images per difficulty.
- Game timer.
- Character detection or click validation.
- Victory screen.
- High scores or leaderboard.
- Backend or database.

## 7. Completion Criteria

- [x] `MainMenu` renders without errors.
- [x] All three difficulty options work.
- [x] Selecting a difficulty updates the selection styling and image preview.
- [x] The Start button is present and its current behavior is clear.
- [x] The application runs locally without errors.
- [x] Changes are committed to Git.

## 8. Decisions to Make During Implementation

- [x] Choose images suitable for a public portfolio project and verify their usage rights.
- [x] Decide whether difficulty options should be buttons, radio inputs, or selectable cards.
- [x] Decide whether the image preview should be a thumbnail or a larger preview card.

## Session Notes

Build incrementally:
1. Create the static layout.
2. Verify the layout in the browser.
3. Add difficulty-selection state.
4. Connect the selected difficulty to the image preview.
5. Add the Start button.
6. Test the interactions and commit the work.

Keep the implementation simple. Avoid introducing routing, authentication, backend infrastructure, or game mechanics before the main menu works.