next-dropbox-chooser
### [How to create new app?](https://www.dropbox.com/developers/apps/create)

============
Simple nextjs wrapper for [Dropbox Chooser API](https://www.dropbox.com/developers/chooser)

Installation 
============
```
npm install next-dropbox-chooser
```

Usage
=====
```
<DropboxChooser 
    appkey={'your-uniq-app-key'}
    onSuccess={(files) => {window.alert("Here's the file link: " + files[0].link)}}
    cancel={() => {}}
    multiselect={true}
    extensions={['.mp4']} >
    <div className="dropbox-button">Click me!</div>        
</DropboxChooser>
```

If you are passing app-key as environment variables
### In  .env file

```js
NEXT_PUBLIC_DROPBOX_APP_KEY = 
```


prop	value	default value	description
appkey	string	REQUIRED	Dropbox app key
linkType	string	preview	either direct or preview for the files selected
extensions	string[]	optional	 only be able to select files with these extensions. You may also specify file types, such as "video" or "images" in the list. For more information
multiselect	boolean	false	Enable files multi select
onSuccess	(files) => {}	REQUIRED	function to call when files selected
cancel	function	optional	Called when the user closes the dialog without selecting a file and does not include any parameters.
folderselect boolean optional    while true allows the user to select both folders and files.You cannot specify `linkType: "direct"` when using      `folderselect: true`
sizeLimit number optional  If specified, the user will only be able to select files with size
