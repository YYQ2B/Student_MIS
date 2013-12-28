package cn.edu.dlnu.model;

//公寓表类Model
public class Xeon_dormbuilding {
	private String dormbuildingid;		//公寓号2位
	private String dormbuilding;		//公寓名

	public String getDormbuildingid() {
		return dormbuildingid;
	}

	public void setDormbuildingid(String dormbuildingid) {
		this.dormbuildingid = dormbuildingid;
	}

	public String getDormbuilding() {
		return dormbuilding;
	}

	public void setDormbuilding(String dormbuilding) {
		this.dormbuilding = dormbuilding;
	}

	public Xeon_dormbuilding(String dormbuildingid, String dormbuilding) {
		this.dormbuildingid = dormbuildingid;
		this.dormbuilding = dormbuilding;
	}
}
