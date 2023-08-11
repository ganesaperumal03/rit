const getcoursedata = 'select * from course_master';
const get_university_mark = 'select * from university_marks';
const checkcourse_code = 'select s from course_master where course_master.course_code = $1';
const addcoursdata = 'insert into course_master (course_code,degree_code,dept_code,year,semester,regulation,course_type,category,credit,ppw_lectur,ppw_tutorial,ppw_practical,course_title,course_subtype) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14);';
const add_university_mark_data = "insert into university_marks (degree_code,batch_no, dept_code, regulation_no, semester,course_code, reg_no,grade,section) values ($1,$2,$3,$4,$5,$6,$7,$8,$9);"
const add_erp_student_master = "insert into erp_student_master (name,reg_no, reference_no, dept_code, section,degree_code, current_sem_no) values ($1,$2,$3,$4,$5,$6,$7);"

module.exports = {
    getcoursedata,
    addcoursdata,
    checkcourse_code,
    add_university_mark_data,get_university_mark,
    add_erp_student_master,
}