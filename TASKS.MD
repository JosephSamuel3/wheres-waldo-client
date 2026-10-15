# Today's Goal
Make the application transition from the Main Menu to the Game Screen
when the player clicks Start.

Keep this session focused on the screen transition and the minimum
structure needed to make it work. We do not need to build the full
Where's Waldo gameplay yet.

## Tasks
1. Review the Current App Structure
- [x] Review App.jsx (or the component that currently renders
  MainMenu).
- [x] Identify where the selected difficulty is stored.
- [x] Trace what currently happens when the player clicks Start.

2. Decide How the Screen Is Controlled
- [x] Choose a simple way to track which screen should be displayed,
  such as an activeScreen state in App.
- [x] Decide how the Start action will tell the parent component to
  switch screens.
- [x] Keep the solution simple; do not introduce routing unless the
  current project structure requires it.

3. Implement the Menu-to-Game Transition
- [x] Pass a callback from the parent component to MainMenu.
- [x] Call that callback when the player clicks Start.
- [x] Store the selected difficulty when starting the game, so the
  game screen knows which difficulty was chosen.
- [x] Render the Game Screen instead of the Main Menu after starting.

4. Create a Minimal Game Screen
- [x] Create a GameScreen component if one does not already exist.
- [x] Display a clear heading or placeholder that confirms the game
  screen is active.
- [x] Display the selected difficulty to verify that the selection was
  carried over correctly.
- [x] Avoid implementing image-click detection, timers, target
  tracking, or win conditions in this session.

5. Test the Transition
- [x] The app initially displays the Main Menu.
- [x] Changing the difficulty updates the selected option and preview.
- [x] Clicking Start switches to the Game Screen.
- [x] The Game Screen displays the difficulty that was selected.
- [x] No console errors appear during the transition.
