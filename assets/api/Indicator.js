/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

export async function getIndicators(retrieved) {
    var snapshot = await firestore().collection('indicators').get();

    var list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    // console.log(list);
    retrieved(list)
}
