package cn.edu.dlnu.model;

//ѧԺ����Model
public class Xeon_institute {
	private String instituteid;			// ѧԺ��2λ
	private String institute; 			// ѧԺ��

	public String getInstituteid() {
		return instituteid;
	}

	public void setInstituteid(String instituteid) {
		this.instituteid = instituteid;
	}

	public String getInstitute() {
		return institute;
	}

	public void setInstitute(String institute) {
		this.institute = institute;
	}

	public Xeon_institute(String instituteid, String institute) {
		this.instituteid = instituteid;
		this.institute = institute;
	}
}
