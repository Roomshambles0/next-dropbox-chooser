"use client";
import React, { useEffect, useCallback, useState } from 'react';
import Script from 'next/script';



interface file{
    id:string;
    name:string;
    link:string;
    bytes:number;
    icon:string;
    thumbnailLink?:string;
    isDir:boolean;
}

interface Chooserprops
{
   children: React.ReactNode
   onSuccess: (files:any[]) => void; // replace any[] with the actual type of files
   onCancel?: () => void;
   appkey:string;
   multiselect?:boolean;
   linkType?: string;
   folderselect?:boolean;
   extensions?:string[];
   sizeLimit?:number[];
} 

interface options{
    success: (files: file[]) => void; // replace any[] with the actual type of files
    cancel?: () => void;
    multiselect?:boolean;
    linkType?: string;
    folderselect?:boolean;
    extensions?:string[];
    sizeLimit?:number[];
}

declare global {
    interface Window {
      Dropbox: any;
    }
  }

  var options:options = 
    {
              success: (files:file[]) => {
                console.log('success', files);
                
              },    
              cancel: () => {
                console.log('cancel');
               
              },
              linkType:"direct", // or "preview"
              multiselect: true, // 是否支持多选
              folderselect: false, 
            
  };

export default function DropboxChooser({children,onSuccess, onCancel ,appkey ,multiselect, linkType, folderselect, extensions, sizeLimit}:Chooserprops) {
  
    if(!onSuccess || !appkey )
    {
        throw new Error("Add required props");
    }

    if(!appkey)
    {
        throw new Error("Please add valid id");
    }

   
    

   const [Dropbox, setDropbox] = useState<any>();

  
  useEffect(()=>{
                options.success = (files:file[]) => {
                    console.log('success', files);
                    onSuccess && onSuccess(files);
                  }
                  if(linkType){
                    options.linkType =  linkType;
                  }
                  if(multiselect){
                    options.multiselect =  multiselect;
                  }
                 if(folderselect){
                    options.folderselect = folderselect;
                 }
                 if(extensions){
                    options.extensions = extensions;
                 }
                 if(sizeLimit){
                     options.sizeLimit = sizeLimit;
                 }
                 if(onCancel){
                    options.cancel = () => {
                        console.log('cancel');
                        if(onCancel){
                        onCancel && onCancel();
                        }
                 }
    }
  },[onSuccess,onCancel,multiselect, linkType, folderselect, extensions, sizeLimit])



  const handleChoose = useCallback(() => {
    console.log("choose")
    console.log(options)
    if (Dropbox) {
        console.log("ok");
       Dropbox.choose(options);
    }
  
  }, [options,Dropbox]);

  return (<>
  <Script
        type="text/javascript"
        src="https://www.dropbox.com/static/api/2/dropins.js"
        id='dropboxjs'
        data-app-key = {appkey}
        onLoad={() => {
            console.log("loaded");
             setDropbox(window.Dropbox);
             
        }}
      />
    <div onClick={handleChoose}>
    { children || <button>dropbox chooser</button>}
    </div>
    </>
  );

}
