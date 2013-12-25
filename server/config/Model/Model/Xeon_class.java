package cn.edu.dlnu.model;

//班级表类的Model
public class Xeon_class {
	private String classid;		//班级号6位
	private String majorid;		//专业号4位

	public String getClassid() {
		return classid;
	}

	public void setClassid(String classid) {
		this.classid = classid;
	}

	public String getMajorid() {
		return majorid;
	}

	public void setMajorid(String majorid) {
		this.majorid = majorid;
	}

	public Xeon_class(String classid, String majorid) {
		this.classid = classid;
		this.majorid = majorid;
	}
}
