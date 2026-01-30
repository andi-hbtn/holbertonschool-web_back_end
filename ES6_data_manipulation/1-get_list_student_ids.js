export default function getListStudentIds(param) {
  if (!Array.isArray(param)) {
    return [];
  }
  return param.map((el) => (el.id));
}
