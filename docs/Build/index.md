---
title: Build
sidebar_position: 2
---

​In AI Hub Build, you can build a custom document understanding app in a few steps. Upload your documents, and AI Hub's builder automatically classifies them and suggests what information fields to extract. Customize the suggestions, then save and share your app.​

## Create a Build project
​To get started building a custom app, create a project and add files.​

When you add files to your new project, it's best to add different variations of the documents you want to process. For example, if you are processing bank statements, add statements from several different banks, rather than multiple statements from one bank. This helps ensure that your project pulls the correct data even when you are processing documents from many sources. For each project you can have up to 50 files.​

1. Click Create a project.
2. To upload files, either
    -  Drag and drop folders or files into your project.
    - From the file explorer, select folders or files to upload into your project.​

After the files are uploaded, Build detects what type of document each file is -- such as an invoice, a bank statement, or a driver license -- and assigns each file a "class," based on the document type, such as _Driver License_.​

Classes are displayed in the **Classes** panel. To rename, delete, or change the class of any given file, right-click on it in the classes list. You can also create a new class by clicking the **+** (plus) icon in the **Classes** panel.​

Next, for each class, add fields to designate what information you want to get from your documents.​

## Add fields to classes
​
To process documents, Build needs to know what kind of information you want to extract from each class, or file type.​

Build automatically populates values for several fields in the document and suggests additional fields that you might want to add.​

To change the fields that Build populates, click on the field in the fields panel, and select the **Edit** icon or the Delete icon. To add more fields:​

1. Click **+ Create new** or click one of the suggested fields.
2. Enter a prompt for the information you want to extract from the document, and hit **Enter** to save your changes.​

The prompt is usually a short phrase describing information contained in a document field, such as "total balance," "expiration date," or "federal tax."​

Alternatively, you can enable complex prompt mode and add a full-sentence prompt to extract information not contained in a specific field, such as "What is the summary of this file?"​

3. Save the field by clicking **Create field**.​

For each class you can have up to 50 fields. After you have fields for all the information you want to extract, preview and create your app.​

## Preview and create your app
​Before you finish working on your app, you can preview it and test it with some sample documents. This gives you a chance to ensure the app is working the way you want it to.​

1. Click **Preview app**.
2. Upload folders or files by selecting them in the file explorer or by dragging and dropping them into the upload dialog.​
Build uploads, digitizes, and processes the uploaded files with your new app.​

1. You can create your app either from the preview app or from the project page.
2. Click **Create app**.
3. Enter a name for your app.
4. Enter a description for your app.
5. Click **Create app**.​

After you create your app, you can find it in the **My Hub** tab. You can come back to your app anytime to:​

- Upload and process a batch of documents.
- Look at and download results from previous batches.
- Edit your app to change or add new fields or classes.
- Delete your app.​