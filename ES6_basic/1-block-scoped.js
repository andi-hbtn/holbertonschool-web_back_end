const today = "today";

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {  //true
    const task = true;
    const task2 = false;
  }

  console.log(today);

    return [task, task2];
}



