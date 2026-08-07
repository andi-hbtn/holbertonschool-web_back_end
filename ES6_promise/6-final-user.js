import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName), uploadPhoto(filename)])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
