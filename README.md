# Welcome-Screen

## Documenation
### Devlopment
- Clone this repo and run `npm install` and `npm run dev` to run a local version.
- Make sure to put the window into 1920x1080 for the best layout.
### Configuration
There are 2 necessary parts. The `portraits` directory (located in the `public` folder) and the `data.csv` (located in the `app` folder.
<br/>
**data.csv:**
| firstname | birthdate | area | image_suffix
| -------- | ------- | ------- | ------- |
| This is the firstname of the person. (Should be written with a captial letter)  | The birthdate of the person in (D)M.(M)M format where the () are for optional values | The area or in german (Fachbereich) e.g. Applikationsentwickler or PiBs | An optional image_suffix for when there are people that share the same name

**The `portraits` directory**<br/>
In the portraits directory (located in the `public` folder) are all images stored. The images for each person must have the `firstname`(optional: `-image_suffix`)`.jpg` format. <br/><br/>
For example: There is only one "Max", meaning the image would be `Max.jpg`. <br/>If there are two Max's one would be `Max.jpg` and the second one would be `Max-1.jpg`

**Env Variables**<br/>
You need to configure a `NEXT_PUBLIC_GITHUB_TOKEN` variable. You can create a github token under [https://github.com/settings/tokens](https://github.com/settings/tokens). Configure the expiration to "No expiration". Then configure the scope to allow the general `repo` setting. In addition allow under `admin:org` `read:orgRead`.
