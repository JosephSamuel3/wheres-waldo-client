# Today's Goal
The menu and basic screen transition are in place. My next focus is moving from a static game layout toward an interactive game. Today's goals are:
- Expand data/targets.js from simple character names into richer target objects.
- Introduce found-target state owned by GameScreen.
- Pass that state down to TargetList so found characters can be marked accordingly.

## Tasks

1. Expand data/targets.js 
- [x] Change targetest value from and array of strings to an array of object 
- [x] Make each object have an id and name (image, and coordinates will come later).

2. Update my TargetList.jsx to render targets
- [x] Use the character's ID as the React key 
- [x] Display the character's name

3. Implement found state management (GameScreen manages the found State of my game)
- [x] In GameScreen import useState and initialize found state variable to an empty array
- [x] Pass found as a prop to TargetList (this is for UI changes)
- [x] Inside .map() callback, check weather the current target's ID exists in found 
- [x] Implement the basic condition for checking if target is found (this is a place holder)

