package cn.edu.dlnu.model;

//学院表类Model
public class Xeon_institute {
	private String instituteid;			// 学院号2位
	private String institute; 			// 学院名

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
