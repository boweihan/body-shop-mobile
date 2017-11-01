import * as firebase from 'firebase';

export default class Uploader {
    static uploadAsByteArray = async (pickerResultAsByteArray, progressCallback) => {
        try {
            const metadata = {
                contentType: 'image/jpeg',
            };
            const storageRef = firebase.storage().ref();
            const ref = storageRef.child('images/mountains.jpg');
            const uploadTask = ref.put(pickerResultAsByteArray, metadata);
            uploadTask.on('state_changed', (snapshot) => {
                progressCallback && progressCallback(snapshot.bytesTransferred / snapshot.totalBytes);
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, (error) => {
                console.log("in _uploadAsByteArray ", error)
            }, () => {
                const { downloadURL } = uploadTask.snapshot;
                console.log("_uploadAsByteArray ", downloadURL)
            });
        } catch (e) {
            console.log('when trying to load _uploadAsByteArray ', e)
        }
    }

    static convertToByteArray = (input) => {
        console.log("boop");
        const binaryString = Uploader.atob(input);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i += 1) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }

    static atob = (input) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        const str = input.replace(/=+$/, '');
        let output = '';

        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (let bc = 0, bs = 0, buffer, i = 0;
            buffer = str.charAt(i++);
            ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
        ) {
            buffer = chars.indexOf(buffer);
        }
        return output;
    }
}
