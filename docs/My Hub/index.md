---
title: My Hub
sidebar_position: 3
---

# My Hub
​
The **My Hub** tab is where you can find your custom apps, track and purchase AI Hub consumption units, and connect and manage external storage, including AWS S3 buckets or Google Drive.
​
## Custom apps
​
The apps you've created with Build are listed in your **My Hub** tab. When you open any of your custom apps, you can upload and process files. You can also:
​
- View app details to see what document types the app processes, and what fields it extracts from each type or class.
- Edit the app, adding or modifying any of the classes and fields in your app.
- Delete the app. Deleting the app deletes the app and any files you have processed, but it does not delete the project you used to create the app. You can delete the project from Build.
  
## Usage and billing
​
The **My Usage** panel shows your current consumption unit balance, as well as how many total units you have used. You can also purchase more units by clicking **Buy units**.
​

See the [pricing page](/Pricing%20Policy/) for complete details about consumption units and pricing.
​
## Connect external storage
​
You can connect an AWS S3 bucket or Google Drive to AI Hub, so that you can store and upload files from your own external storage.
​
### Connecting an AWS S3 bucket

#### Prerequisites
​
To connect an AWS S3 bucket, you'll need:
​
- An access key with following permissions:
​
  - `s3:DeleteObject`
  - `s3:DeleteObjectVersion`
  - `s3:GetObject`
  - `s3:GetObjectAcl`
  - `s3:GetObjectVersion`
  - `s3:PutObject`
  - `s3:PutObjectAcl`
  - `s3:PutObjectVersion`
  - `s3:ListBucket`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
​
- The following information about the S3 bucket. All information is required unless marked as optional. You can find this information in your S3 bucket settings:
​
  - Access key ID
  - Secret access key
  - Bucket name
  - AWS region
  - Optional. Path to connect. To connect the bucket's root, leave path empty.
  - Optional. Server-side encryption eype.
​
#### Connect AWS S3 bucket

1. Click **+ Connect external storage**.
1. Select **AWS S3 Bucket**.
1. Grant permissions: Ensure that you have granted the required permissions for the access key you are going to use. Click **Next**.
1. Enter the information for the AWS S3 bucket you want to connect.
1. Click **Connect**.
​

After connecting the S3 bucket, when you upload files to AI Hub, you have the option to browse your external storage. You can modify or delete your connected storage from the **My Hub** tab.

### Connecting a Google Drive

1. Click **+ Connect external storage**.
1. Select **Google Drive**.
1. Enter a name for your drive.
1. Click **Connect**.
1. Select and sign in to the Google account you want to use.
1. Click **Allow** to grant Instabase the necessary permissions. To allow AI Hub to read from and export to your Drive, Google requires us to request the following permissions: See, edit, create, and delete.
​

After connecting Google Drive, when you upload files to AI Hub, you have the option to browse your external storage. You can modify or delete your connected storage from the **My Hub** tab.