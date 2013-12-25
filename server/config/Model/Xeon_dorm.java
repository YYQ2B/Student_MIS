package cn.edu.dlnu.model;

//寝室表类Model
public class Xeon_dorm {
	private String dormid;			//寝室编号5位
	private String dorm;        	//寝室名
	private String dormbuildingid;	//公寓号2位

	public String getDormid() {
		return dormid;
	}

	public void setDormid(String dormid) {
		this.dormid = dormid;
	}

	public String getDorm() {
		return dorm;
	}

	public void setDorm(String dorm) {
		this.dorm = dorm;
	}

	public String getDormbuildingid() {
		return dormbuildingid;
	}

	public void setDormbuildingid(String dormbuildingid) {
		this.dormbuildingid = dormbuildingid;
	}

	public Xeon_dorm(String dormid, String dorm, String dormbuildingid) {
		this.dormid = dormid;
		this.dorm = dorm;
		this.dormbuildingid = dormbuildingid;
	}
}
