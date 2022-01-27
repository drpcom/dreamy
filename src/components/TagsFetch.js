import {useState, useEffect} from 'react';
import { db } from '../backend/firebase_config';
import 'firebase/auth';
import 'firebase/firestore';

export function useTagsFetch() {
    const [everyTag, setEveryTag] = useState([]);

        useEffect(() => {
            
            const retrieveAll = async () => {
                try {
                    const tagRef = db.collection("Tags").doc('9mbewr5gGihaX2sefiOG');
                    const document = await tagRef.get();

                    const data = document.data().tags;
                    setEveryTag(data)
                    
                } catch (error) {
                    console.log("Unable to grab tags :(")
                }
            }
            
            retrieveAll();
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
        return {everyTag, setEveryTag};

    }