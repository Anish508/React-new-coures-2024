const conf = {
  appwriteUrl: String(meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
