# Today's Goal
Today's session will focus on implementing actual game interactions
- Prepare the target data — plan how to store each character's coordinates for each difficulty.
- Capture image clicks — learn how to obtain the player's click position.
- Connect child to parent — pass a callback from GameScreen to GameScene.
- Validate selections — determine whether a click correctly identifies a character.
- Update the target list — add correctly identified characters to found and display their checkmarks.

## Tasks

1. Plan for click interaction (basic flow)
- Player clicks the image.
- GameScene captures clicks
- Callback prop passes the click information to GameScreen
- GameScreen validates the click
- Checks the target location and updates found
- TargetList updates — Displays which characters have been found

2. First test out click event functionality
- [x] Pass onSceneClick to GameScene
- [x] Create handleClick function
- [x] For now the function logs the click event
- [x] Pass handleClick as a prop to GameScene
- [x] Then test if it works


3. coordination normalization for target data
- [x] Get the image demension set it to rect
- [x] Using rect find the top, left, width, and height of the image
- [x] Next normalize x by (event.clientX - rect.left) / rect.width
- [x] Next normalize y by (event.clientX - rect.top) / rect.height
- [x] Test to see if it works
- [x] Then find the coordinates of all easy targets for now.

4. Implement target validation
- [x] Receive the click coordinates from GameScene.
- [x] Loop through the targets for the selected difficulty.
- [x] Compare the click coordinates against each target's saved coordinates.
- [x] Check whether the click falls within an acceptable tolerance.
- [x] If a target matches and hasn't already been found, add its ID to found, and log found
















