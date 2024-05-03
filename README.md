# Welcome-Screen

## Documenation

### Devlopment

- Clone this repo and run `npm install` and `npm run dev` to run a local version.
- Make sure to put the window into 1920x1080 for the best layout.

### Configuration

There are 2 necessary parts. The `images` and the `csv file`.
<br/>
**csv file:**
| firstname | birthdate | area | image_suffix
| -------- | ------- | ------- | ------- |
| This is the firstname of the person. (Should be written with a captial letter) | The birthdate of the person in (D)M.(M)M format where the () are for optional values | The area or in german (Fachbereich) e.g. Applikationsentwickler or PiBs | An optional image_suffix for when there are people that share the same name

**The `images`**<br/>
The images for each person must be in the `firstname`(optional: `-image_suffix`)`.jpg` format. <br/><br/>
For example: There is only one "Max", meaning the image would be `Max.jpg`. <br/>If there are two Max's one would be `Max.jpg` and the second one would be `Max-1.jpg`
A different approach would be to define a firstname e.g. `Max M.`. The image then would have to be named `Max B..jpg` (important are the 2 dots to have the exact same string like the firstname, because it also takes dots into consideration when getting the image).

**Define where to get the csv and the images**
The csv is getting parsed in the `app/page.jsx` file.
The images are getting loaded in the `components/PersonSwitcher.jsx` file.

**Env Variables**<br/>
You need to configure a `NEXT_PUBLIC_GITHUB_TOKEN` variable. You can create a github token under [https://github.com/settings/tokens](https://github.com/settings/tokens). Configure the expiration to "No expiration". Then configure the scope to allow the general `repo` setting. In addition allow under `admin:org` `read:orgRead`.

**Codelines from GitHub**

- **How it works:**
  The screen gets every repo inside a defined organisation, e.g. `BA-2023-2024`. Then iterates over each repo, iterates over each contributor, iterates over each week (syn. for commit) and finally, calculates the `additions - deletions` to get the lines added in total, resulting in the approximate lines in total of the repo.
- **How to get the codelines from a different organisation:**
  In the `components/LinesGithub.jsx` file, there is a const variable `ORG_NAME` where the organisation name is defined. <br/>To get the repos from a different organisation, change the const to a different organisation name.
