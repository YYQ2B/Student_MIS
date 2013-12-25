package cn.edu.dlnu.model;

//专业表类Model
public class Xeon_major {
	private String majorid;			//专业号4位
	private String major;			//专业名
	private String instituteid;		//学院号2位
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
