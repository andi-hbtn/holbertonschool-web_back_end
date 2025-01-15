import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName,lastName,filename){


    const promises = [signUpUser(firstName,lastName),uploadPhoto(filename)];

    Promise.allSettled(promises)
    .then((results)=>{
        return results;
    })
    .catch((error)=>{
        console.log("error----",error);
        return error;
    })
}