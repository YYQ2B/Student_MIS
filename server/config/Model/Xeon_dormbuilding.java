package cn.edu.dlnu.model;

//��Ԣ����Model
public class Xeon_dormbuilding {
	private String dormbuildingid;		//��Ԣ��2λ
	private String dormbuilding;		//��Ԣ��

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
