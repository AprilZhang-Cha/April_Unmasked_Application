## accomplished:
* all the requirements and the notes. Now it's an editable notes app.
* can achieve delete, edit, create new note, and also can delete all notes.
* Loads the initial posts.
* does not edit a deleted post.
* does not edit and create at the same time.
* presentable stylin.
* Responsive styling: I've tested on IPhone Pro Max, IPhone 11, and Iphone 8.

## Sidenotes:
* did not test androids because I don't have an android phone and sadly I can't install a simulator due to hardware problems:( 
* there's also a video demo.
* also a screenshots with different iphone models.
![Alt text](./img.jpg?raw=true "Title")


## Requirements
1. The app must be written in react-native, preferably vanilla react-native, but if you are more comfortable with expo that's fine. The app should run on iOS and Android, but if you don't have an Apple computer just Android is fine.
2. The app must support functionality to create, edit, and delete posts as demonstrated in the video.
3. The initial posts must be sourced from the included json file.
4. The app must use an external icon library for the delete and edit icons, I used [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons), but you can use whatever.
5. The styling doesn't have to match the video but it should be presentable.
6. You are free to structure the code and components however you like.

## Notes
1. Test out the app on various phone models and screen sizes. Does everything still look good and work correctly?
2. Be careful implementing the edit functionality, it can be tricky. What happens when someone deletes another post in the list while they're making an edit? What if they delete the post they're currently editing?
3. Good code is clean code. Do you have any linting errors or react-native warnings?
