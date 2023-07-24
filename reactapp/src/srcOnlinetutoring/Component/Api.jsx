import axios from "axios";

const urlot='http://localhost:9999'
const urlfeed='http://localhost:8080'

//Student
const getStudent = () => axios.get(`${urlot}/get`)
const addStudent = (student) => axios.post(`${urlot}/admin/set`,student)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editStudent = (stu_id,student)=>axios.put(`${urlot}/update/${stu_id}`,student)
const deleteStudent=(stu_id)=>axios.delete(`${urlot}/delete/${stu_id}`)
//feedback 
const setfeed = (feed) => axios.get(`${urlfeed}/Feedback/getfed`,feed)

export {getStudent,addStudent,editStudent,deleteStudent,setfeed}