import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { error } from "console";

const firestore = getFirestore(app);
const storage = getStorage(app);

// menerima data
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
// menerima data dari id
export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();

  return data;
}
//menerima data dari field
export async function retrieveDataByField(
  collectionName: string,
  field: string,
  value: string,
) {
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value),
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

//firebase add data
export async function AddData(
  collectionName: string,
  data: any,
  callback: Function,
) {
  await addDoc(collection(firestore, collectionName), data)
    .then((res) => {
      callback(true, res);
    })
    .catch((error) => {
      callback(false);
      console.log(error.message);
    });
}

//firebase Update
export async function UpdateData(
  collectionName: string,
  id: string,
  data: any,
  callback: Function,
) {
  const docRef = doc(firestore, collectionName, id);
  await updateDoc(docRef, data)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}

// firebase delete
export async function deleteData(
  collectionName: string,
  id: string,
  callback: Function,
) {
  const docRef = doc(firestore, collectionName, id);
  await deleteDoc(docRef)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}

export async function uploadFile(
  userid: string,
  file: any,
  callback: Function,
) {
  if (file) {
    // maksimal 1MB
    if (file.size < 1048576) {
      const NewName = "profile." + file.name.split(".")[1];
      const storageRef = ref(storage, `images/users/${userid}/${NewName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl: any) => {
            callback(true, downloadUrl);
          });
        },
      );
    } else {
      return callback(false);
    }
  }

  return true;
}
