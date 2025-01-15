import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(filename)];

  return Promise.allSettled(promises)
    .then((results) => {
      return results.map((result) => {return result.status === 'fulfilled' ? { status: result.status,value: result.value } : { status: result.status, value: result.reason.toString() } })
    })
    .catch(error => error)
}
