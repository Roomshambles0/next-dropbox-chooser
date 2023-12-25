next-dropbox-chooser

Simple nextjs wrapper for [Dropbox Chooser API](https://www.dropbox.com/developers/chooser)
============

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


| Prop         | Type                   | Required       | Default Value | Description                                                                                                          |
|--------------|------------------------|----------------|---------------|----------------------------------------------------------------------------------------------------------------------|
| appkey       | string                 | Yes            | N/A           | Dropbox app key (required for authentication and authorization).                                                     |
| linkType     | string                 | No             | preview       | Specifies whether the links provided by Dropbox are direct links or links leading to a preview of selected files.     |
| extensions   | string[]               | No             | N/A           | Array of file extensions restricting file selection to those with specified extensions or file types (e.g., "video"). |
| multiselect  | boolean                | No             | false         | Enables or disables the ability to select multiple files.                                                             |
| onSuccess    | (files: File[]) => {} | Yes            | N/A           | Callback function executed when files are successfully selected. Receives selected files as a parameter.               |
| onCancel     | () => void             | No             | N/A           | Function called when the user closes the dialog without selecting a file.                                            |
| folderselect | boolean                | No             | false         | If true, allows the user to select both folders and files. Cannot use `linkType: "direct"` with `folderselect: true`. |
| sizeLimit    | number                 | No             | N/A           | If specified, restricts file selection to files with a size less than or equal to the specified limit.               |




