package cn.edu.dlnu.model;

//��Ա����Model
public class Xeon_instructor_info {
	private String instructorid;		//ְ����10λ
	private String instructor_name;		//ְ������
	private String classid;				//�༶��6λ

	public String getInstructorid() {
		return instructorid;
	}

	public void setInstructorid(String instructorid) {
		this.instructorid = instructorid;
	}

	public String getInstructor_name() {
		return instructor_name;
	}

	public void setInstructor_name(String instructor_name) {
		this.instructor_name = instructor_name;
	}

	public String getClassid() {
		return classid;
	}

	public void setClassid(String classid) {
		this.classid = classid;
	}

	public Xeon_instructor_info(String instructorid, String instructor_name,
			String classid) {
		this.instructorid = instructorid;
		this.instructor_name = instructor_name;
		this.classid = classid;
	}
}
