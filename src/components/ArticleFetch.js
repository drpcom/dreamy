// import { db } from '../backend/firebase_config';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// export const FetchAll = async () => {
//     const [allArticles, setAllArticles] = useState([]);
//     try {
//         const ref = db.collection("Articles");
//         const docs = await ref.get();

//         let articleArr = [];
//         docs.forEach((doc) => {
//             const data = doc.data();
//                 articleArr.push(data)
//         })
//         setAllArticles(articleArr);
        
//     } catch (error) {
//         console.log("Unable to grab articles :(")
//     }
// }
