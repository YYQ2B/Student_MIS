package cn.edu.dlnu.model;

//�༶�����Model
public class Xeon_class {
	private String classid;		//�༶��6λ
	private String majorid;		//רҵ��4λ

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
