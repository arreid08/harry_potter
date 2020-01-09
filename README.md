# Harry Potter Zone

## Project Description

This website was built to be a place to learn all about Harry Potter.  You can learn about the key characters, the houses and common spells.  You can also try your hand at the sorting hat to see which house you would be place in if you were a wizard.

Check out the full website [here](https://laughing-spence-9236ca.netlify.com)

## Project Links

- [github repo](https://github.com/arreid08/harry_potter)

## Wireframes

- [Initial Wireframe](https://res.cloudinary.com/john-deere/image/upload/v1578321821/wireframe1_kifapa.jpg)
	- this is my initial thinking of how I want my page to work.
- [react architecture](https://res.cloudinary.com/john-deere/image/upload/v1578591005/React_Architecture_hgg5ln.png)

### MVP/PostMVP

#### MVP
- Find an external API for Harry Potter info.
- Develop an app that displays the info and can be interacted with.
- Create links to each category (characters, houses, spells)
- Show a sorting hat on the main page to use for sorting the user into a house.
- Create pages for each of the categories to display details on.
- Use the Harry Potter font on my page.

#### PostMVP EXAMPLE
- Find a second API with images for Harry Potter
- Add a place to save your favorite characters or spells.
- Log which house the user was placed in even if the page refreshes.

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Main | This will render the main page | 
| Characters | This will render characters page | 
| Character Details | This will render the character details page | 
| Houses | This will render the houses page | 
| Spells | This will render the spells page | 
| Sorting Hat | This will render the sorting hat page showing the house you are in | 

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Total Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | 4hrs | 3hrs | 3hrs |
| Create all initial files and initial React setup | H | 3hrs | 1hr | 1hr |
| Connect to API and show it responding | H | 2hrs | 1hr | 1.5hrs |
| Develop code for App | H | 2hrs | 1.5hr | 1.5hrs |
| Develop code for Header | H | 30mins | 30mins | 30mins |
| Develop code for Footer | H | 30mins | 30mins | 30mins |
| Develop code for Main | H | 3.5hrs | 3.5hrs | 4hrs |
| Develop code for characters page | H | 4hrs | 1hr | 2hr |
| Develop code for character detail page | H | 4hrs | 3hr | 4hrs |
| Develop code for houses page | H | 2hrs | 1hr | 1.5hrs |
| Develop code for house detail page | H | 2hrs | 4hrs | 5hrs |
| Develop code for spells page | H | 2hrs | 2hrs | 3hrs |
| Develop code for sorting hat page | H | 1hrs | 1hr | 1hr |
| Stylize the app | H | 5hrs | 3hrs | 5.5hrs |
| Work on final documentation | H | 3hrs | 3hrs | 3.5hrs |
| Total | H | 38.5hrs | 29hrs | 37.5hrs |

## Code Snippet

I have added my code for fetching my API.  This was a difficult task for me as I needed to specifically set my API URL to have the characters name in it.  However, the characters name had a space in it.  So I had to do some research and "phone a friend" to grasp the syntax behind created a URL with a space.  I was then able to use my new found knowledge to do the fetch for the house detail page a little easier.    

```
const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
let newName = props.match.params.character.replace(' ','%20')

useEffect( () => {
	fetch(`https://www.potterapi.com/v1/characters${key}&name=${newName}`)
	.then(res => res.json())
	.then(potter => {
		setCharacterDetails(potter)
	})
}, [newName])
```

## Issues and Resolutions

**ERROR**:  API not properly fetching the data. 
**RESOLUTION**: I was not using the correct link.  I was unable to get the link working correctly for a while.  I ended up researching and reaching out to fellow students for help on this one.  In the end I had to .replace the space with a %20 to complete the link.
```
let newName = props.match.params.character.replace(' ','%20')
``` 

**ERROR**:  CSS, I had a great deal of issues with the CSS for this page.  I was unexpectedly seeing gaps with no background color and also the footer was floating for a while.  
**RESOLUTION**: I ultimate had to work with my instructor to get this working.  He was able to add a line in to calculate the height of one of the grids which corrected the issue.  I used that in a few places as well as setting the height for the whole app to 100%.
```
height: calc(80% - 15px);
```

**ERROR**:  "React Hook useEffect has a missing dependency:"
**RESOLUTION**: I was getting a warning because I was trying to reference props from inside the useEffect and not adding props to the [] at the end of useEffect.

**ERROR**: "Warning: Each child in an array or iterator should have a unique "key" prop."
**RESOLUTION**: I was missing the correct key and/or the correct location for key in a few files.  I was able to talk with my instructor on this to better understand that it should be located in the parent div and should reference something in the array that is unique. 
```
<div className='spell-container' key={names._id}>
```