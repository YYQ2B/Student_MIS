package cn.edu.dlnu.model;

//רҵ����Model
public class Xeon_major {
	private String majorid;			//רҵ��4λ
	private String major;			//רҵ��
	private String instituteid;		//ѧԺ��2λ
	public String getMajorid() {
		return majorid;
	}
	public void setMajorid(String majorid) {
		this.majorid = majorid;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getInstituteid() {
		return instituteid;
	}
	public void setInstituteid(String instituteid) {
		this.instituteid = instituteid;
	}
	public Xeon_major(String majorid, String major, String instituteid){
		this.majorid = majorid;
		this.major = major;
		this.instituteid = instituteid;
	}
	
}
