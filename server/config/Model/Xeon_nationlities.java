package cn.edu.dlnu.model;

//民族表类Model
public class Xeon_nationlities {
	private String nationid;   //民族号
	private String nation;     //民族

	public String getNationid() {
		return nationid;
	}

	public void setNationid(String nationid) {
		this.nationid = nationid;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	// 民族表类的构造方法
	public Xeon_nationlities(String nationid, String id) {
		this.nationid = nationid;
		this.nation = nation;
	}

}
