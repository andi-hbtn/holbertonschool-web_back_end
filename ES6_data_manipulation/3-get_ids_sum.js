export default function getStudentIdsSum(data) {
  return data.reduce((sum, total) => (sum + total.id), 0);
}
